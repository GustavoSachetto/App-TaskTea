// import { useSession } from "@/hooks/ctx";
// import { editMyUser, getMyUser, UserProps, PutUserProps } from "@/services/api/routes/user";
// import {
//     ButtonSave, CenteredView, CloseButton, ButtonPassword, ContainerRow,
//     Text, Header, Label, Line, ModalImage, ModalView, TextButton, Title,
//     UserDataInput
// } from "@/styles/security";
// import { useEffect, useState } from "react";
// import { Modal } from "react-native";
// import { Ionicons } from '@expo/vector-icons';
// import { h, w } from '@/utils/responsiveMesures';
// import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

// type SecurityProps = {
//     visible?: boolean,
//     onClose: () => void
// }

// export default function Security({ visible, onClose }: SecurityProps) {
//     const [userData, setUserData] = useState<UserProps | undefined>(undefined);
//     const [originalUserData, setOriginalUserData] = useState<PutUserProps | undefined>(undefined);
//     const [inputNameValue, setInputNameValue] = useState("");
//     const [inputNicknameValue, setInputNicknameValue] = useState("");
//     const [showDatePicker, setShowDatePicker] = useState(false);
//     const [inputBirthDateValue, setInputBirthDateValue] = useState(new Date());
//     const [inputTelephoneValue, setInputTelephoneValue] = useState("");
//     const [inputEmailValue, setInputEmailValue] = useState("");
//     const [inputCurrentPassword, setInputCurrentPassword] = useState("");
//     const [inputNewPassword, setInputNewPassword] = useState("");
//     const [inputConfirmPassword, setInputConfirmPassword] = useState("");
//     const [changePassword, setChangePassword] = useState(false);
//     const { session } = useSession();
//     const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//     const [showNewPassword, setShowNewPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const toggleShowCurrentPassword = () => {
//         setShowCurrentPassword(!showCurrentPassword);
//     };

//     const toggleShowNewPassword = () => {
//         setShowNewPassword(!showNewPassword);
//     };

//     const toggleShowConfirmPassword = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };

//     const renderChangePassword = () => {
//         setChangePassword(!changePassword);
//     }

//     useEffect(() => {
//         const fetchUserData = async () => {
//             if (session) {
//                 const response = await getMyUser(session);

//                 setUserData(response.data);
//                 setOriginalUserData({
//                     name: response.data.name,
//                     nickname: response.data.nickname,
//                     birthdate: response.data.birthdate,
//                     phone_number: response.data.phone_number || null,
//                     email: response.data.email,
//                 });
//             }
//         }

//         fetchUserData();
//     }, [session]);

//     useEffect(() => {
//         if (userData) {
//             setInputNameValue(userData.name || "");
//             setInputNicknameValue(userData.nickname || "");
//             setInputBirthDateValue(new Date(userData.birthdate) || new Date());
//             setInputTelephoneValue(userData.phone_number || "");
//             setInputEmailValue(userData.email || "");
//         }
//     }, [userData]);

//     const handleSubmit = async () => {
//         if (session) {
//             const cleanedTelephone = inputTelephoneValue.replace(/\D/g, '');
//             const formattedBirthDate = inputBirthDateValue.toISOString().split('T')[0];
    
//             const hasChanges = (
//                 inputNameValue !== originalUserData?.name ||
//                 inputNicknameValue !== originalUserData?.nickname ||
//                 formattedBirthDate !== originalUserData?.birthdate ||
//                 cleanedTelephone !== originalUserData?.phone_number ||
//                 inputEmailValue !== originalUserData?.email ||
//                 (inputCurrentPassword && inputNewPassword && inputNewPassword === inputConfirmPassword)
//             );
    
//             if (hasChanges) {
//                 let data: PutUserProps = {
//                     name: inputNameValue,
//                     nickname: inputNicknameValue,
//                     birthdate: formattedBirthDate,
//                     phone_number: cleanedTelephone,
//                     email: inputEmailValue,
//                 };
    
//                 if (inputCurrentPassword) {
//                     data.current_password = inputCurrentPassword;
//                     data.new_password = inputNewPassword;
//                     data.new_password_confirmation = inputConfirmPassword;
//                 }
    
//                 const response = await editMyUser(data, session);
    
//                 if (response) {
//                     setOriginalUserData({
//                         ...originalUserData,
//                         name: inputNameValue,
//                         nickname: inputNicknameValue,
//                         birthdate: formattedBirthDate.toString(),
//                         phone_number: cleanedTelephone,
//                         email: inputEmailValue,
//                     });
//                 }
//             }
//         }
//     };
    

//     const onChange = (event: DateTimePickerEvent, date?: Date) => {
//         if (date) {
//             setInputBirthDateValue(date);
//         }
//         setShowDatePicker(false);
//     };

//     const handleClose = () => {
//         onClose();
//         if (session) {
//             const fetchUserData = async () => {
//                 const response = await getMyUser(session);
//                 setUserData(response.data);
//                 setOriginalUserData({
//                     name: response.data.name,
//                     nickname: response.data.nickname,
//                     birthdate: response.data.birthdate,
//                     phone_number: response.data.phone_number || null,
//                     email: response.data.email,
//                 });
//             }
//             fetchUserData();
//         }
//     };

//     return (
//         <Modal
//             animationType="slide"
//             transparent={true}
//             visible={visible}
//             onRequestClose={handleClose}
//         >
//             <CenteredView>
//                 <ModalView>
//                     <Header>
//                         <Title>Segurança e informação</Title>
//                         <CloseButton onPress={handleClose}>
//                             <ModalImage source={require('../assets/icons/x.png')} />
//                         </CloseButton>
//                     </Header>
//                     <Line />

//                     <ContainerRow>
//                         <Label>Nome:</Label>
//                         <UserDataInput
//                             value={inputNameValue}
//                             onChangeText={setInputNameValue}
//                         />
//                     </ContainerRow>

//                     <ContainerRow>
//                         <Label>Apelido:</Label>
//                         <UserDataInput
//                             value={inputNicknameValue}
//                             onChangeText={setInputNicknameValue}
//                         />
//                     </ContainerRow>

//                     <ContainerRow>
//                         <Label>Data de Nascimento:</Label>
//                         <UserDataInput
//                             value={inputBirthDateValue.toLocaleDateString("pt-BR")}
//                             onFocus={() => setShowDatePicker(true)}
//                             placeholder="Selecione a data"
//                             editable={true}
//                         />
//                         {showDatePicker && (
//                             <DateTimePicker
//                                 value={inputBirthDateValue}
//                                 mode="date"
//                                 display="default"
//                                 onChange={onChange}
//                             />
//                         )}
//                     </ContainerRow>


//                     {userData?.phone_number && (
//                         <ContainerRow>
//                             <Label>Telefone:</Label>
//                             <UserDataInput
//                                 value={inputTelephoneValue}
//                                 onChangeText={setInputTelephoneValue}
//                             />
//                         </ContainerRow>
//                     )}

//                     {userData?.cpf && (
//                         <ContainerRow>
//                             <Label>CPF:</Label>
//                             <Text>{userData.cpf}</Text>
//                         </ContainerRow>
//                     )}

//                     <ContainerRow>
//                         <Label>Email:</Label>
//                         <UserDataInput
//                             value={inputEmailValue}
//                             onChangeText={setInputEmailValue}
//                         />
//                     </ContainerRow>

//                     <ContainerRow>
//                         <ButtonPassword onPress={renderChangePassword}>
//                             <Label style={{ textDecorationLine: 'underline' }}>Alterar senha</Label>
//                         </ButtonPassword>
//                     </ContainerRow>

//                     {changePassword && (
//                         <>
//                             <ContainerRow>
//                                 <Label>Senha Atual:</Label>
//                                 <UserDataInput
//                                     value={inputCurrentPassword}
//                                     onChangeText={setInputCurrentPassword}
//                                     secureTextEntry={!showCurrentPassword}
//                                 />
//                                 <Ionicons
//                                     name={showCurrentPassword ? "eye-off" : "eye"}
//                                     onPress={toggleShowCurrentPassword}
//                                     color="#808080"
//                                     size={w(5)}
//                                 />
//                             </ContainerRow>

//                             <ContainerRow>
//                                 <Label>Nova Senha:</Label>
//                                 <UserDataInput
//                                     value={inputNewPassword}
//                                     onChangeText={setInputNewPassword}
//                                     secureTextEntry={!showNewPassword}
//                                 />
//                                 <Ionicons
//                                     name={showNewPassword ? "eye-off" : "eye"}
//                                     onPress={toggleShowNewPassword}
//                                     color="#808080"
//                                     size={w(5)}
//                                 />
//                             </ContainerRow>

//                             <ContainerRow>
//                                 <Label>Confirmar Nova Senha:</Label>
//                                 <UserDataInput
//                                     value={inputConfirmPassword}
//                                     onChangeText={setInputConfirmPassword}
//                                     secureTextEntry={!showConfirmPassword}
//                                 />
//                                 <Ionicons
//                                     name={showConfirmPassword ? "eye-off" : "eye"}
//                                     onPress={toggleShowConfirmPassword}
//                                     color="#808080"
//                                     size={w(5)}
//                                 />
//                             </ContainerRow>
//                         </>
//                     )}

//                     <ButtonSave onPress={handleSubmit}>
//                         <TextButton>Salvar</TextButton>
//                     </ButtonSave>
//                 </ModalView>
//             </CenteredView>
//         </Modal>
//     );
// }
