import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: 225px;
  height: 175px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-width: 3px;
  border-color: #00d46e;
  border-radius: 20px;
  elevation: 5;
`;

export const CloseButton = styled.Pressable`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ModalImage = styled.Image`
  width: 28px;
  height: 28px;
`;

export const Button = styled.Pressable`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 160px;
  height: 30px;
  background-color: #00d46e;
`;

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const ModalText = styled.Text`
  font-weight: 500;
  font-size: 19px;
  color: #737373;
  text-align: center;
  margin-bottom: 3px;
  font-family: ${Fonts.RalewayBold};
`;
