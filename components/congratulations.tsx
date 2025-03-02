import { useState } from 'react';
import { Modal } from 'react-native';
import { CenteredView, Header, ModalView, CloseButton, Button, TextStyle, Input, Title, Image, ModalImage, ModalText, Confete, ContentContainer, GradientBorderBox } from '@/styles/congratulations';
import { createCategory } from '@/services/api/routes/categories';
import { useSession } from '@/hooks/ctx';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ModalOverlay } from '@/styles/overlay';

const ImageTeo = require('@/assets/icons/Téo.jpg');
const ImageConfete = require('@/assets/images/confetes.png');

interface CongratulationsProps {
  visible: boolean;
  onClose: () => void;
}

export default function Congratulations({ visible, onClose } : CongratulationsProps) {
  const { session } = useSession();
  const [newCategory, setNewCategory] = useState('');

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
      <ModalOverlay>
        <CenteredView>
          <CloseButton onPress={onClose} />     
          <ModalView>
            <Header>
              <Confete source={ImageConfete} style={{position:'absolute', left: wp(0.5)}}/> 
              <Title>Parabéns,</Title>
              <Confete source={ImageConfete} style={{position: 'absolute', transform: 'rotateY(180deg)', zIndex: '9999'}}/> 
              <Title>{"\n"} amiguinho!</Title>     
              <ModalText style={{top: wp(3)}}>{"\n"}Continue assim, você{"\n"}está indo muito bem!</ModalText>
            </Header>  
            <Image source={ImageTeo}/> 
            <GradientBorderBox />
          </ModalView>
        </CenteredView>
      </ModalOverlay> 
    </Modal>
  );
}
