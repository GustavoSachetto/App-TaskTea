import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { button } = Colors;
const { colors } = Colors;
const { text } = Colors;

export const TitlePage = styled.Text`
  color: ${colors.green};
  font-weight: bold;
  font-size: ${getFontSize(18)}px;
  font-family: ${Fonts.RalewayBold};
`;

export const TitleStatistics = styled.Text`
  color: ${colors.gray};
  font-weight: bold;
  text-align: center;
  font-size: ${getFontSize(12)}px;
  font-family: ${Fonts.RalewayBold};
   margin: 0 auto ${w(5)}px;
`;

export const ContainerStatistics = styled.View`
  height: 49%;
  width: 60% ;
  margin: 0 auto;

`;

export const LinkedBack = styled.Pressable`
  height: ${w(10)}px;
  width: ${w(10)}px;
  position: absolute;
  left: ${w(5)}px;
`;

export const Voltar = styled.Image`
  width: ${w(10)}px ;
  height: ${w(10)}px ;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: ${w(7)}px;
  align-items: center;
  justify-content: center;
`;

export const LabelChart = styled.Text`
  color: ${colors.gray};
  font-weight: bold;
  text-align: center;
  font-size: ${getFontSize(8)}px;
  font-family: ${Fonts.RalewayRegular};
   margin: 0 0 ${w(3)}px;
`;

export const SquareLabel = styled.View`
  width: ${w(4)}px;
  height: ${w(4)}px;
  background-color: ${(props: any) => props.customColor};
  margin-right: ${w(3)}px;
`;

export const ContainerLabel = styled.View`
 flex-direction: row;
 margin: 0 auto;
`;
