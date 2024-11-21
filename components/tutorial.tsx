import React from "react";
import { Modal, View } from "react-native";
import {
  CenteredView,
  ModalView,
  Header,
  CloseButton,
  ModalImage,
  Title,
  Line,
} from "@/styles/tutorial";
import { ModalOverlay } from "@/styles/overlay";

type TutorialProps = {
  visible?: boolean;
  onClose: () => void;
};

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

export default function Tutorial({ visible, onClose }: TutorialProps) {
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
            <Header>
              <Title>Como começar a usar o aplicativo!</Title>
              <CloseButton onPress={onClose}>
                <ModalImage source={require("../assets/icons/x.png")} />
              </CloseButton>
            </Header>
            <Line />
            
          </ModalView>
        </CenteredView>
      </ModalOverlay>
    </Modal>
  );
}
