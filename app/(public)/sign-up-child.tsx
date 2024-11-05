import { View, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import {
  Border, Input, Line, ContainerButtonsSign, ButtonSign, LinkedSign,
  ContainerScrollView, Logo, Title, SubTitle, TextButton, TextReadAndAgree,
  LinkPopUp, ContainerRow,
  PasswordContainer,
  InputWrapper,
  InputPassword
} from "@/styles/sign";
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
const ImageLogo = require('@/assets/images/logo.png');
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Toast from 'react-native-toast-message';
import { createUserChild } from '@/services/api/routes/user';
import ServiceTerms from '@/components/service-terms';
import { Ionicons } from '@expo/vector-icons';
import { h, w } from '@/utils/responsiveMesures';
import DateTimePicker from '@react-native-community/datetimepicker';

const GrayColor = Colors.colors.gray;
const GreenColor = Colors.colors.green;

export default function SignUpChild() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState(new Date()); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    const userData = {
      name,
      email,
      nickname,
      birthdate: `${birthDate.getFullYear()}/${String(birthDate.getMonth()).padStart(2, '0')}/${String(birthDate.getDate()).padStart(2, '0')}`, 
      password,
    };
    setLoading(true);
    const response = await createUserChild(userData);
    setLoading(false);
    setIsCheckboxChecked(false);
    if (response) {
      Toast.show({
        text1: 'Mensagem',
        text2: response.message
      });
    }
  };

  return (
    <>
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
              <Title customColor={GreenColor} style={{ padding: 10 }}>Cadastro Criança</Title>
              <Line customColor={GreenColor} />
              <Input
                placeholder='Nome:'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={name}
                onChangeText={(text: string) => setName(text)}
              />
              <Input
                placeholder='Nickname:'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={nickname}
                onChangeText={(text: string) => setNickname(text)}
              />
              <Input
                value={birthDate.toLocaleDateString("pt-BR")} 
                onFocus={() => setShowDatePicker(true)}
                placeholder="Data de nascimento"
                editable={true} 
                customColor={GreenColor}
              />
              {showDatePicker && (
                <DateTimePicker
                  value={birthDate}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    const currentDate = selectedDate || birthDate; 
                    setShowDatePicker(false); 
                    setBirthDate(currentDate); 
                  }}
                />
              )}
              <Input
                placeholder='E-mail:'
                placeholderTextColor={GrayColor}
                customColor={GreenColor}
                value={email}
                onChangeText={(text: string) => setEmail(text)}
              />
              <PasswordContainer>
                <InputWrapper customColor={GreenColor}>
                  <InputPassword
                    placeholder='Senha:'
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
  );
}
