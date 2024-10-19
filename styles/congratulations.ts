
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
  align-items:flex-end ;
  justify-content:flex-end ;
  text-transform: uppercase;
`;

export const Image = styled.Image`
  width: ${w(50)}px ;
  height: ${w(50)}px;
  margin-top: -${w(10)}px;
  `;

export const ModalView = styled.View`
  width: ${w(97)}px;
  height: ${w(40)}px;
  margin-bottom: ${w(10)}px;
  background-color: white;
  border-width: 3px;
  border-color: ${title.green};
  border-radius: ${getFontSize(12)}px;
  flex-direction: row;
`;

export const CloseButton = styled.Pressable`
 width: ${w(100)}px ;
  height: ${h(70)}px;
`;

export const Title = styled.Text<any>`
  color: ${colors.red};
  font-size: ${getFontSize(12)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const ModalText = styled.Text<any>`
  color: ${colors.red};
  font-size: ${getFontSize(6)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
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

export const Confete = styled.Image`
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
  width: ${w(50)}px;
  margin-top: ${getFontSize(12)}px;
  text-align: center;
`;

