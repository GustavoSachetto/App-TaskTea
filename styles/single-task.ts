import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// estilo funciona no celular

export const Container = styled.View`
  flex: 1;
  width:100%;
  background-color: #fff;
  align-items: center;
  padding: ${w(10)}px ${w(5)}px ${w(10)}px ${w(5)}px;
`;

export const ContainerRowTask = styled.View`
  align-items:center;
  justify-content:center;
  width: 100%;
  flex-direction: row;
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor};
  font-size: ${w(6.3)}px;
  margin-top: ${h(1.6)}px;
  font-weight: 600;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const Voltar = styled.Image`
  width: ${h(5)}px ;
  height: ${h(5)}px ;
  z-index: 99;
`;

export const Dica = styled.Image`
  width: ${h(8)}px;
  height: ${h(8)}px;
`;

export const TextTaskDay = styled.Text`
  color: ${Colors.colors.blue};
  font-size: ${getFontSize(15)}px;
  font-weight: 600;
  text-align: center;
  margin:0 auto;
  font-family: ${Fonts.RalewayBold};
`;

export const LinkedSign = styled(Link)`
  position:absolute;
  left:0;
  height: ${w(14)}px;
  width: ${w(14)}px;
`;

export const GradientBorderBox = styled(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#ffffff', '#ffffff', '#0060ff'],
})`
  height: ${h(65)}px ;
  width: ${w(85)}px ;
  margin: ${w(5)}px auto;
  justify-content: flex-start; 
  align-items: center;
  border-radius: ${w(5)}px ;
  margin-bottom: ${w(4)}px ;
  position: relative; 
`;

export const BoxTask = styled.View`
  height: 56%;
  width: 98% ;
  border-radius: ${w(5)}px ;
  z-index: 2;
  background-color: white;
  position: absolute; 
  bottom: 1%;
  padding: 5%;
  justify-content: space-between;
`;

export const TarefaImage = styled.Image`
  height: 46%;
  width: 97%;
  border-top-left-radius: ${w(4.5)}px;
  border-top-right-radius: ${w(4.5)}px;
  top: 1%;
`;

export const TextTarefa = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${w(4.3)}px;
  margin-top: ${h(2)}px;
  margin-bottom: ${h(2)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  padding: 0px ${w(2.5)}px 0px ${w(2.5)}px;
`;

export const TextClick = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${getFontSize(6.5)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  width: ${w(20)}px;
`;
