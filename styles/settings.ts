import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import { w } from '@/utils/responsiveMesures';

const { colors } = Colors;

export const Container = styled.View`
  flex: 1;
  padding: ${w(2)}px ${w(5)}px 0 ${w(5)}px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  background-color:${colors.white};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: ${Fonts.RalewayBold};
  padding: ${w(5)}px 0;
`;

export const Logo = styled.Image`
  width:${w(10)}px;
  height:${w(10)}px;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: ${getFontSize(13)}px;
  font-family: ${Fonts.RalewayBold};
  margin: 0 auto;
`;

export const Functions = styled.Pressable`
  background-color: #edeaea;
  padding:${w(2)}px;
  margin:${w(5)}px 0${w(2)}px 0;
  border-radius: ${w(12)}px;
  flex-direction:row;
  align-items:center;
`;

export const Text = styled.Text`
  margin-left:${w(2)}px;
  font-family: ${Fonts.RalewayBold};
  font-size: ${getFontSize(8)}px;
`;