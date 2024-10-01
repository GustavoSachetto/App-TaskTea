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

const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const ContainerAllTasks = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
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

export const AddTask = styled.Image`
  width: ${getFontSize(21)}px;
  height: ${getFontSize(21)}px;
  margin: 0 auto;
`;

export const ContainerRowTasks = styled.View`
  padding: ${w(5)}px;
  justify-content: center;
  align-items: center;
  text-align:center;
  flex-direction: row;
`;

export const TextTask = styled.Text<any>`
  color: ${(props) => props.customColor || Colors.colors.lightYellow};
  font-size: ${getFontSize(17)}px;
  margin-top: -${w(3)}px;
  font-weight: 600;
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
  border-radius: ${w(2.6)}px;
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

export const Task = styled.View<any>`
  display: flex;
  margin-top: ${w(3)}px;
  flex-direction: column;
  justify-content: space-between;
  padding: ${w(2.8)}px ${w(5)}px;
  height: ${getFontSize(33)}px;
  width: 100%;
  border-radius: ${h(1)}px;
  font-family: ${Fonts.RalewayBold};
  background-color:  ${(props) => props.customColor || Colors.colors.lightYellow};
`;

export const Title = styled.Text`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(10)}px;
  font-weight: 600;
  text-align: justify;
  font-family: ${Fonts.RalewayBold};
  max-width: 70%; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;

export const Description = styled.Text`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(5.8)}px;
  font-weight: 600;
  text-align: justify;
  font-family: ${Fonts.RalewayItalic};
  max-width: 95%; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;

export const Button = styled.Pressable`

`;


