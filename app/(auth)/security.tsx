import { useSession } from "@/hooks/ctx";
import { editMyUser, getMyUser, UserProps, PutUserProps } from "@/services/api/routes/user";
import {
    ButtonSave, CenteredView, BackButton, ButtonPassword, Container,
    Text, Header, Label, ButtonDelete, ModalImage, ModalView, TextButton, Title,
    UserDataInput, ContainerRow,
    InputWrapper
} from "@/styles/security";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { w } from '@/utils/responsiveMesures';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { router } from "expo-router";
import ModalDeleteAccount from '@/components/modal-delete-account';
import Toast from "react-native-toast-message";

export default function Security() {
    const [userData, setUserData] = useState<UserProps | undefined>(undefined);
    const [originalUserData, setOriginalUserData] = useState<PutUserProps | undefined>(undefined);
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
    const [modalDelete, setModalDelete] = useState(false);

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
                setOriginalUserData({
                    name: response.data.name,
                    nickname: response.data.nickname,
                    birthdate: response.data.birthdate,
                    phone_number: response.data.phone_number || null,
                    email: response.data.email,
                });
            }
        }

        fetchUserData();
    }, [session]);

    useEffect(() => {
        if (userData) {
            setInputNameValue(userData.name || "");
            setInputNicknameValue(userData.nickname || "");
            setInputBirthDateValue(new Date(userData.birthdate) || new Date());
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
                formattedBirthDate !== originalUserData?.birthdate ||
                cleanedTelephone !== originalUserData?.phone_number ||
                inputEmailValue !== originalUserData?.email ||
                (inputCurrentPassword && inputNewPassword && inputNewPassword === inputConfirmPassword)
            );

            if (hasChanges) {
                let data: PutUserProps = {
                    name: inputNameValue,
                    nickname: inputNicknameValue,
                    birthdate: formattedBirthDate,
                    phone_number: cleanedTelephone,
                    email: inputEmailValue,
                };

                if (inputCurrentPassword) {
                    data.current_password = inputCurrentPassword;
                    data.new_password = inputNewPassword;
                    data.new_password_confirmation = inputConfirmPassword;
                }

                const response = await editMyUser(data, session);

                Toast.show({
                    text1: 'Mensagem',
                    text2: response.message
                  });
                   setTimeout(() => {

                    if(inputTelephoneValue){
                    router.push('/(auth)/(responsible)/(tabs)/settings');
                }
                    else {
                        router.push('/(auth)/(child)/(tabs)/settings');
                    }
                  }, 2000);;

                if (response) {
                    setOriginalUserData({
                        ...originalUserData,
                        name: inputNameValue,
                        nickname: inputNicknameValue,
                        birthdate: formattedBirthDate.toString(),
                        phone_number: cleanedTelephone,
                        email: inputEmailValue,
                    });
                }
            }
        }

  
    };


    const onChange = (event: DateTimePickerEvent, date?: Date) => {
        if (date) {
            setInputBirthDateValue(date);
        }
        setShowDatePicker(false);
    };

    return (
        <>

            <CenteredView>
                <Header>
                    <BackButton onPress={() => router.back()}>
                        <ModalImage source={require('@/assets/icons/voltar.png')} />
                    </BackButton>
                    <Title>Segurança e informação</Title>
                </Header>
                <ModalView>
                    <Container>
                        <Label>Nome:</Label>
                        <UserDataInput
                            value={inputNameValue}
                            onChangeText={setInputNameValue}
                        />
                    </Container>

                    <Container>
                        <Label>Apelido:</Label>
                        <UserDataInput
                            value={inputNicknameValue}
                            onChangeText={setInputNicknameValue}
                        />
                    </Container>

                    <Container>
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
                    </Container>


                    {userData?.phone_number && (
                        <Container>
                            <Label>Telefone:</Label>
                            <UserDataInput
                                value={inputTelephoneValue}
                                onChangeText={setInputTelephoneValue}
                            />
                        </Container>
                    )}

                    {userData?.cpf && (
                        <ContainerRow>
                            <Label>CPF:</Label>
                            <Text>{userData.cpf}</Text>
                        </ContainerRow>
                    )}

                    <Container>
                        <Label>Email:</Label>
                        <UserDataInput
                            value={inputEmailValue}
                            onChangeText={setInputEmailValue}
                        />
                    </Container>

                    <Container>
                        <ButtonPassword onPress={renderChangePassword}>
                            <Label style={{ textDecorationLine: 'underline' }}>Alterar senha</Label>
                        </ButtonPassword>
                    </Container>

                    {changePassword && (
                        <>
                            <Container>
                                <Label>Senha Atual:</Label>
                                <InputWrapper>
                                    <UserDataInput
                                        value={inputCurrentPassword}
                                        onChangeText={setInputCurrentPassword}
                                        secureTextEntry={!showCurrentPassword}
                                        style={{ borderWidth: 0 }}
                                    />
                                    <Ionicons
                                        name={showCurrentPassword ? "eye-off" : "eye"}
                                        onPress={toggleShowCurrentPassword}
                                        color="#808080"
                                        size={w(5)}
                                    />
                                </InputWrapper>
                            </Container>

                            <Container>
                                <Label>Nova Senha:</Label>
                                <InputWrapper>
                                    <UserDataInput
                                        value={inputNewPassword}
                                        onChangeText={setInputNewPassword}
                                        secureTextEntry={!showNewPassword}
                                        style={{ borderWidth: 0 }}
                                    />
                                    <Ionicons
                                        name={showNewPassword ? "eye-off" : "eye"}
                                        onPress={toggleShowNewPassword}
                                        color="#808080"
                                        size={w(5)}
                                    />
                                </InputWrapper>
                            </Container>

                            <Container>
                                <Label>Confirmar Nova Senha:</Label>
                                <InputWrapper>
                                    <UserDataInput
                                        value={inputConfirmPassword}
                                        onChangeText={setInputConfirmPassword}
                                        secureTextEntry={!showConfirmPassword}
                                        style={{ borderWidth: 0 }}
                                    />
                                    <Ionicons
                                        name={showConfirmPassword ? "eye-off" : "eye"}
                                        onPress={toggleShowConfirmPassword}
                                        color="#808080"
                                        size={w(5)}
                                    />
                                </InputWrapper>
                            </Container>
                        </>
                    )}



                    <ButtonSave onPress={handleSubmit}>
                        <TextButton>Salvar</TextButton>
                    </ButtonSave>


                    <ButtonDelete onPress={() => setModalDelete(true)}>
                        <TextButton>Apagar conta</TextButton>
                    </ButtonDelete>

                </ModalView>

                <ModalDeleteAccount
                onClose={() => setModalDelete(false)}
                visible={modalDelete}
                />
                <Toast />
            </CenteredView>
        </>
    );
}
