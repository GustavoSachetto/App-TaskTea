
import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import Colors from '@/constants/Colors';
import { w, h } from '@/utils/responsiveMesures';

const { title } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: ${getFontSize(120)}px ;
  height: ${getFontSize(100)}px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-width: 3px;
  border-color: #ffca00;
  border-radius: ${getFontSize(12)}px;
`;

export const CloseButton = styled.Pressable`
  position: absolute;
  top: ${getFontSize(5)}px;
  right: ${getFontSize(5)}px;
`;

export const Label = styled.Text<any>`
  color: black;
  font-size: ${getFontSize(9)}px;
  text-align: left;
  font-family: ${Fonts.RalewayRegular};
  margin-left: 4%;
  margin-top: 4%;
`;

export const Input = styled.TextInput<any>`
font-size: ${getFontSize(7)}px;
 font-family: ${Fonts.RalewayRegular};
 color: ${title.gray};
  width: 85%;
  border-radius: ${w(4)}px ;
  padding: 2% ;
  outline: 0;
  margin: 4% auto;
  border: solid #f9d54b 2px;
`;

export const ModalImage = styled.Image`
  width:  ${getFontSize(18)}px;
  height:  ${getFontSize(18)}px;
`;

export const Button = styled.Pressable`
  border-radius: ${getFontSize(12)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${getFontSize(3)}px;
  margin-bottom: ${getFontSize(4)}px;
  width: ${getFontSize(80)}px;
  height: ${getFontSize(16)}px;
  background-color: #ffca00;
`;

export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: ${getFontSize(8)}px;
  font-family: ${Fonts.RalewayBold};
`;

export const Header = styled.Text`
  flex-direction: row;
  width:100%;
  margin-top: ${getFontSize(12)}px;
  text-align: center;
`;

