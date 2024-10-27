import styled from "styled-components/native";
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';

export const SectionSearch = styled.View`
  font-size: ${w(7)}px;
  text-align: center;
  flex-direction: row;
  align-items: center; 
  margin: ${w(4)}px 0 ${w(8)}px 0;
  width: 100%;
  position: relative; 
`;

export const InputSearch = styled.TextInput`
  border-radius: ${w(3)}px;
  border: 2px solid blue;
  font-family: ${Fonts.RalewayRegular};
  color: #808080;
  width: 90%;
  margin: 0 auto;
  padding-left: ${w(3)}px;
  height: ${w(10)}px; 
  font-size: ${w(3)}px;
`;