import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { w, h } from '@/utils/responsiveMesures';

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${w(4)}px;
`;

export const Line = styled.View`
  background-color: #000;
  width: 85%;
  height: 1px;
  margin-top: ${w(4.5)}px;
  margin: 0 auto;
`;


export const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  padding: ${h(9)}px ${w(5)}px ${h(9)}px ${w(5)}px;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.ScrollView`
  width: 90%;
  height: 80%;
  position: fixed;
  background-color: white;
  border-width: 3px;
  border-color: transparent;
  border-radius: ${getFontSize(9)}px;
  margin-bottom: ${w(4.5)}px;
`;

export const CloseButton = styled.Pressable`
  position: absolute;
  right: ${w(2)}px;
  top:  ${w(2)}px;
  z-index: 99;
`;

export const ModalImage = styled.Image`
  width:  ${w(8)}px;
  height:  ${w(8)}px;
`;

export const Button = styled.Pressable`
  border-radius: ${getFontSize(12)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${getFontSize(3)}px;
  margin-bottom: ${getFontSize(4)}px;
  width: ${getFontSize(80)}px;
  height: ${getFontSize(16)}px;
  background-color: #00d46e;
`;

export const Text = styled.Text`
  color: black;
  text-align: justify;
  font-size: ${getFontSize(5)}px;
  font-family: ${Fonts.RalewayLight};
  padding:  0 ${w(8)}px ${h(2)}px ${w(8)}px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(11)}px;
  color: #737373;
  margin-right:  ${getFontSize(1)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
`;


