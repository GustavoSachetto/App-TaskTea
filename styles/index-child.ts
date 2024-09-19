import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const { text } = Colors;

export const Logo = styled.Image`
  width: 180px;
  height: 80px;
  padding-top: 150;
  margin: 0 auto;
`;
export const QuebraCabeca = styled.Image`
  width: 180px;
  height: 165px;
  position: absolute;
  top: -28;
  left: -35;
  z-index: 99;
  transform: rotate(35deg);
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
export const GradientBorderBox = styled(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#0060ff'],
})`
  height: 55vh;
  width: 90%;
  border-radius: 20px;
  margin-top: 30px;
  margin: 0 auto;
`;

export const Box = styled.View`
  height: 99%;
  width: 99%; 
  border-radius: 20px;
  background-color: white;
  margin: 0 auto;
`;
export const ScrollViewContainer = styled.ScrollView`
  background-color: #fff;
  display: flex;
  border: solid 5px red;
  height: 100%;
`;
export const ContainerRowChild = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content:center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;