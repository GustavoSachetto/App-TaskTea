import styled from "styled-components/native";
import Colors from "@/constants/Colors";
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from "@/utils/fontSize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const ContainerLevel = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${hp(1)}px;
`;

export const Level = styled.View<{$activate: boolean; }>`
  width: ${wp(8)}px;
  height: ${wp(8)}px;
  padding-bottom: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${Colors.colors.veryLightGreen};
  border-color: ${props => props.$activate ? Colors.colors.veryLightGreen : Colors.colors.lightGray };
`;

export const LevelText = styled.Text<{$activate: boolean; }>`
  font-size: ${getFontSize(13)}px;
  font-weight: 600;
  font-family: ${Fonts.RalewayRegular};
  color: ${props => props.$activate ? Colors.colors.veryLightGreen : Colors.colors.lightGray };
`;