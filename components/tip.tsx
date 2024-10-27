import { Modal } from "react-native";
import {
  CenteredView, ModalView, CloseButton, ModalImage, TextHelp, TextTip,
  ModalText, DicaPopUp
} from "@/styles/tip";
import { ModalOverlay } from "@/styles/overlay";

const ImageDicaPopUp = require("@/assets/icons/dica-pop-up.png");

type TipProps = {
  name: string,
  text: string,
  visible?: boolean,
  onClose: () => void
}

export default function Tip({ visible, onClose, name, text }: TipProps) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalOverlay>
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
      </ModalOverlay>
    </Modal>
  );
};
