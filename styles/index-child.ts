import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const { text } = Colors;

export const Logo = styled.Image`
  width: 180px;
  height: 200px;
  margin-top: 5%;
  margin-bottom: 15px;
  margin: 0 auto;
`;
export const QuebraCabeca = styled.Image`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  z-index: 99;
`;
export const Calendario = styled.Image`
  width: 35px;
  height: 35px;
  z-index: 99;
  margin-right: 10px;
`;
export const Text = styled.Text`
  text-align:center;
  font-family: ${Fonts.RalewayRegular};
  color: ${Colors.text.darkgray};
  font-size: 25px;
`;
export const Data = styled.Text`
  color: ${Colors.text.red};
  text-align:center;
  font-family: ${Fonts.RalewayBold};
  font-size: 25px;
`;
export const Box = styled.View`
  height: 200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 50px;
  overflow: hidden; 
`;

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#0060ff'],
})`
  flex: 1;
  border-radius: 50px;
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color:#fff;
`;