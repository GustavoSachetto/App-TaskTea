import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

const { colors } = Colors;

export const Container = styled.View`
  flex: 1;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  background-color:${colors.white};
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
  font-size: ${getFontSize(10)}px;
`;

export const About = styled.Text`
  margin:${w(1)}px 0 ${w(1)}px 0;
  font-family: ${Fonts.RalewayRegular};
  font-size: ${getFontSize(7)}px;
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

export const ButtonText = styled.Text`
  color: ${Colors.colors.white};
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;