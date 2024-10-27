import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { TextButton } from "@/styles/index";
import {
  Container, ButtonEdit, GradientBorderBoxTasks, EditImage, InputDescription,
  TarefaImage, Voltar, Input,
  ButtonCreate, Label, ContainerTasks, Imagem
} from "@/styles/create-task";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getFontSize } from '@/utils/fontSize';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { CategoryProps, getAllCategories } from '@/services/api/routes/categories';
import { useSession } from '@/hooks/ctx';
import { createTask, saveImageTask } from '@/services/api/routes/tasks';
import { createTaskUser } from '@/services/api/routes/taskuser';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user';
import CreateCategory from '@/components/create-category';
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'expo-image-picker';

const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');
const ImageTarefa = require('@/assets/images/fundo-tarefa.jpeg');
const ImageEditar = require('@/assets/icons/editar.png');

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('');
  const [idTask, setIdTask] = useState<number | undefined>(undefined);
  const [userReceiver, setUserReceiver] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [myrelationship, setMyRelationship] = useState<UserRelationshipProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedRelationship, setSelectedRelationship] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
    fetchMyRelationship();
  }, [session]);

  const fetchCategories = async () => {
    if (session) {
      try {
        const response = await getAllCategories();
        setCategories(response.data);
      } catch (error) {
        console.log('Erro', 'Não foi possível carregar as categorias.');
      }
    }
  }

  const fetchMyRelationship = async () =>{
    if (session) {
      try {
        const response = await getMyRelationships(session);
        setMyRelationship(response.data);
      } catch (error) {
        console.log('Erro', 'Não foi pegar os seus relacionamentos');
      }
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) setImage(result.assets[0]);
  }

  const handleSubmit = async () => {
    if (!title || !description || !tip || selectedCategory === '') {
      Toast.show({
        text1: 'Erro',
        text2: 'Por favor, preencha todos os campos.'
      });
      return;
    }

    const taskData = {
      title,
      description,
      tip,
      level: difficulty,
      categories_id: Number(selectedCategory),
    };

    if (session) {
      const response = await createTask(taskData, session);
    
      const newTaskId = response.data.id;
      setIdTask(newTaskId);
      setUserReceiver(selectedRelationship);

      if (image != null) saveImageTask(newTaskId, image.uri, session);
    
      const taskUserData = {
        tasks_id: newTaskId,             
        user_receiver_id: Number(selectedRelationship) 
      };
    
      await createTaskUser(taskUserData, session);
      router.push('/(auth)/(responsible)/(tabs)/tasks');
    }

  };

  const handlePickerChange = (itemValue: string) => {
    if (itemValue === 'createNew') {
      setModalVisible(true);
    } else {
      setSelectedCategory(itemValue);
    }
  }

  const handlePickerRelationship = (itemValue: string) => {
    setSelectedRelationship(itemValue);
  }

  const handleCategoryCreated = () => {
    fetchCategories();
  }

  return (
    <>
      <View style={{zIndex:100}}>
        <Toast/>
      </View>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <Pressable onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </Pressable>
        <GradientBorderBoxTasks>
          <Imagem>
            <ButtonEdit onPress={pickImage}>
              <EditImage source={ImageEditar} resizeMode="contain" />
            </ButtonEdit>
            <TarefaImage source={image?.uri ?? ImageTarefa} />
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
            <Picker
              selectedValue={difficulty}
              onValueChange={setDifficulty}
              style={styles.picker}
            >
              <Picker.Item label="Fácil" value="easy" />
              <Picker.Item label="Médio" value="medium" />
              <Picker.Item label="Difícil" value="hard" />
            </Picker>
            <Label>Categoria:</Label>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={handlePickerChange}
              style={styles.picker}
            >
              <Picker.Item label="Selecione uma categoria" value="" />
              {categories.map((category) => (
                <Picker.Item key={category.id} label={category.name} value={category.id.toString()} />
              ))}
              <Picker.Item label="Criar nova categoria" color='#000' value="createNew" />
            </Picker>

            <Label>Selecionar Filho:</Label>
            <Picker
              selectedValue={selectedRelationship}
              onValueChange={handlePickerRelationship}
              style={styles.picker}
            >
              <Picker.Item label="Selecione o filho" value="" />
              {myrelationship.map((data) => (
                <Picker.Item key={data.id} label={data.name} value={data.id.toString()} />
              ))}
            </Picker>
            <ButtonCreate onPress={handleSubmit}>
              <TextButton>Criar</TextButton>
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

const styles = StyleSheet.create({
  picker: {
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    borderRadius: 15,
    borderColor: '#f9d54b',
    borderWidth: 2,
    marginTop: 10,
    marginVertical: 10,
    alignSelf: 'center',
    width: '95%',
    fontSize: getFontSize(8),
    color: '#737373'
  },
});