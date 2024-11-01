import { useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { CenteredView, Header, ModalView, CloseButton, Button, TextStyle, Input, Label, ModalImage } from '@/styles/feedback';
import { useSession } from '@/hooks/ctx';
import { ModalOverlay } from '@/styles/overlay';
import { Picker } from '@react-native-picker/picker';
import { PutTaskUserProps, editTaskUserById } from '@/services/api/routes/taskuser';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { getFontSize } from '@/utils/fontSize';
import { router } from 'expo-router';

type FeedbackProps = {
    visible?: boolean;
    onClose: () => void;
    taskUserId: number;
    done: boolean;
};

export default function FeedbackModal({ visible, onClose, taskUserId, done }: FeedbackProps) {
    const { session } = useSession();
    const [difficulty, setDifficulty] = useState<"very easy" | "easy" | "medium" | "hard" | "very hard" | null>("very easy");


    const handleSubmit = async () => {
        if (!difficulty) {
            console.log('Por favor, dê seu feedback');
            return;
        }
    
        if (session) {
            const data: PutTaskUserProps = {
                done: done, 
                difficult_level: difficulty,
            };
    
            await editTaskUserById(taskUserId, data, session);
            router.push('/(auth)/(child)/(tabs)/');
        }
    };

    const handleRequestClose = () => {
        onClose();
    };

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={handleRequestClose}
        >
            <ModalOverlay>
                <CenteredView>
                    <ModalView>
                        <CloseButton onPress={onClose}>
                            <ModalImage source={require('../assets/icons/x.png')} />
                        </CloseButton>
                        <Header>
                            <Label>O que você achou desse desafio?</Label>
                        </Header>
                        <Label>Dificuldade:</Label>
                        <Picker
                            selectedValue={difficulty}
                            onValueChange={setDifficulty}
                            style={styles.picker}
                        >
                            <Picker.Item label="Muito fácil" value="very easy" />
                            <Picker.Item label="Fácil" value="easy" />
                            <Picker.Item label="Médio" value="medium" />
                            <Picker.Item label="Difícil" value="hard" />
                            <Picker.Item label="Muito difícil" value="very hard" />
                        </Picker>
                        <Button onPress={handleSubmit}>
                            <TextStyle>Criar</TextStyle>
                        </Button>
                    </ModalView>
                </CenteredView>
            </ModalOverlay>
        </Modal>
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