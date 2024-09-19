import { View } from "react-native";
import { Logo, QuebraCabeca, Text, Data, Calendario, Box } from '../../../styles/index-child';
import { ScrollView } from "react-native";
import { ContainerRow } from "@/styles";

const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.svg');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.svg');

const getCurrentDate = () => {

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + '/' + month + '/' + year;
}

export default function HomePage() {
  return (
    <ScrollView>
      <QuebraCabeca source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
      <Text>Olá, nome</Text>
      <ContainerRow>
        <Calendario source={ImageCalendario} resizeMode="contain" ></Calendario>
        <Data>{getCurrentDate()}</Data>
      </ContainerRow>
      <Box></Box>
    </ScrollView>
  )
}