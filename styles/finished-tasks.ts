import styled from "styled-components/native";
import { h, w } from '@/utils/responsiveMesures';
import { Link } from "expo-router";

export const ContainerColumn = styled.View`
  flex: 1;
  margin-top: ${h(3)}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Voltar = styled.Image`
  width: ${w(9)}px ;
  height: ${w(9)}px ;
  z-index: 99;
`;

export const LinkedSign = styled.Pressable`
  position: absolute;
  left:${w(8)}px;
  height: ${w(4)}px;
  width: ${w(4)}px;
`;

export const ContainerRowTasks = styled.View`
  padding: ${w(5)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align:center;
  flex-direction: row;
`;
