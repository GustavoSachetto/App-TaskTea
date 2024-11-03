import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { TextButton } from "@/styles/index";
import {
    Container, ButtonEdit, GradientBorderBoxTasks, EditImage, InputDescription,
    TarefaImage, Voltar, Input,
    ButtonCreate, Label, ContainerTasks, Imagem,
    SelectWrapper
} from "@/styles/create-task";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { CategoryProps, fetchCategoryById, getAllCategories } from '@/services/api/routes/categories';
import { useSession } from '@/hooks/ctx';
import { editTaskById, fetchTaskById, saveImageTask } from '@/services/api/routes/tasks';
import { pickImage } from '@/utils/imageAnalyzer';
import CreateCategory from '@/components/create-category';
import Toast from 'react-native-toast-message';
import { stylesPicker } from '@/styles/pickerStyle';

const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');
const ImageTarefa = require('@/assets/images/fundo-tarefa.jpeg');
const ImageEditar = require('@/assets/icons/editar.png');

export default function CreateTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tip, setTip] = useState('');
    const [difficulty, setDifficulty] = useState('easy');
    const [image, setImage] = useState<string | null | undefined>(null);
    const [categoriesPicker, setCategoriesPicker] = useState<CategoryProps[]>([]);
    const [imageTask, setImageTask] = useState<string | null | undefined>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [modalVisible, setModalVisible] = useState(false);
    const { session } = useSession();
    const router = useRouter();

    const { id } = useLocalSearchParams();
    const numericId = Number(id);

    useEffect(() => {
        fetchTask();
        fetchCategories();
    }, [session]);


    const fetchTask = async () => {
        if (session) {
            const result = await fetchTaskById(session, numericId);
            const category = await fetchCategoryById(result.data.categories_id)

            setTitle(result.data.title);
            setDescription(result.data.description)
            setTip(result.data.tip)
            setDifficulty(result.data.level)
            setImageTask(result.data.image)
            setCategoriesPicker([category.data]);

            const editedCategory = category.data;

            const allCategories = await getAllCategories();

            const categoriesToDisplay = [editedCategory, ...allCategories.data.filter(cat => cat.id !== editedCategory.id)];

            setCategoriesPicker(categoriesToDisplay);

            setSelectedCategory(result.data.categories_id.toString());
        }

    }

    const fetchCategories = async () => {
        if (session) {
            try {
                const response = await getAllCategories();
                setCategoriesPicker(response.data);
            } catch (error) {
                console.log('Erro', 'Não foi possível carregar as categorias.');
            }
        }
    }

    const handleImage = async () => {
        let imageBase64: string | undefined = await pickImage();

        setImage(imageBase64);
        setImageTask(imageBase64);
    }

    const handleSubmit = async () => {

        const taskData = {
            title,
            description,
            tip,
            level: difficulty,
            categories_id: Number(selectedCategory),
        };

        if (session) {
            await editTaskById(numericId, taskData, session);
            if (image != null) {
                saveImageTask(numericId, image, session);
            }

            Toast.show({
                text1: 'Sucesso',
                text2: 'Desafio editado.'
            });
            setTimeout(() => {
                router.push('/(auth)/(responsible)/(tabs)/tasks');
            }, 2000);
        }
    };

    const handlePickerChange = (itemValue: string | number) => {
        if (itemValue === 'createNew') {
            setModalVisible(true);
        }
    };

    const handleCategoryCreated = () => {
        fetchCategories();

    }

    return (
        <>
            <View style={{ zIndex: 100 }}>
                <Toast />
            </View>
            <Container contentContainerStyle={{ flexGrow: 1 }}>
                <Pressable onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}>
                    <Voltar source={ImageVoltar} resizeMode="contain" />
                </Pressable>
                <GradientBorderBoxTasks>
                    <Imagem>
                        <ButtonEdit onPress={handleImage}>
                            <EditImage source={ImageEditar} resizeMode="contain" />
                        </ButtonEdit>
                        <TarefaImage source={imageTask ?? ImageTarefa} />
                    </Imagem>
                    <ContainerTasks >

                        <Label>Título do desafio:</Label>
                        <Input
                            value={title}
                            onChangeText={setTitle}
                        />
                        <Label>Descrição:</Label>
                        <InputDescription
                            value={description}
                            onChangeText={setDescription}
                        />
                        <Label>Escreva uma dica:</Label>
                        <Input
                            value={tip}
                            onChangeText={setTip}
                        />

                        <Label>Dificuldade:</Label>
                        <SelectWrapper>
                            <Picker
                                selectedValue={difficulty}
                                onValueChange={setDifficulty}
                                style={stylesPicker.picker}
                            >
                                <Picker.Item label="Fácil" value="easy" />
                                <Picker.Item label="Médio" value="medium" />
                                <Picker.Item label="Difícil" value="hard" />
                            </Picker>
                        </SelectWrapper>
                        <Label>Categoria:</Label>
                        <SelectWrapper>
                            <Picker
                                selectedValue={selectedCategory}
                                onValueChange={handlePickerChange}
                                style={stylesPicker.picker}
                            >
                                {categoriesPicker.map((category: any) => (
                                    <Picker.Item key={category.id} label={category.name} value={category.id} />
                                ))}
                                <Picker.Item label="Criar nova categoria" color='#000' value="createNew" />
                            </Picker>
                        </SelectWrapper>
                        <ButtonCreate onPress={handleSubmit}>
                            <TextButton>Salvar alterações</TextButton>
                        </ButtonCreate>
                    </ContainerTasks>

                </GradientBorderBoxTasks>
                <CreateCategory
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onCategoryCreated={handleCategoryCreated}
                />
            </Container>
        </>
    );
}

