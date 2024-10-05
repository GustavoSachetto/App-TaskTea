import {
  Logo, QuebraCabeca, Text, Data, Calendario,
  ContainerHeader
} from '@/styles/header-index';
import { CurrentDate } from '@/utils/currentDate';
import { View } from 'react-native';

const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.png');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.png');

export default function HeaderIndex() {
  return (
    <View>
      <QuebraCabeca source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
      <Text>Olá, nome</Text>
      <ContainerHeader>
        <Calendario source={ImageCalendario} resizeMode="contain" />
        <Data>
          <CurrentDate />
        </Data>
      </ContainerHeader>
    </View>
  )
}