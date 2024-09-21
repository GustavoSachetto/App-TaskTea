import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const ContainerRowTask = styled.View`
  padding: 10px;
  flex-direction: row;
`;

export const Voltar = styled.Image`
  width: 35px;
  height: 35px;
`;

export const Dica = styled.Image`
  width: 58px;
  height: 58px;
`;

export const TextTaskDay = styled.Text`
  color: ${Colors.colors.blue};
  font-size: 33px;
  font-weight: 600;
  padding: 12px 0;
  text-align: center;
  margin: 0 auto;
  font-family: ${Fonts.RalewayBold};
`;

export const LinkedSign = styled(Link)`
  align-self: center;
  margin-right: 10px;
`;

export const BoxTask = styled.View`
  height: 51%;
  width: 97%;
  border-radius: 26px;
  z-index: 2;
  background-color: white;
  position: absolute;
  bottom: 1%;
  padding: 5%;
  justify-content: space-between;
`;

export const TarefaImage = styled.Image`
  height: 53%;
  width: 97%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  top: 1%;
`;

export const TextTarefa = styled.Text`
  color: ${ Colors.title.gray };
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 13px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  padding: 0px 16px 0px 16px;
`;

export const TextClick = styled.Text`
  color: ${ Colors.title.gray };
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 13px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  width: 80px;
`;