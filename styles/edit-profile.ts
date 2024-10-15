import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

const { colors } = Colors;

export const ProfilePhoto = styled.View`
  height:${h(20)}px ;
  width: ${h(20)}px ;
  margin-top:-${h(10)}px;
  margin-left:${w(4)}px;
`;

export const ImageProfile = styled.Image`
  height: 100% ;
  width: 100% ;
  border-radius: 100%;
`;

export const ButtonEdit = styled.Pressable`
  height: 20%; 
  width: 22%;  
  position: absolute;
  right: 1%;
  top: 6.5%; 
  z-index: 98;
  align-items: center; 
  justify-content: center; 
`;

export const EditImage = styled.Image`
  height: 100%;
  width: 100%; 
  z-index: 99;
`;

export const Button = styled.Pressable`
  background-color: ${Colors.colors.blue};
  border-radius: ${w(12)}px;
  width: ${w(40)}px ;
  padding:${w(1.8)}px;
  margin: ${w(6)}px auto;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const ProfileBanner = styled.View`
  height:${h(20)}px ;
  width: 100% ;
`;