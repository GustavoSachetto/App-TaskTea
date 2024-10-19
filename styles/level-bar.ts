import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from "@/utils/fontSize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ContainerLevel = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${hp(2)}px 0 ${hp(0.5)}px 0;
`;

export const Level = styled.View<{$activate: boolean; }>`
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(50)}px;
  border: 2px solid ${Colors.colors.veryLightGreen};
  border-color: ${props => props.$activate ? Colors.colors.veryLightGreen : Colors.colors.lightGray };
`;

export const LevelText = styled.Text<{$activate: boolean; }>`
  font-size: ${getFontSize(13)}px;
  font-weight: 600;
  font-family: ${Fonts.RalewayRegular};
  color: ${props => props.$activate ? Colors.colors.veryLightGreen : Colors.colors.lightGray };
`;
