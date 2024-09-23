import { Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { Fonts } from "@/constants/Fonts";
import { CenteredView, ModalView, CloseButton, ModalImage, TextHelp, TextTip,
  ModalText, DicaPopUp } from "@/styles/tip";
      

const ImageDicaPopUp = require("@/assets/icons/dica-pop-up.png");

export default Tip = ({ visible, onClose }) => {
  const router = useRouter();

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
          <ModalText>Olá Nome!</ModalText>
          <TextHelp>Dica que pode te ajudar:</TextHelp>
          <TextTip>Dica</TextTip>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};
