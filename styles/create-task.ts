import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight;

const { title } = Colors;

export const Container = styled.ScrollView`
  flex: 1;
  font-family: ${Fonts.RalewayBold};
  padding-top: ${h(2)}px;
  flex-direction: column;
  margin-top: ${statusBar}px;
`;

export const Label = styled.Text<any>`
  color: ${title.gray};
  font-size: ${getFontSize(9)}px;
  text-align: left;
  font-family: ${Fonts.RalewayRegular};
  margin-left: 4%;
  margin-top: 4%;
  width: 100%;
`;

export const Input = styled.TextInput<any>`
font-size: ${getFontSize(7)}px;
 font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius: ${w(4)}px ;
  padding: 2%;
  outline: 0;
  margin: ${w(2)}px auto;
  border: solid #f9d54b 2px;
`;

export const InputDescription = styled.TextInput<any>`
font-size: ${getFontSize(7)}px;
 font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius: ${w(4)}px ;
  padding: 2%;
  outline: 0;
  margin: 4% auto;
  border: solid #f9d54b 2px;
`;

export const ButtonCreate = styled.Pressable<any>`
  color: white;
  font-size: ${getFontSize(12)}px;
  padding: ${w(2)}px ${w(9)}px; 
  border-radius: ${w(9)}px;
  background-color: #f9d54b;
  margin: ${h(2)}px;
`;

export const Imagem = styled.View`
  height: ${w(58)}px;
  width:  ${w(88)}px;
`;

export const TarefaImage = styled.Image`
  height: 100%;
  width:  100%;
  border-radius: ${w(5)}px;
  z-index: 97;
`;

export const ButtonEdit = styled.Pressable`
  height: 6%; 
  width: 12%;  
  position: absolute;
  right: 5%;
  top: 2.5%; 
  z-index: 98;
  align-items: center; 
  justify-content: center; 
`;

export const EditImage = styled.Image`
  height: 100%;
  width: 100%; 
  z-index: 99;
`;

export const Voltar = styled.Image`
  width: ${w(9)}px;
  height: ${h(5)}px;
  z-index: 99;
  margin-bottom: ${h(2.5)}px;
  left: ${w(7.5)}px;
`;

export const GradientBorderBoxTasks = styled<any>(LinearGradient).attrs({
  colors: ["#f9d448", "#ffffff", "#ffffff", "#ffffff", "#f9d448"],
})`
  padding: ${w(1)}px ;
  width: ${w(90)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${w(4)}px;
  position: relative;
  z-index: 98;
  margin-bottom: ${h(6)}px;
`;

export const ContainerButtonsSign = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: ${w(2)}px ${w(3)}px ${w(2)}px;
`;

export const ContainerTasks = styled.View`
  background-color: #fff;
  justify-content: flex-start;;
  align-items: center;
  padding: ${w(2.5)}px;
  border-radius: ${w(4)}px;
  width: ${w(89)}px;
`;