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
  padding: 0 ${w(3)}px 0 ${w(3)}px;
`;

export const ContainerRowHeader = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 ${w(3)}px;
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor};
  font-size: ${w(6)}px;
  margin-top: ${h(2)}px;
  font-weight: 600;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const Voltar = styled.Image`
  width: ${w(9)}px ;
  height: ${w(9)}px ;
  z-index: 99;
  margin: 0 auto;
`;

export const Dica = styled.Image`
  width: ${h(8)}px;
  height: ${h(8)}px;
`;

export const TextTaskDay = styled.Text`
  color: ${Colors.colors.blue};
  font-size: ${getFontSize(17)}px;
  font-weight: 600;
  text-align: center;
  margin:0 auto;
  font-family: ${Fonts.RalewayBold};
`;

export const LinkedSign = styled.Pressable`
  margin-right: 0;
  height: ${w(4)}px;
  width: ${w(4)}px;
`;

export const GradientBorderBox = styled(LinearGradient).attrs<any>({
  colors: ['#0060ff', '#ffffff', '#ffffff', '#ffffff', '#0060ff'],
})`
  flex: 1;
  height: ${hp("67%")}px;
  width: ${w(85)}px;
  margin: ${w(8)}px auto;
  justify-content: flex-start; 
  align-items: center;
  border-radius: ${w(5)}px ;
  margin-bottom: ${w(4)}px ;
  position: relative; 
`;

export const BoxTask = styled.View`
  height: 56%;
  width: 98%;
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
  font-size: ${w(4.5)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  margin: ${hp("1%")}px 0;
  padding: 0px ${w(2)}px;
`;

export const TextClick = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  width: 27%;
`;

export const DataText = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${getFontSize(7)}px;
  font-family: ${Fonts.RalewayRegular};
`;

export const ButtonEdit = styled.Pressable`
  width:  50%;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  background-color: ${Colors.colors.blue};
  padding: ${w(2)}px ${w(7)}px;
  margin: ${getFontSize(8)}px  auto;
  border-radius: ${w(8)}px;
`;

export const TextButton = styled.Text`
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-weight: 600;
  color: ${Colors.colors.white};
  font-family: ${Fonts.RalewayBold};
`;