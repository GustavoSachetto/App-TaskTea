import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { TextButton } from "@/styles/index";
import {
  Container, ButtonEdit, GradientBorderBoxTasks, EditImage, InputDescription,
  TarefaImage, Voltar, Input,
  ButtonCreate, Label, ContainerTasks, Imagem,
  SelectWrapper, LabelContainer, Asterisco
} from "@/styles/create-task";
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { CategoryProps, getAllCategories } from '@/services/api/routes/categories';
import { useSession } from '@/hooks/ctx';
import { createTask, saveImageTask } from '@/services/api/routes/tasks';
import { createTaskUser } from '@/services/api/routes/taskuser';
import { getMyRelationships, UserRelationshipProps } from '@/services/api/routes/user';
import { pickImage } from '@/utils/imageAnalyzer';
import CreateCategory from '@/components/create-category';
import Toast from 'react-native-toast-message';
import { w } from '@/utils/responsiveMesures';
import { stylesPicker } from '@/styles/pickerStyle';

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
  const [image, setImage] = useState<string | undefined | null>(null);
  const [myrelationship, setMyRelationship] = useState<UserRelationshipProps[] | void>([]);
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

  const fetchMyRelationship = async () => {
    if (session) {
      try {
        const response = await getMyRelationships(session);
        setMyRelationship(response.data);
      } catch (error) {
        console.log('Erro', 'Não foi pegar os seus relacionamentos');
      }
    }
  }

  const handleImage = async () => {
    let imageBase64: string | undefined = await pickImage();
    setImage(imageBase64);
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

      if (image != null) saveImageTask(newTaskId, image, session);

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
            <TarefaImage source={image ?? ImageTarefa} />
          </Imagem>
          <ContainerTasks >

          
  {/* Título */}
  <Label>Título do desafio:</Label>  
  <LabelContainer>
  <Asterisco>*</Asterisco>

    <Input
      value={title}
      onChangeText={setTitle}
      multiline={true}
    />
  </LabelContainer>

  {/* Descrição */}
  <Label>Descrição:</Label>  
  <LabelContainer>
  <Asterisco>*</Asterisco>

    <InputDescription
      value={description}
      onChangeText={setDescription}
      multiline={true}
    />
  </LabelContainer>

  {/* Dica */}
  <Label>Escreva uma dica:</Label> 
   <LabelContainer>
  <Asterisco>*</Asterisco>

    <Input
      value={tip}
      onChangeText={setTip}
      multiline={true}
    />
  </LabelContainer>

  {/* Dificuldade */}
  <Label>Dificuldade:</Label> 
   <LabelContainer>
  <Asterisco>*</Asterisco>

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
  </LabelContainer>

  {/* Categoria */}
  <Label>Categoria:</Label>
    <LabelContainer>
  <Asterisco>*</Asterisco>

    <SelectWrapper>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={handlePickerChange}
        style={stylesPicker.picker}
      >
        <Picker.Item label="Selecione uma categoria" value="" />
        {categories.map((category) => (
          <Picker.Item key={category.id} label={category.name} value={category.id.toString()} />
        ))}
        <Picker.Item label="Criar nova categoria" color='#000' value="createNew" />
      </Picker>
    </SelectWrapper>
  </LabelContainer>

  {/* Filho */}
  <Label>Selecionar Filho:</Label>  
  <LabelContainer>
  <Asterisco>*</Asterisco>

    <SelectWrapper>
      <Picker
        selectedValue={selectedRelationship}
        onValueChange={handlePickerRelationship}
        style={stylesPicker.picker}
      >
        <Picker.Item label="Selecione o filho" value="" />
        {myrelationship?.map((data) => (
          <Picker.Item key={data.id} label={data.name} value={data.id.toString()} />
        ))}
      </Picker>
    </SelectWrapper>
  </LabelContainer>

            <ButtonCreate onPress={handleSubmit} style={{ marginTop: w(6) }}>
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
