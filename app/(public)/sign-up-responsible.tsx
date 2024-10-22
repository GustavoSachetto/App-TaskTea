import { useState } from 'react';
import { ContainerScrollView, Logo, Title, SubTitle, TextButton, Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign, PasswordContainer, InputWrapper, InputPassword } from "@/styles/sign";
import Colors from '@/constants/Colors';
import { createUserResponsible } from '@/services/api/routes/user';
import { Text, View, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextReadAndAgree, LinkPopUp, ContainerRow } from "@/styles/sign";
import Toast from 'react-native-toast-message';
import ServiceTerms from '@/components/service-terms';
import { Overlay } from '@/styles';
import { Ionicons } from '@expo/vector-icons';
import { h, w } from '@/utils/responsiveMesures';

const GrayColor = Colors.colors.gray;
const GreenColor = Colors.colors.green;
const ImageLogo = require('@/assets/images/logo.png');

export default function SignUpResponsible() {
  const [modalVisible, setModalVisible] = useState(false);

  let bouncyCheckboxRef: typeof BouncyCheckbox | null = null;
  const [loading, setLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
      setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    const userData = {
      name,
      email,
      nickname,
      password,
      age: Number(age),
      cpf,
      phone_number: phoneNumber,
    };
    setLoading(true);
    const response = await createUserResponsible(userData);
    setLoading(false);
    setIsCheckboxChecked(false)
    if (response)
      Toast.show({
        text1: 'Mensagem',
        text2: response.message
      });
  };

  return (
    <>
      {modalVisible && <Overlay />}
      <ContainerScrollView>

        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={GreenColor} />
          </View>
        ) : (
          <>
            <Logo source={ImageLogo} resizeMode="contain" />
            <SubTitle>Só precisamos de algumas informações e você já poderá começar!</SubTitle>
            <Border customColor={GreenColor}>
              <Title customColor={GreenColor} style={{ padding: 10 }}>Cadastro responsável</Title>
              <Line customColor={GreenColor} />
              <Input
                placeholder='Nome'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={name}
                onChangeText={(text: string) => setName(text)}
              />
              <Input
                placeholder='Nickname'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={nickname}
                onChangeText={(text: string) => setNickname(text)}
              />
              <Input
                placeholder='CPF'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={cpf}
                onChangeText={(text: string) => {
                  const numericValue = text.replace(/[^0-9]/g, '');
                  setCpf(numericValue.slice(0, 11))
                }}
                keyboardType="numeric"
              />
              <Input
                placeholder='E-mail'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={email}
                onChangeText={(text: string) => setEmail(text)}
              />
              <Input
                placeholder='Telefone'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={phoneNumber}
                onChangeText={(text: string) => {
                  const numericValue = text.replace(/[^0-9]/g, '');
                  setPhoneNumber(numericValue.slice(0, 11));
                }}
                keyboardType="numeric"
              />
              <Input
                placeholder='Idade'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={age}
                onChangeText={(text: string) => {
                  const numericValue = text.replace(/[^0-9]/g, '');
                  setAge(numericValue.slice(0, 2))
                }}
              />
                 <PasswordContainer>
                 <InputWrapper customColor={GreenColor}>
              <InputPassword
                placeholder='Senha'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={password}
                onChangeText={(text: string) => setPassword(text)}
                secureTextEntry={!showPassword}
              />
                 <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          onPress={toggleShowPassword}
          color="#808080"
          size={w(5)} 
        />
          </InputWrapper>
          </PasswordContainer>
              <ContainerRow>
                <BouncyCheckbox
                  ref={bouncyCheckboxRef}
                  disableText
                  fillColor="#46f87c"
                  size={30}
                  innerIconStyle={{ borderColor: '#46f87c', borderRadius: 5, borderWidth: 2.5 }}
                  iconStyle={{ borderRadius: 5 }}
                  onPress={(isChecked: boolean) => setIsCheckboxChecked(isChecked)}
                />
                <TextReadAndAgree>
                  <Text>Eu li e concordo com a </Text>
                  <LinkPopUp onPress={() => setModalVisible(true)}>Política de Privacidade</LinkPopUp>
                  <Text> e </Text>
                  <LinkPopUp onPress={() => setModalVisible(true)}>Termos de uso</LinkPopUp>
                </TextReadAndAgree>
              </ContainerRow>
              <ContainerButtonsSign>
                <Link href="/(public)/">
                  <LinkedSign customColor={GrayColor}>
                    <TextButton>Voltar</TextButton>
                  </LinkedSign>
                </Link>
                <ButtonSign
                  customColor={isCheckboxChecked ? GreenColor : GrayColor}
                  onPress={handleSignUp}
                  disabled={!isCheckboxChecked}
                >
                  <TextButton>Entrar</TextButton>
                </ButtonSign>
              </ContainerButtonsSign>
            </Border>
          </>
        )}
        <Toast />
        <ServiceTerms visible={modalVisible}
          onClose={() => setModalVisible(false)} />
      </ContainerScrollView>
    </>
  )
}
