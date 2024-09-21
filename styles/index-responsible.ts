import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { button } = Colors;
const { colors } = Colors;
const { text } = Colors;
const { title } = Colors;


export const GradientBorderBox = styled(LinearGradient).attrs(props => ({
  colors: props.colors || ['#0060ff', '#ffffff', '#0060ff'], // Pega as cores das props ou usa cores padrão
}))`
  height: ${hp('15%')}px;
  width: ${wp('90%')}px;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 30px;
  position: relative;
`;

export const Box = styled.View`
  height: 98%;
  width: 98% ;
  flex-direction:row;
  border-radius: 26px;
  z-index: 2;
  background-color: white;
  position: absolute; 
  bottom: 1%;
  padding: 5%;
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color: #fff;
  flex: 1;
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor || title.gray};
  font-size: 24px;
  font-weight: 600;
  text-align:center;
  margin: 0 0 10px 0;
  font-family:  ${Fonts.RalewayBold};
`;

export const Button = styled.Pressable<any>`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 0;
  text-align: center;
  border-radius: 20px;
  font-family:  ${Fonts.RalewayBold};
  background-color: ${(props: any) => props.customColor};
`;

export const Icons = styled.Image`
  width:50%;
  height:100%;
`;

export const View = styled.View`
  flex-direction:column;
  width:50%;
  justify-content:center;
`;


