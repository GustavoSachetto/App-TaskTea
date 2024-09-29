import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { getFontSize } from '@/utils/fontSize';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: ${getFontSize(170)}px ;
  height: ${getFontSize(130)}px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-width: 1px;
  border-color: #a6a6a6;
  border-radius: ${getFontSize(12)}px;
  elevation: 5;
`;

export const CloseButton = styled.Pressable`
  position: absolute;
  top: ${getFontSize(5)};
  right: ${getFontSize(5)};
`;

export const ModalImage = styled.Image`
  width:  ${getFontSize(18)}px;
  height:  ${getFontSize(18)}px;
`;

export const ModalText = styled.Text`
  font-weight: 100;
  font-size: ${getFontSize(11)}px;
  color: black;
  text-align: center;
  margin-bottom: ${getFontSize(80)}px;
  font-family: ${Fonts.RalewayRegular};
`;

export const TextCodigoUser = styled.Text`
  font-weight: 900;
  font-size: ${getFontSize(35)}px;
  margin-top: ${getFontSize(10)}px;
  position: absolute;
  color: #444444;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
`;