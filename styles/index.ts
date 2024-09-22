import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  font-family: ${Fonts.RalewayBold};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
}))`
  flex: 1;
  padding: 15px;
`;


export const ContainerRow = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 100%;
  height:  ${h(25)}px ;
  top: -${h(8)}px;
`;

export const TextButton = styled.Text<any>`
  font-size: ${getFontSize(9)}px;
  text-align: center;
  font-weight: 600;
  color: ${(props: any) => props.customColor || colors.white};
  font-family: ${Fonts.RalewayBold};
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor || title.gray};
  font-size: ${getFontSize(11.5)}px;
  font-weight: 600;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const SubTitle = styled.Text`
  color: ${ title.gray };
  font-size: ${getFontSize(9)}px;
  margin-top:  ${w(4)}px ;
  margin-bottom: ${h(3)}px ;
  text-align: center;
`;

export const ContainerButton = styled.View<any>`
  width: 96%;
  display: flex;
  justify-content: center;
  flex-direction: ${(props: any) => props.direction || 'column'};
  margin-bottom: 0;
`;

export const Button = styled.Pressable`
  color: white;
  padding: ${w(3)}px;
  width: ${w(70)}px;
  text-align: center;
  border-radius: ${w(12)}px ;
  margin: ${h(3)}px auto;
  background-color: ${ button.lightGreen };
`;

export const LinkButton = styled(Link)`
  color: white;
  padding: ${w(3)}px;
  width: ${w(70)}px;
  text-align: center;
  border-radius: ${w(12)}px ;
  margin: ${h(3)}px auto;
  background-color: ${ button.lightBlue };
`;

export const LinkStyled = styled(Link)`
  color: ${ title.gray };
  font-size: ${getFontSize(9)}px;
  font-style: italic;
  text-decoration: underline;
  bottom: ${h(4)}px ;
  position:absolute;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
