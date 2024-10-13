import { useState } from 'react';
import { Modal } from 'react-native';
import { CenteredView, Header, ModalView, CloseButton, Button, TextStyle, Input, Label, ModalImage } from '@/styles/create-category';
import { createCategory } from '@/services/api/routes/categories';
import { useSession } from '@/hooks/ctx';

type CreateCategoryProps = {
  visible?: boolean;
  onClose: () => void;
  onCategoryCreated: () => void;
};

export default function CreateCategory({ visible, onClose, onCategoryCreated }: CreateCategoryProps) {
  const { session } = useSession();
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = async () => {
    if (!newCategory) {
      console.log('Erro', 'Por favor, insira um nome para a categoria.');
      return;
    }

    const data = { name: newCategory };

    if (session) {
      try {
        await createCategory(data, session);
        console.log('Sucesso', 'Categoria criada com sucesso!');
        setNewCategory('');
        onCategoryCreated();
        onClose();
      } catch (error) {
        console.log('Erro ao criar categoria:', error);
        console.log('Erro', 'Ocorreu um erro ao criar a categoria. Tente novamente.');
      }
    }
  };

  const handleRequestClose = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleRequestClose}
    >
      <CenteredView>
        <ModalView>
          <CloseButton onPress={onClose}>
            <ModalImage source={require('../assets/icons/x.png')} />
          </CloseButton>
          <Header>
            <Label>Criar nova categoria</Label>
          </Header>
          <Input
            placeholder='Inserir categoria:'
            value={newCategory}
            onChangeText={setNewCategory}
          />
          <Button onPress={handleSubmit}>
            <TextStyle>Criar</TextStyle>
          </Button>
        </ModalView>
      </CenteredView>
    </Modal>
  );
}
