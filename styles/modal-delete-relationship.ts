import styled from "styled-components/native";
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.Pressable`
  position: absolute;
  top: ${getFontSize(5)}px;
  right: ${getFontSize(5)}px;
  z-index: 99;
`;

export const ModalView = styled.View`
  width: ${getFontSize(170)}px;
  height: ${getFontSize(130)}px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-width: 1px;
  border-color: #a6a6a6;
  border-radius: ${getFontSize(12)}px;
  elevation: 5;
`;

export const ModalText = styled.Text`
  font-weight: 100;
  font-size: ${getFontSize(11)}px;
  color: black;
  text-align: center;
  margin-top: ${getFontSize(11)}px;
  margin-bottom: ${getFontSize(11)}px;
  font-family: ${Fonts.RalewayRegular};
`;

export const ModalImage = styled.Image`
  width:  ${getFontSize(18)}px;
  height:  ${getFontSize(18)}px;
`;

export const ContainerButtons = styled.Pressable`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  gap: 100px;  
`;
