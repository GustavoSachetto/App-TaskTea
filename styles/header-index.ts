import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

export const Header = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: ${w(6)}px;
  margin-bottom: ${w(6)}px;
`;

export const Logo = styled.Image`
  height: ${h(20)}px;
  width: ${w(50)}px;
  margin: ${w(3)}px auto;
`;

export const QuebraCabeca = styled.Image`
  height: ${h(23)}px;
  width: ${w(45)}px;
  position: absolute;
  top: -${h(5)}px;
  left: -${w(11)}px;
  z-index: 99;
  transform: rotate(35deg);
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  color: ${Colors.text.darkgray};
  font-size: ${getFontSize(10)}px;
`;

export const Data = styled.Text`
  color: ${Colors.text.red};
  text-align: center;
  font-family: ${Fonts.RalewayBold};
  font-size: ${getFontSize(12)}px;
`;

export const Calendario = styled.Image`
  height: ${h(8)}px;
  width: ${w(8)}px;
  z-index: 99;
  margin-right: ${w(2)}px;;
`;
