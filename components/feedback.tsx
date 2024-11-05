import { useState } from 'react';
import { Modal, Text } from 'react-native';
import { CenteredView, Header, ModalView, CloseButton, Button, TextStyle, Input, Label, ModalImage } from '@/styles/feedback';
import { useSession } from '@/hooks/ctx';
import { ModalOverlay } from '@/styles/overlay';
import { Picker } from '@react-native-picker/picker';
import { PutTaskUserProps, editTaskUserById } from '@/services/api/routes/taskuser';
import { router } from 'expo-router';
import { SelectWrapper } from '@/styles/create-task';
import { stylesPicker } from '@/styles/pickerStyle';
import { w } from '@/utils/responsiveMesures';

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
                            <Text>O que você achou  {"\n"}
                                desse desafio?</Text>
                        </Header>
                        <SelectWrapper style={{marginTop: w(4), marginBottom: w(4)}}>
                            <Picker
                                selectedValue={difficulty}
                                onValueChange={setDifficulty}
                                style={stylesPicker.picker}
                            >
                                <Picker.Item label="Muito fácil" value="very easy" />
                                <Picker.Item label="Fácil" value="easy" />
                                <Picker.Item label="Médio" value="medium" />
                                <Picker.Item label="Difícil" value="hard" />
                                <Picker.Item label="Muito difícil" value="very hard" />
                            </Picker>
                        </SelectWrapper>
                        <Button onPress={handleSubmit}>
                            <TextStyle>Criar</TextStyle>
                        </Button>
                    </ModalView>
                </CenteredView>
            </ModalOverlay>
        </Modal>
    );
}
