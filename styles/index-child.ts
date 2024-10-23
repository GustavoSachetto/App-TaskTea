import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { button } = Colors;
const { colors } = Colors;

export const TarefaImage = styled.Image`
  height: 53%;
  width: 98% ;
  border-top-left-radius:  ${w(5)}px;
  border-top-right-radius: ${w(5)}px;
  top: 1%; 
`;

export const TextTarefa = styled.Text`
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  color: ${Colors.text.darkgray};
  font-size: ${getFontSize(8)}px;
  margin: auto;
  max-width: 80%; 
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor};
  font-size: ${getFontSize(10)}px;
  font-weight: 600;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const GradientBorderBox = styled<any>(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#ffffff', '#ffffff', '#0060ff'],
})`
  height: ${hp('50%')}px ;
  width: ${w(80)}px ;
  align-self: center;
  justify-content: flex-start; 
  align-items: center;
  border-radius: ${w(5)}px ;
  margin-bottom: ${w(4)}px ;
  position: relative; 
`;

export const Box = styled.View`
  height: 49%;
  width: 98% ;
  border-radius: ${w(5)}px ;
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
  font-weight: 600;
  padding: ${h(1)}px 0;
  width: 50%;
  text-align: center;
  border-radius: ${w(8)}px ;
  background-color: ${ button.lightGreen };
  font-family: ${Fonts.RalewayBold};
  align-self: center;
  bottom: 2%;
`;


export const TextButtonStartTask = styled.Text`
  font-size: ${getFontSize(9)}px;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  font-family: ${Fonts.RalewayBold};
  margin-top: ${w(3)}px;
`;
