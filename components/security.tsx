import { useSession } from "@/hooks/ctx";
import { getMyUser, UserProps } from "@/services/api/routes/user";
import { ButtonSave, CenteredView, CloseButton, ContainerRow, Header, Label, Line, ModalImage, ModalView, TextButton, Title } from "@/styles/security";
import { useEffect, useState } from "react";
import { Modal, TextInput } from "react-native";

type SecurityProps = {
    visible?: boolean,
    onClose: () => void
}

export default function Security({ visible, onClose }: SecurityProps) {
    const [userData, setUserData] = useState<UserProps | undefined>(undefined);
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputNicknameValue, setInputNicknameValue] = useState("");
    const [inputAgeValue, setInputAgeValue] = useState("");
    const [inputTelephoneValue, setInputTelephoneValue] = useState("");
    const [inputEmailValue, setInputEmailValue] = useState("");
    const [inputPasswordValue, setInputPasswordValue] = useState("");
    const { session } = useSession();


    useEffect(() => {
        const fetchUserData = async () => {
            if (session) {
                const response = await getMyUser(session);
                setUserData(response.data);
            }
        }

        fetchUserData();
    }, []);

    useEffect(() => {
        if (userData) {
            setInputNameValue(userData.name || "");
            setInputNicknameValue(userData.nickname || "");
            setInputAgeValue(userData.age || "");
            setInputTelephoneValue(userData.phone_number || "");
            setInputEmailValue(userData.email || "");
        }
    }, [userData]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <CenteredView>
                <ModalView>
                    <Header>
                        <Title>Segurança e informação</Title>
                        <CloseButton onPress={onClose}>
                            <ModalImage source={require('../assets/icons/x.png')} />
                        </CloseButton>
                    </Header>
                    <Line />

                    <ContainerRow>
                        <Label>Nome:</Label>
                        <TextInput
                            value={inputNameValue}
                            onChangeText={setInputNameValue}
                        />
                    </ContainerRow>

                    <ContainerRow>
                        <Label>Apelido:</Label>
                        <TextInput
                            value={inputNicknameValue}
                            onChangeText={setInputNicknameValue}
                        />
                    </ContainerRow>

                    <ContainerRow>
                        <Label>Idade:</Label>
                        <TextInput
                            value={inputAgeValue}
                            onChangeText={setInputAgeValue}
                        />
                    </ContainerRow>

                    {userData?.phone_number && (
                        <ContainerRow>
                            <Label>Telefone:</Label>
                            <TextInput
                                value={inputTelephoneValue}
                                onChangeText={setInputTelephoneValue}
                            />
                        </ContainerRow>
                )}

                    {userData?.cpf && (
                        <ContainerRow>
                            <Label>CPF:</Label>
                            <Title>{userData.cpf}</Title>
                        </ContainerRow>
                    )}

                    <ContainerRow>
                        <Label>E-mail:</Label>
                        <TextInput
                            value={inputEmailValue}
                            onChangeText={setInputEmailValue}
                        />
                    </ContainerRow>

                    <ContainerRow>
                        <Label>Senha:</Label>
                        <TextInput
                            value={inputPasswordValue}
                            onChangeText={setInputPasswordValue}
                            secureTextEntry={true}
                        />
                    </ContainerRow>

                    <ButtonSave >
                        <TextButton>Salvar</TextButton>
                    </ButtonSave>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}
