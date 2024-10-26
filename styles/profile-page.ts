import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Colors from '@/constants/Colors';

const statusBar = StatusBar.currentHeight;

const { colors } = Colors;

export const Container = styled.View`
  flex: 1;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  background-color:${colors.white};
  margin-top: ${statusBar}px;
`;

export const ButtonEditBanner = styled.Pressable`
  height: ${wp(10)}px; 
  width: ${wp(10)}px; 
  position: absolute;
  right: 5%;
  top: 8%; 
  z-index: 98;
  align-items: center; 
  justify-content: center; 
`;

export const ButtonEditProfile = styled.Pressable`
  height: ${wp(10)}px; 
  width: ${wp(10)}px; 
  position: absolute;
  left: 37%;
  bottom: 140%;
  z-index: 98;
  align-items: center; 
  justify-content: center; 
`;

export const EditImage = styled.Image`
  height: 100%;
  width: 100%; 
  z-index: 99;
`;

export const Banner = styled.Image`
  width:100%;
  height: ${h(20)}px ;
`;

export const ImageProfile = styled.Image`
  height:${h(20)}px;
  width: ${h(20)}px;
  border-radius:${w(100)}px;
  margin-top:-${h(10)}px;
  margin-left:${w(4)}px;
`;

export const SectionProfile = styled.View`
  padding:10px;
  flex-direction:column;
  margin-left:${w(4)}px;
`;

export const NameProfile = styled.Text`
  font-family: ${Fonts.RalewayBold};
  color: ${Colors.colors.blue};
  font-size: ${getFontSize(12)}px;
`;

export const About = styled.Text`
  margin:${w(1)}px 0 ${w(1)}px 0;
  font-family: ${Fonts.RalewayRegular};
  font-size: ${getFontSize(8)}px;
`;

export const Button = styled.Pressable`
  background-color: ${Colors.colors.blue};
  border-radius: ${w(12)}px;
  padding:${w(1.8)}px;
  margin-top: ${w(4)}px;
  margin-right: ${w(4)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonExit = styled(Button)`
  background-color: ${Colors.colors.red};
`;

export const ButtonText = styled.Text`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(9)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;