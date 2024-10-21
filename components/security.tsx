import { useSession } from "@/hooks/ctx";
import { editMyUser, getMyUser, UserProps } from "@/services/api/routes/user";
import {
    ButtonSave, CenteredView, CloseButton, ButtonPassword, ContainerRow,
    Text, Header, Label, Line, ModalImage, ModalView, TextButton, Title,
    UserDataInput
} from "@/styles/security";
import { useEffect, useState } from "react";
import { Modal } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { h, w } from '@/utils/responsiveMesures';
import Toast from 'react-native-toast-message';
import DateTimePicker from '@react-native-community/datetimepicker';

type SecurityProps = {
    visible?: boolean,
    onClose: () => void
}

export default function Security({ visible, onClose }: SecurityProps) {
    const [userData, setUserData] = useState<UserProps | undefined>(undefined);
    const [originalUserData, setOriginalUserData] = useState<UserProps | undefined>(undefined);
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputNicknameValue, setInputNicknameValue] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [inputBirthDateValue, setInputBirthDateValue] = useState(new Date());
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
                setOriginalUserData(response.data);
            }
        }

        fetchUserData();
    }, [session]);

    useEffect(() => {
        if (userData) {
            setInputNameValue(userData.name || "");
            setInputNicknameValue(userData.nickname || "");
            setInputBirthDateValue(new Date(userData.age) || new Date());
            setInputTelephoneValue(userData.phone_number || "");
            setInputEmailValue(userData.email || "");
        }
    }, [userData]);

    const handleSubmit = async () => {
        if (session) {
            const cleanedTelephone = inputTelephoneValue.replace(/\D/g, '');
            const formattedBirthDate = inputBirthDateValue.toISOString().split('T')[0];

            const hasChanges = (
                inputNameValue !== originalUserData?.name ||
                inputNicknameValue !== originalUserData?.nickname ||
                formattedBirthDate !== originalUserData?.age ||
                cleanedTelephone !== originalUserData?.phone_number ||
                inputEmailValue !== originalUserData?.email ||
                (inputCurrentPassword && inputNewPassword && inputNewPassword === inputConfirmPassword)
            );

            if (hasChanges) {
                const response = await editMyUser({
                    name: inputNameValue,
                    nickname: inputNicknameValue,
                    age: formattedBirthDate,
                    phone_number: cleanedTelephone,
                    email: inputEmailValue,
                    currentPassword: inputCurrentPassword,
                    newPassword: inputNewPassword,
                    confirmPassword: inputConfirmPassword,
                }, session);

                if (response) {
                    Toast.show({
                        text1: 'Mensagem',
                        text2: "sucesso"
                    });
                    setOriginalUserData({
                        ...originalUserData,
                        name: inputNameValue,
                        nickname: inputNicknameValue,
                        age: formattedBirthDate,
                        phone_number: cleanedTelephone,
                        email: inputEmailValue,
                    });
                }
            }
        }
    }

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || inputBirthDateValue;
        setShowDatePicker(false);
        setInputBirthDateValue(currentDate);
    };

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

                    {/* no celular aparece o calendario para escolher a data */}
                    <ContainerRow>
                        <Label>Data de Nascimento:</Label>
                        <UserDataInput
                            value={inputBirthDateValue.toLocaleDateString("pt-BR")}
                            onFocus={() => setShowDatePicker(true)}
                            placeholder="Selecione a data"
                            editable={true}
                        />
                        {showDatePicker && (
                            <DateTimePicker
                                value={inputBirthDateValue}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
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

                    <ContainerRow>
                        <ButtonPassword onPress={renderChangePassword}>
                            <Label style={{ textDecorationLine: 'underline' }}>Alterar senha</Label>
                        </ButtonPassword>
                    </ContainerRow>

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

                            {/* senha ainda não atualiza */}
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

                    <ButtonSave onPress={handleSubmit}>
                        <TextButton>Salvar</TextButton>
                    </ButtonSave>
                </ModalView>
            </CenteredView>
        </Modal>
    );
}
