import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { getFontSize } from '@/utils/fontSize';
import { w, h } from '@/utils/responsiveMesures';
import { StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight;

const { colors } = Colors;


export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${w(7)}px;
`;

export const Line = styled.View`
  background-color: #000;
  width: 85%;
  height: 1px;
  margin-top: ${w(4.5)}px;
  margin: 0 auto;
`;

export const CenteredView = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0;  
  margin-top: ${statusBar}px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border: solid black 1px;
  border-radius: ${w(3)}px;
  padding-right: ${w(2)}px;
`;

export const InputPassword = styled.TextInput`
  flex: 1;
  font-size: ${getFontSize(7)}px;
  font-family: ${Fonts.RalewayRegular};
  padding: ${w(2)}px;
  text-transform: none;
`;

export const ContainerRow = styled.View`
  width:  ${w(80)}px;
  padding: 0 15px ;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  margin-top: ${w(4.5)}px;
  flex-direction: row;
`;


export const Container = styled.View`
  width:  ${w(80)}px;
  padding: 0 15px ;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content: center;
  margin-top: ${w(4.5)}px;
`;

export const ModalView = styled.View`
  width:  ${w(90)}px;
  margin: 0  auto;
  align-items: center;
`;

export const BackButton = styled.Pressable`
  position: absolute;
  right: ${w(2)}px;
  top:  ${w(0)}px;
  z-index: 99;
`;

export const ModalImage = styled.Image`
  width:  ${w(8)}px;
  height:  ${w(8)}px;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(8)}px;
  color: #737373;
  margin-left:  ${getFontSize(4)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(13)}px;
  color: #737373;
  margin-right:  ${getFontSize(1)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const Label = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(8)}px;
  color: #000;
  margin-right:  ${getFontSize(1)}px;
  text-align: left;
  font-family: ${Fonts.RalewayBold};
`;

export const ButtonPassword = styled.Pressable`
  font-size: ${getFontSize(8)}px;
  color: #000;
  text-decoration: underline;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  align-items: center;
  flex-direction: row;

`;

export const UserDataInput = styled.TextInput`
  font-size: ${getFontSize(8)}px;
  color: #737373;
  padding: ${w(1)}px;
  margin-right:  ${getFontSize(1)}px;
  text-align: left;
  font-family: ${Fonts.RalewayRegular};
  flex: 1;
  border: black 1px solid;
  border-radius: ${w(2)}px;
`;

export const ButtonSave = styled.Pressable`
  width:  35%;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  background-color: ${colors.blue};
  padding: ${w(2)}px ${w(7)}px;
  margin: ${getFontSize(8)}px  auto;
  border-radius: ${w(8)}px;
`;

export const TextButton = styled.Text`
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  font-family: ${Fonts.RalewayBold};
`;