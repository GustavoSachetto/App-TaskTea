import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
  align-items: center;
  padding: ${w(10)}px ${w(5)}px ${w(10)}px ${w(5)}px;
`;

export const ContainerRowTask = styled.View`
  align-items:center;
  justify-content:space-between;
  width: 100%;
  flex-direction: row; 
  margin-bottom: 5%; 
`;

export const CenteredCheckboxContainer = styled.View`
  position: absolute;
  left: 0;
  align-items: center; 
  width: 100%;
`;

export const ContainerRowHeader = styled.View`
  width: 100%;
  height: ${h(7)}px;
  flex-direction: row;
  align-items: center;
justify-content: center;
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor};
  font-size: ${w(6)}px;
  margin-top: ${w(6)}px;
  font-weight: 600;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const Voltar = styled.Image`
  width: ${w(9)}px ;
  height: ${w(9)}px ;
`;

export const Dica = styled.Image`
  width: ${h(8)}px;
  height: ${h(8)}px;
  margin-right: ${w(5)}px;
`;

export const TextTaskDay = styled.Text`
  color: ${Colors.colors.blue};
  font-size: ${getFontSize(17)}px;
  font-weight: 600;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
  position: absolute;
`;

export const LinkedSign = styled.Pressable`
   width: ${w(9)}px ;
  height: ${w(9)}px ;
  position: absolute;
  left:0;
`;

export const GradientBorderBox = styled<any>(LinearGradient).attrs({
  colors: ["#0060ff", "#ffffff", "#ffffff", "#ffffff", "#0060ff"],
})`
  padding: ${w(1.2)}px ${w(1)}px ;
  width: ${w(90)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${w(5)}px;
  position: relative;
  z-index: 98;
  margin: ${h(4)}px 0  ;
`;

export const Box = styled.View`
 border-radius: ${w(4)}px ;
 z-index: 99;
 background-color: #fff;
 padding: 0 5%;
 margin-top: -5%;
`;

export const BoxTask = styled.View`
  width: 99%;
  border-radius: ${w(4)}px ;
  background-color: white;
  justify-content: space-between;
`;

export const TarefaImage = styled.Image`
  height: ${h(35)}px;
  width: 100%;
  border-top-left-radius: ${w(4)}px;
  border-top-right-radius: ${w(4)}px;
  z-index: 1;
`;

export const TextTarefa = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${w(4.5)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  margin: ${hp("3%")}px 0 ${hp("2%")}px ;
  padding: 0px ${w(2)}px;
`;

export const TextClick = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  width: ${w(18)}px ;
  margin-left: ${w(5)}px;
`;

export const DataText = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${getFontSize(7)}px;
  font-family: ${Fonts.RalewayRegular};
  margin-top: ${w(5)}px
`;

export const ButtonEdit = styled.View`
  width:  50%;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  background-color: ${Colors.colors.blue};
  padding: ${w(2)}px ${w(7)}px;
  margin: ${w(2)}px  auto;
  border-radius: ${w(8)}px;
`;

export const TextButton = styled.Text`
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-weight: 600;
  color: ${Colors.colors.white};
  font-family: ${Fonts.RalewayBold};
`;