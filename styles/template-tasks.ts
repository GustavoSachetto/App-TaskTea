import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { h, w } from '@/utils/responsiveMesures';
import { getFontSize } from '@/utils/fontSize';
import { StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight;

const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const LinkedSign = styled.Pressable`
  margin-left: 0;
  height: ${w(4)}px;
  width: ${w(4)}px;
`;

export const Voltar = styled.Image`
  width: ${w(9)}px ;
  height: ${w(9)}px ;
  z-index: 99;

`;

export const ContainerAllTasks = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  margin-top: ${statusBar}px;
`;

export const ContainerTasksResponsible = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const QuebraCabeca = styled.Image`
  width: ${w(18)}px;
  height: ${w(18)}px;
  margin-bottom: ${h(2)}px;
  margin-right: ${w(1)}px;
  margin-left: -${w(11)}px;
  transform: rotate(120deg);
`;

export const ContainerRowTasks = styled.View`
  padding: ${w(5)}px;
  width: 100%;
  flex-direction: row;
`;

export const TextTask = styled.Text<any>`
  color: ${(props) => props.customColor || Colors.colors.lightYellow};
  font-size: ${getFontSize(14)}px;
  font-weight: 600;
  text-align: center;
  margin:0 auto;
  font-family: ${Fonts.RalewayBold};
`;

export const TextAddTask = styled.Text<any>`
  color: #737373;
  text-align: center;
  font-size: ${getFontSize(6)}px;
  font-family: ${Fonts.RalewayRegular};
`;

export const ContainerTasksDoing = styled.View<any>`
  margin-top: 0;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: ${getFontSize(16)}px;
  width: ${w(73)}px;
  border-top-left-radius: ${w(3.5)}px;
  border-top-right-radius: ${w(3.5)}px;
  font-family: ${Fonts.RalewayBold};
  background-color: ${(props) => props.customColor || Colors.colors.lightYellow};
`;

export const TextDoing = styled.Text`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(11)}px;
  font-weight: 600;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const GradientBorderBoxTasks = styled<any>(LinearGradient).attrs((props) => ({
  colors: [
    props.customColor || Colors.colors.lightYellow,
    "#ffffff",
    "#ffffff",
    "#ffffff",
    props.customColor || Colors.colors.lightYellow
  ],
}))`
  height: ${h(60)}px;
  width: ${w(90)}px;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${w(4)}px;
  margin-bottom: ${w(3)}px;
  margin-top: -${w(0.5)}px;
  position: relative;
  z-index: 98;
`;

export const GradientBorderBoxTasksResponsible = styled<any>(LinearGradient).attrs((props) => ({
  colors: [
    props.customColor || Colors.colors.lightYellow,
    "#ffffff",
    "#ffffff",
    "#ffffff",
    props.customColor || Colors.colors.lightYellow
  ],
}))`
  height: ${h(50)}px;
  width: ${w(80)}px;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${w(4)}px;
  margin-bottom: ${w(3)}px;
  margin-top: -${w(0.5)}px;
  position: relative;
  z-index: 98;
`;

export const ScrollViewContainerTasks = styled.ScrollView`
  flex: 1;
  z-index: 98;
  border-radius: ${w(2.6)}px;`;

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

export const Task = styled.View<any>`
  display: flex;
  margin-top: ${w(3)}px;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${w(5)}px;
  height: ${getFontSize(33)}px;
  width: 100%;
  border-radius: ${h(1)}px;
  font-family: ${Fonts.RalewayBold};
  background-color:  ${(props) => props.customColor || Colors.colors.lightYellow};
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail', 
}))`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(10)}px;
  font-weight: 600;
  text-align: justify;
  font-family: ${Fonts.RalewayBold};
  max-width: 100%;
`;
export const Description = styled.Text.attrs(()=>({
  numberOfLines: 1,
  ellipsizeMode: 'tail', 
}))`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(8)}px;
  text-align: justify;
  font-family: ${Fonts.RalewayItalic};
  max-width: 100%; 
`;


