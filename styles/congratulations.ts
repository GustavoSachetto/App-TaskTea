
import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { getFontSize } from '@/utils/fontSize';
import Colors from '@/constants/Colors';
import { w, h } from '@/utils/responsiveMesures';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { title } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const CenteredView = styled.View`
  flex: 1;
  align-items:flex-end ;
  justify-content:flex-end ;
`;

export const Image = styled.Image`
  width: ${wp(50)}px ;
  height: ${wp(50)}px;
  margin-top: -${wp(8)}px;
  z-index: 98;
  `;

export const ModalView = styled.View`
  width: ${wp(97)}px;
  height: ${wp(40)}px;
  margin-bottom: ${wp(10)}px;
  background-color: white;
  border-width: 3px;
  border-color: ${title.green};
  border-radius: ${getFontSize(12)}px;
  flex-direction: row;
  z-index: 96;
`;

export const CloseButton = styled.Pressable`
 width: ${wp(100)}px ;
  height: ${hp(70)}px;
`;

export const Title = styled.Text<any>`
  color: ${colors.red};
  font-size: ${getFontSize(12)}px;
  text-align: center;
  font-family: ${Fonts.RalewayBold};
`;

export const ModalText = styled.Text<any>`
  color: ${colors.red};
  font-size: ${getFontSize(8)}px;
  text-align: center;
  font-family: ${Fonts.RalewayRegular};
`;


export const Confete = styled.Image`
  width:  ${getFontSize(18)}px;
  height:  ${getFontSize(18)}px;
`;


export const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: ${getFontSize(8)}px;
  font-family: ${Fonts.RalewayBold};
`;

export const Header = styled.Text`
  flex-direction: row;
  width: ${wp(50)}px;
  margin-top: ${getFontSize(12)}px;
  text-align: center;
  z-index: 98;
`;

export const GradientBorderBox = styled.View`
  background-image: radial-gradient(circle, #48f97d 16%, #ffffff 50%);
  width: ${wp(75)}px;
  height: ${wp(75)}px;;
  position: absolute;
  z-index: 97;
  right:  -${wp(30)}px;
  bottom:  -${wp(35)}px;
  transform: rotate(180deg);
`;
