import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';
import { getFontSize } from '@/utils/fontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { h, w } from '@/utils/responsiveMesures';

const { text } = Colors;
const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const ContainerScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  flex: 1;
  padding: 15px;
  border: green 2px solid;
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
  margin-top: ${w(8)}px ;
  margin-bottom: ${w(8)}px ;
  text-align: center;
`;

export const Logo = styled.Image`
  width: 100%;
  height: ${h(23)}px ;
  top: ${h(3)}px;
`;

export const LinkStyled = styled(Link)`
  color: ${ title.gray };
  font-size: ${getFontSize(9)}px;
  font-style: italic;
  text-decoration: underline;
  margin-top: ${h(3)}px ;
  margin-bottom: ${h(2.8)}px ;
`;

export const TextButton = styled.Text<any>`
  font-size: ${getFontSize(9)}px;
  color: ${(props: any) => props.customColor || colors.white};
  font-family: ${Fonts.RalewayBold};
  margin:0 auto;
`;


export const Border = styled.View<any>`
  width: 95%;
  align-items: flex-start;
  border: solid  ${(props: any) => props.customColor || dark.background} 4px;
  border-radius: ${h(2)}px ;
`;

export const Line = styled.View<any>`
  padding: 1px;
  width: 95%;
  margin: 0 auto ${w(1)}px ;
  border-radius: ${w(12)}px ;
  background-color:${(props: any) => props.customColor || dark.background};
`;

export const Input = styled.TextInput<any>`
  font-size: ${getFontSize(7)}px;
  font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius: ${w(3)}px ;
  padding: ${w(2)}px ;
  outline: 0;
  margin: ${w(1)}px auto;
  border: solid  ${(props: any) => props.customColor || dark.background} 2px;
`;

export const ButtonSign = styled.Pressable<any>`
  color: white;
  font-size: ${getFontSize(12)}px;
  font-weight: 600;
  align-self: center;
  padding: ${w(2)}px ${w(10)}px; 
  border-radius: ${w(9)}px;
  background-color: ${(props: any) => props.customColor};
`;

export const LinkedSign = styled.View`
  color: white;
  font-size: ${getFontSize(12)}px;
  font-weight: 600;
  padding: ${w(2)}px ${w(10)}px; 
  border-radius: ${w(9)}px;
  background-color: ${(props: any) => props.customColor};
`;

export const ContainerButtonsSign = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  padding: ${w(2)}px ${w(3)}px ${w(2)}px ;
`;

export const LinkPopUp = styled.Text`
  font-size: ${getFontSize(6)}px;
  color: ${text.darkgray};
  font-family: ${Fonts.RalewayRegular};
  text-decoration: underline; 

`;

export const TextReadAndAgree = styled.Text`
  font-size: ${getFontSize(6)}px;
  color: ${ Colors.colors.gray };
  font-family: ${Fonts.RalewayRegular};
  margin-left: ${h(1)}px;

`;

export const ContainerRow = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: ${h(3)}px ;
  margin-bottom: ${h(2.8)}px;
  margin-left: ${h(3)}px;
`;