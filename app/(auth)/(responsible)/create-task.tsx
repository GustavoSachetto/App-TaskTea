import { useEffect, useState } from 'react';
import { ScrollView, Alert, Pressable } from 'react-native';
import { Overlay, TextButton } from "@/styles/index";
import { Container, ButtonEdit, GradientBorderBoxTasks, EditImage, InputDescription,
   TarefaImage, Voltar, BoxTasks, Input, ContainerButtonsSign,
   ButtonCreate, Label } from "@/styles/create-task";
import ServiceTerms from '@/components/service-terms';

import { useRouter } from 'expo-router';
import { Button } from '@/styles/tasks';
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

  if (session){
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {modalVisible}
      <Container>
        <Button onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}>
          <Voltar source={ImageVoltar} resizeMode="contain" />
        </Button>
        <GradientBorderBoxTasks>
          <ButtonEdit>
            <EditImage source={ImageEditar} resizeMode="contain" />
          </ButtonEdit>  
          <TarefaImage source={ImageTarefa} />
          <BoxTasks>
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
              style={{ height: 50, width: 150 }}
            >
              <Picker.Item label="Fácil" value="easy" />
              <Picker.Item label="Médio" value="medium" />
              <Picker.Item label="Difícil" value="hard" />
            </Picker>
            <Label>Categoria:</Label>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={handlePickerChange} 
              style={{ height: 50, width: 150 }}
            >
              <Picker.Item label="Selecione uma categoria" value="" />
              {categories.map((category) => (
                <Picker.Item key={category.id} label={category.name} value={category.id.toString()} /> 
              ))}
              <Picker.Item label="Criar nova categoria" value="createNew" />
            </Picker>
            <ContainerButtonsSign>
              <ButtonCreate onPress={handleSubmit}>
                <TextButton>Criar</TextButton>
              </ButtonCreate>
            </ContainerButtonsSign>
          </BoxTasks>
        </GradientBorderBoxTasks>
        <CreateCategory
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCategoryCreated={handleCategoryCreated} 
      />
      </Container>
    </ScrollView>
  );
}

