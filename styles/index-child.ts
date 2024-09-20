import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { button } = Colors;
const { colors } = Colors;
const { height } = Dimensions.get('window');

const { text } = Colors;

export const Logo = styled.Image`
  width: 180px;
  height: 80px;
  padding-top: 150px;
  margin: 0 auto;
`;

export const QuebraCabeca = styled.Image`
  width: 180px;
  height: 165px;
  position: absolute;
  top: -28px;
  left: -35px;
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
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  color: ${Colors.text.darkgray};
  font-size: 22px;
`;

export const Data = styled.Text`
  color: ${Colors.text.red};
  text-align: center;
  font-family: ${Fonts.RalewayBold};
  font-size: 20px;
`;

export const GradientBorderBox = styled(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#0060ff'],
})`
  height: ${height * 0.50};
  width: 90%;
  margin-top: -20px;
  align-self: center;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius:30px;
  margin-bottom:30px;
`;

export const Box = styled.View`
  width:99%;
  height:99%;
  border-radius:30px;
  background-color: white;
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color: #fff;
  flex: 1;
`;

export const ContainerRowChild = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const LinkedStartTask = styled(Link)`
color: white;
font-size: 18px;
font-weight: 600;
padding: 6px 80px;
text-align: center;
border-radius: 16px;
margin-top: 100px;
background-color: ${ button.lightGreen };
font-family:  ${Fonts.RalewayBold};
`;

export const TextButtonStartTask = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  font-family: ${Fonts.RalewayBold};
`;
