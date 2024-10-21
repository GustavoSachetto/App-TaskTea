import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { getFontSize } from '@/utils/fontSize';
import { w, h } from '@/utils/responsiveMesures';

const { colors } = Colors;


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

export const ContainerRow = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  align-items: center;
  flex-direction: row;
  margin-top: ${getFontSize(10)}px;
`;

export const ModalView = styled.ScrollView`
  width:  ${w(70)}px;
  height:  auto;
  position: fixed;
  background-color: #fff;
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
  font-family: ${Fonts.RalewayBold};
`;

export const Label = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(8)}px;
  color: #000;
  margin-right:  ${getFontSize(1)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const UserDataInput = styled.TextInput`
  font-weight: 500;
  font-size: ${getFontSize(11)}px;
  color: #737373;
  padding: ${w(4)}px;
  margin-right:  ${getFontSize(1)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
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