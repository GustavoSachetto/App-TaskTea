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
  font-size: ${w(6.3)}px;
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

export const TextChildren = styled.Text`
  color: ${Colors.colors.blue};
  font-size: ${getFontSize(14)}px;
  font-weight: 600;
  text-align: center;
  margin:0 auto;
  font-family: ${Fonts.RalewayBold};
  text-transform: uppercase;
`;

export const LinkedSign = styled.Pressable`
  margin-right: 0;
  height: ${w(4)}px;
  width: ${w(4)}px;
`;

export const GradientBorderBox = styled<any>(LinearGradient).attrs({
  colors: ['#0060ff', '#ffffff', '#ffffff', '#ffffff', '#0060ff'],
})`
  height: ${hp("65%")}px ;
  width: ${w(85)}px ;
  margin: ${w(8)}px auto;
  justify-content: flex-start; 
  align-items: center;
  border-radius: ${w(5)}px ;
  margin-bottom: ${w(4)}px ;
  position: relative; 
`;

export const BoxChildren = styled.ScrollView`
  height: 98%;
  width: 98% ;
  border-radius: ${w(5)}px ;
  z-index: 2;
  background-color: white;
  position: absolute; 
  bottom: 1%;
  flex-direction: row;
  flex-wrap: wrap;
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
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  padding: 0px ${w(2)}px 0px ${w(2)}px;
`;

export const TextClick = styled.Text`
  color: ${ Colors.title.gray };
  font-size: ${getFontSize(6.5)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  width: 22%;
`;

export const Childs = styled.View`
  flex-direction: column;
  align-items: center;
  margin: ${w(2)}px;
  
`;

export const ProfilePhoto = styled.Image`
  border-radius: 100%;
  width: ${w(20)}px;
  height: ${w(20)}px;
`;

export const Name = styled.Text.attrs(() => ({
  numberOfLines: 1, 
  ellipsizeMode: 'tail', 
}))`
  padding: 4px;
  text-align: center;
  color: #fff;
  width: ${w(20)}px;
  border-radius: ${w(4)}px;
  font-family: ${Fonts.RalewayBold};
  font-size: ${getFontSize(9)}px;
  background-color: ${Colors.colors.blue};
`;

export const ViewChildren = styled.View`
  width: ${w(85)}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;