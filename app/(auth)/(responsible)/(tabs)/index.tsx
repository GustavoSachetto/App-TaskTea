import {
  ScrollViewContainer,
  Box, GradientBorderBox, Title, Button, Icons, View, Text,
} from '@/styles/index-responsible';
import Colors from '@/constants/Colors';
import HeaderIndex from '@/components/header-index'
import { useRouter } from 'expo-router';

const BlueColor = Colors.colors.blue;
const YellowColor = Colors.colors.yellow;

export default function HomePage() {
  const router = useRouter();

  return (
    <ScrollViewContainer>
      <HeaderIndex />
      <GradientBorderBox colors={['#0060ff', '#ffffff', '#0060ff']}>
        <Box>
          <Icons
            resizeMode="contain" 
            source={require('../../../../assets/icons/grafico.png')} />
          <View>
            <Title customColor={BlueColor}>Resultados</Title>
            <Button customColor={BlueColor}>
              <Text>Ver</Text>
              </Button>
          </View>
        </Box>
      </GradientBorderBox>

      <GradientBorderBox colors={['#f9d448', '#ffffff', '#f9d448']}>
        <Box>
        <Icons
            resizeMode="contain" 
            source={require('../../../../assets/icons/prancheta.png')} />
          <View>
            <Title customColor={YellowColor}>Desafios</Title>
            <Button onPress={() => router.push('/(auth)/(responsible)/(tabs)/tasks')}
            customColor={YellowColor}>
              <Text>Ver</Text>
            </Button>
          </View>
        </Box>
      </GradientBorderBox>
    </ScrollViewContainer>
  );
}