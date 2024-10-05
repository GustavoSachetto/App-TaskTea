import { Modal } from "react-native";
import { CenteredView, ModalView, CloseButton, ModalImage, TextHelp, TextTip,
  ModalText, DicaPopUp } from "@/styles/tip";

const ImageDicaPopUp = require("@/assets/icons/dica-pop-up.png");

type TipProps = {
  name: string,
  text: string,
  visible?: boolean, 
  onClose: () => void
}

export default function Tip ({ visible, onClose, name, text }: TipProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <CenteredView>
        <ModalView>
          <CloseButton onPress={onClose}>
            <ModalImage source={require("../assets/icons/x.png")} />
          </CloseButton>
          
          <DicaPopUp source={ImageDicaPopUp} resizeMode="contain" />
          <ModalText>Olá {name}!</ModalText>
          <TextHelp>Dica que pode te ajudar:</TextHelp>
          <TextTip>{text}</TextTip>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};
