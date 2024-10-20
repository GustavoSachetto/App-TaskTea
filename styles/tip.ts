import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const ModalView = styled.View`
  width: ${getFontSize(150)}px ;
  height: ${getFontSize(160)}px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-width: 3px;
  border-color: ${Colors.colors.lightYellow};
  border-radius: ${getFontSize(12)}px;
  elevation: 5;
`;

export const CloseButton = styled.Pressable`
  position: absolute;
  top: ${getFontSize(5)}px;
  right: ${getFontSize(5)}px;
`;

export const ModalImage = styled.Image`
  width:  ${getFontSize(18)}px;
  height:  ${getFontSize(18)}px;
`;

export const DicaPopUp = styled.Image`
  width:  ${getFontSize(35)}px;
  height:  ${getFontSize(35)}px;
  margin-bottom: ${w(3)}px;
`;

export const Button = styled.Pressable`
`;

export const ModalText = styled.Text`
  font-weight: 450;
  font-size: ${getFontSize(10)}px;
  color: #545454;
  text-align: center;
  margin: 0 ${w(2)}px 0px ${w(2)}px;
  font-family: ${Fonts.RalewayBold};
`;

export const TextHelp = styled.Text`
  font-weight: 200;
  font-size: ${getFontSize(6)}px;
  color: #737373;
  text-align: center;
  margin-top: ${w(5)}px;
  font-family: ${Fonts.RalewayRegular};
`;

export const TextTip = styled.Text`
  font-weight: 350;
  font-size: ${getFontSize(8)}px;
  color: #ff3131;
  text-align: center;
  margin: ${w(10)}px ${w(5)}px 0px ${w(5)}px;
  font-family: ${Fonts.RalewayBold};
`;
