import { View } from "react-native";
import { ScrollViewContainer, Logo, QuebraCabeca, Text, Data, Calendario,
   Box, GradientBorderBox, ContainerRowChild, LinkedStartTask, TextButtonStartTask } from '@/styles/index-child';
import { ScrollView } from "react-native";
const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.png');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.png');

const getCurrentDate = () => {

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + '/' + month + '/' + year;
}

export default function HomePage() {
  return (
    <ScrollViewContainer>
      <QuebraCabeca source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
      <Text>Olá, nome</Text>
      <ContainerRowChild>
        <Calendario source={ImageCalendario} resizeMode="contain" />
        <Data>{getCurrentDate()}</Data>
      </ContainerRowChild>
      <GradientBorderBox>
        <Box>
          <Text>fwaafaf</Text>
          <LinkedStartTask href="/(auth)/(child)/single-task">
            <TextButtonStartTask>Iniciar</TextButtonStartTask>
          </LinkedStartTask>
        </Box>
      </GradientBorderBox>
    </ScrollViewContainer>
  );
}