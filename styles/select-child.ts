import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { getFontSize } from '@/utils/fontSize';
import { w, h } from '@/utils/responsiveMesures';

const { text, colors} = Colors;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${w(4)}px
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
  border-color: ${colors.gray};
  border-radius: ${getFontSize(9)}px;
  margin-bottom: ${w(4.5)}px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: ${getFontSize(11)}px;
  color: #737373;
  margin-right:  ${getFontSize(1)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
`;


export const CloseButton = styled.Pressable`
    position: absolute;
    right: ${w(2)}px;
    top:  ${w(2)}px;
    z-index: 99;
`;

export const ButtonChild = styled.Pressable`
    width:  95%;
    flex-direction:row;
    align-items:center;
    height:  ${h(8)}px;
    background-color: ${colors.blue};
    padding: ${w(3)}px;
    margin: ${w(3)}px  auto;
    border-radius:20px;
`;

export const ModalImage = styled.Image`
  width:  ${w(8)}px;
  height:  ${w(8)}px;
`;

export const ImageProfile = styled.Image`
  width:  ${w(15)}px;
  height:  ${w(15)}px;
  margin-right:${w(3)}px;  
  border-radius: 100px;
`;

export const TextName = styled.Text`
  color: white;
  font-size: ${getFontSize(13)}px;
  font-family: ${Fonts.RalewayLight};   
`;
