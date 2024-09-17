import { Text, View } from "react-native";
import { Logo } from '../../../styles/index-child';

const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.svg');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.svg');

export default function HomePage() {
  return (
    <View>
      <Logo source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
    </View>
  )
}