import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: ${getFontSize(170)}px;
  height: ${getFontSize(130)}px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border:solid #0060ff 4px;
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
  font-weight: 800;
  font-size: ${getFontSize(15)}px;
  color: #0060ff;
  text-align: center;
  margin-bottom: ${getFontSize(80)}px;
  font-family: ${Fonts.RalewayRegular};
`;

export const Input = styled.TextInput`
    border:solid #0060ff 2px;
    position: absolute;
    width:80%;
    border-radius: ${w(5)}px;
    padding: ${w(2)}px;
`;