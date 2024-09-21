import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { button } = Colors;
const { colors } = Colors;

const { text } = Colors;


export const TarefaImage = styled.Image`
  height: 53%;
  width: 97% ;
  border-top-left-radius: 30px; 
  border-top-right-radius: 30px; 
  top: 1%; 
`;

export const TextTarefa = styled.Text`
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  color: ${Colors.text.darkgray};
  font-size: 19px;
  margin-top: 0;
`;

export const GradientBorderBox = styled(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#0060ff'],
})`
  height: ${hp('60%')}px ;
  width: ${wp('90%')}px ;
  align-self: center;
  justify-content: flex-start; 
  align-items: center;
  border-radius: 30px;
  margin-bottom: 30px;
  position: relative; 
`;

export const Box = styled.View`
  height: 49%;
  width: 97% ;
  border-radius: 26px;
  z-index: 2;
  background-color: white;
  position: absolute; 
  bottom: 1%;
  padding: 5%;
  justify-content: space-between;
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color: #fff;
  flex: 1;
`;

export const LinkedStartTask = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
  width: 50%;
  text-align: center;
  border-radius: 20px;
  background-color: ${ button.lightGreen };
  font-family: ${Fonts.RalewayBold};
  align-self: center;
  bottom: 2%;
`;


export const TextButtonStartTask = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  font-family: ${Fonts.RalewayBold};
`;
