import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { LinearGradient } from "expo-linear-gradient";

const { title } = Colors;
const { colors } = Colors;

export const Container = styled.View`
  flex: 1;
  font-family: ${Fonts.RalewayBold};
  padding-top: ${h(4)}px;
  flex-direction: column;
`;

export const Label = styled.Text<any>`
  color: ${title.gray};
  font-size: ${getFontSize(9)}px;
  text-align: left;
  font-family:  ${Fonts.RalewayRegular};
  margin-left: 4%;
  margin-top: 4%;
`;

export const Input = styled.TextInput<any>`
font-size: ${getFontSize(7)}px;
 font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius: ${w(4)}px ;
  padding: 2% ;
  outline: 0;
  margin: 4% auto;
  border: solid #f9d54b 2px;
`;

export const InputDescription = styled.TextInput<any>`
font-size: ${getFontSize(7)}px;
 font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius: ${w(4)}px ;
  padding: 10% ;
  outline: 0;
  margin: 4% auto;
  border: solid #f9d54b 2px;
`;

export const ButtonCreate = styled.Pressable<any>`
  color: white;
  font-size: ${getFontSize(12)}px;
  padding: 3% 30%; 
  border-radius: ${w(9)}px;
  background-color: #f9d54b;
  margin: 5% auto;
`;

export const TarefaImage = styled.Image`
  height: 30%;
  width: 98% ;
  border-radius: ${w(5)}px;
  top: 1%; 
  z-index: 97;
`;

export const ButtonEdit = styled.Pressable`
  height: 6%; 
  width: 12% ;  
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
  width: ${w(9)}px ;
  height: ${h(5)}px ;
  z-index: 99;
  margin-bottom: ${h(2.5)}px;
  left: ${w(7.5)}px;
`;

export const GradientBorderBoxTasks = styled(LinearGradient).attrs({
    colors: ["#f9d448", "#ffffff", "#ffffff", "#ffffff", "#f9d448"],
  })`
    height: ${h(82)}px;
    width: ${w(80)}px;
    align-self: center;
    justify-content: flex-start;
    align-items: center;
    border-radius: ${w(4)}px;
    margin-bottom: ${w(3)}px;
    margin-top: ${w(4)}px;
    position: relative;
    z-index: 98;
  `;

  export const BoxTasks = styled.View`
  flex: 1;
  width: 98%;
  height: 98%;
  border-radius: ${w(4)}px;
  background-color: white;
  z-index: 2;
  bottom: 1%;
  margin-top: 2.2%;
  padding: 3%;
`;

export const ContainerButtonsSign = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  padding: ${w(2)}px ${w(3)}px ${w(2)}px ;
`;