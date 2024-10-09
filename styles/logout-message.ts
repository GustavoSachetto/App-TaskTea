import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: ${getFontSize(180)}px ;
  height: ${getFontSize(90)}px;
  justify-content: center;
  align-items: center;
  background-color: white;
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


export const ContainerButtons = styled.Pressable`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  gap: 100px;  
`;

export const Button = styled.Pressable`
  border-radius: ${getFontSize(12)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${getFontSize(3)}px;
  margin-bottom: ${getFontSize(4)}px;
  width: ${getFontSize(50)}px;
  height: ${getFontSize(20)}px;
`;

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: ${getFontSize(12)}px;
  font-family: ${Fonts.RalewayBold};
`;

export const ModalText = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(13)}px;
  color: #444444;
  text-align: center;
  margin-bottom: ${getFontSize(1)}px;
  font-family: ${Fonts.RalewayBold};
`;
