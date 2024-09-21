import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import Colors from '@/constants/Colors';

const { text } = Colors;

export const ContainerHeader = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 80px;
  padding-top: 150px;
  margin: 0 auto;
`;

export const QuebraCabeca = styled.Image`
  width: 180px;
  height: 165px;
  position: absolute;
  top: -28px;
  left: -35px;
  z-index: 99;
  transform: rotate(35deg);
`;

export const Text = styled.Text`
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
  color: ${Colors.text.darkgray};
  font-size: 22px;
`;

export const Data = styled.Text`
  color: ${Colors.text.red};
  text-align: center;
  font-family: ${Fonts.RalewayBold};
  font-size: 20px;
`;

export const Calendario = styled.Image`
  width: 35px;
  height: 35px;
  z-index: 99;
  margin-right: 10px;
`;
