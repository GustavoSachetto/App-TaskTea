import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { h, w } from '@/utils/responsiveMesures';
import { getFontSize } from '@/utils/fontSize';
import { StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight;

const { title } = Colors;

export const GradientBorderBox = styled(LinearGradient).attrs(props => ({
  colors: props.colors || ['#0060ff', '#ffffff', '#0060ff'], 
}))`
  width: ${w(90)}px;
  height: ${h(23)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${w(5)}px;
  margin-bottom: ${w(10)}px;
  position: relative;
`;

export const Box = styled.View`
  height: 94%;
  width: 98% ;
  flex-direction:row;
  align-self: center;
  justify-content: center;
  border-radius: ${w(5)}px;
  z-index: 2;
  background-color: white;
  position: absolute; 
  padding: 5%;
`;

export const ScrollViewContainer = styled.ScrollView`
  background-color: #fff;
  flex: 1;
  margin-top: ${statusBar}px;
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor || title.gray};
  font-size: ${getFontSize(14)}px;
  font-weight: 600;
  text-align:center;
  margin: 0 0 ${w(2)}px 0;
  font-family:  ${Fonts.RalewayBold};
`;

export const Button = styled.Pressable<any>`
  border-radius: ${w(6)}px;
  background-color: ${(props: any) => props.customColor};
`;

export const Text = styled.Text`
  color: white;
  font-size: ${getFontSize(11)}px;
  padding: ${w(1.5)}px 0;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const Icons = styled.Image`
  width:40%;
  height:100%;
`;

export const View = styled.View`
  flex-direction:column;
  width:50%;
  justify-content:center;
  margin-left: 8%;
`;


export const Container = styled.View`
  flex-direction:row;
  width:${w(90)}px;
  justify-content:center;
  padding: 0 ${w(5)}px;
`;


