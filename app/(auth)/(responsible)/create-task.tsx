import { useEffect, useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text } from 'react-native';
import { TextButton } from "@/styles/index";
import {
  Container, ButtonEdit, GradientBorderBoxTasks, EditImage, InputDescription,
  TarefaImage, Voltar, Input,
  ButtonCreate, Label, ContainerTasks,
  Imagem
} from "@/styles/create-task";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { CategoryProps, getAllCategories } from '@/services/api/routes/categories';
import { useSession } from '@/hooks/ctx';
import { createTask } from '@/services/api/routes/tasks';
import CreateCategory from '@/components/create-category';

const ImageVoltar = require('@/assets/icons/voltarAmarelo.png');
const ImageTarefa = require('@/assets/images/fundo-tarefa.jpeg');
const ImageEditar = require('@/assets/icons/editar.png');

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tip, setTip] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
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
  };

  const handleSubmit = async () => {
    if (!title || !description || !tip || selectedCategory === '') {
      console.log('Erro', 'Por favor, preencha todos os campos.');
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
      await createTask(taskData, session);
      console.log('Sucesso!', 'Tarefa criada!');
    }

  };

  const handlePickerChange = (itemValue: string) => {
    if (itemValue === 'createNew') {
      setModalVisible(true);
    } else {
      setSelectedCategory(itemValue);
    }
  };

  const handleCategoryCreated = () => {
    fetchCategories();
  };

  return (
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        {modalVisible}
        <Pressable onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </Pressable>
        <GradientBorderBoxTasks>
          <Imagem>
            <ButtonEdit>
              <EditImage source={ImageEditar} resizeMode="contain" />
            </ButtonEdit>
            <TarefaImage source={ImageTarefa} />
          </Imagem> 
          <ContainerTasks >
           
            <Label>Título do desafio:</Label>
            <Input
              value={title}
              onChangeText={setTitle}
            />
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
              <Picker.Item label="Criar nova categoria" value="createNew" />
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
    width: '95%'
  },
});