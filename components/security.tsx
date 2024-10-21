import { useSession } from "@/hooks/ctx";
import { getMyUser, UserProps } from "@/services/api/routes/user";
import {
    ButtonSave, CenteredView, CloseButton, ButtonPassword, ContainerRow,
    Text, Header, Label, Line, ModalImage, ModalView, TextButton, Title,
    UserDataInput
} from "@/styles/security";
import { useEffect, useState } from "react";
import { Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { h, w } from '@/utils/responsiveMesures';

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
    const [inputCurrentPassword, setInputCurrentPassword] = useState("");
    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    const [changePassword, setChangePassword] = useState(false);
    const { session } = useSession();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const renderChangePassword = () => {
        setChangePassword(!changePassword);
    }

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
                        <UserDataInput
                            value={inputNameValue}
                            onChangeText={setInputNameValue}
                        />
                    </ContainerRow>

                    <ContainerRow>
                        <Label>Apelido:</Label>
                        <UserDataInput
                            value={inputNicknameValue}
                            onChangeText={setInputNicknameValue}
                        />
                    </ContainerRow>

                    <ContainerRow>
                        <Label>Idade:</Label>
                        <UserDataInput
                            value={inputAgeValue}
                            onChangeText={setInputAgeValue}
                        />
                    </ContainerRow>

                    {userData?.phone_number && (
                        <ContainerRow>
                            <Label>Telefone:</Label>
                            <UserDataInput
                                value={inputTelephoneValue}
                                onChangeText={setInputTelephoneValue}
                            />
                        </ContainerRow>
                    )}

                    {userData?.cpf && (
                        <ContainerRow>
                            <Label>CPF:</Label>
                            <Text>{userData.cpf}</Text>
                        </ContainerRow>
                    )}

                    <ContainerRow>
                        <Label>Email:</Label>
                        <UserDataInput
                            value={inputEmailValue}
                            onChangeText={setInputEmailValue}
                        />
                    </ContainerRow>

                    <ButtonPassword onPress={renderChangePassword}>
                        <Label>Alterar senha</Label>
                    </ButtonPassword>

                    {changePassword && ( 
                        <>
                            <ContainerRow>
                                <Label>Senha Atual:</Label>
                                <UserDataInput
                                    value={inputCurrentPassword}
                                    onChangeText={setInputCurrentPassword}
                                    secureTextEntry={!showCurrentPassword} 
                                />
                                <Ionicons
                                    name={showCurrentPassword ? "eye-off" : "eye"}
                                    onPress={toggleShowCurrentPassword}
                                    color="#808080"
                                    size={w(5)}
                                />
                            </ContainerRow>

                            <ContainerRow>
                                <Label>Nova Senha:</Label>
                                <UserDataInput
                                    value={inputNewPassword}
                                    onChangeText={setInputNewPassword}
                                    secureTextEntry={!showNewPassword} 
                                />
                                <Ionicons
                                    name={showNewPassword ? "eye-off" : "eye"}
                                    onPress={toggleShowNewPassword}
                                    color="#808080"
                                    size={w(5)}
                                />
                            </ContainerRow>

                            <ContainerRow>
                                <Label>Confirmar Nova Senha:</Label>
                                <UserDataInput
                                    value={inputConfirmPassword}
                                    onChangeText={setInputConfirmPassword}
                                    secureTextEntry={!showConfirmPassword} 
                                />
                                <Ionicons
                                    name={showConfirmPassword ? "eye-off" : "eye"}
                                    onPress={toggleShowConfirmPassword}
                                    color="#808080"
                                    size={w(5)}
                                />
                            </ContainerRow>
                        </>
                    )}

                    <ButtonSave >
                        <TextButton>Salvar</TextButton>
                    </ButtonSave>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}
