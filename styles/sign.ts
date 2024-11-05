import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';
import { getFontSize } from '@/utils/fontSize';
import { h, w } from '@/utils/responsiveMesures';

const { text, title, dark, colors } = Colors;

interface CustomColorProps {
  customColor?: string;
}

export const ContainerScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  flex: 1;
  padding: 15px;
`;

export const Title = styled.Text<CustomColorProps>`
  color: ${(props) => props.customColor || title.gray};
  font-size: ${getFontSize(11.5)}px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  font-family: ${Fonts.RalewayBold};
`;

export const SubTitle = styled.Text`
  color: ${title.gray};
  font-size: ${getFontSize(9)}px;
  margin-top: ${w(8)}px;
  margin-bottom: ${w(8)}px;
  text-align: center;
  text-transform: none;
`;

export const Text = styled.Text`
  color: ${title.gray};
  font-size: ${getFontSize(7)}px;
  margin-top: ${w(8)}px;
  margin-bottom: ${w(8)}px;
  text-align: center;
  text-transform: none;
`;

export const Logo = styled.Image`
  width: 100%;
  height: ${h(23)}px;
  top: ${h(3)}px;
`;

export const LinkStyled = styled(Link)`
  color: ${title.gray};
  font-size: ${getFontSize(9)}px;
  font-style: italic;
  text-decoration: underline;
  margin-top: ${h(3)}px;
  margin-bottom: ${h(2.8)}px;
  text-transform: none;
`;

export const TextButton = styled.Text<CustomColorProps>`
  font-size: ${getFontSize(9)}px;
  color: ${(props) => props.customColor || colors.white};
  font-family: ${Fonts.RalewayBold};
  margin: 0 auto;
  text-transform: none;
`;

export const Border = styled.View<CustomColorProps>`
  width: 95%;
  align-items: flex-start;
  border: solid ${(props) => props.customColor || dark.background} 4px;
  border-radius: ${h(2)}px;
  margin-bottom: ${h(5)}px;
`;

export const Line = styled.View<CustomColorProps>`
  padding: 1px;
  width: 95%;
  margin: 0 auto ${w(1)}px;
  border-radius: ${w(12)}px;
  background-color: ${(props) => props.customColor || dark.background};
`;

export const Input = styled.TextInput<CustomColorProps>`
  font-size: ${getFontSize(7)}px;
  font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius: ${w(3)}px;
  padding: ${w(2)}px;
  outline: 0;
  margin: ${w(1)}px auto;
  border: solid ${(props) => props.customColor} 2px;
  text-transform: none;
`;

export const PasswordContainer = styled.View`
  flex-direction: column;
  width: 95%;
  margin: ${w(1)}px auto;
  border-radius: ${w(12)}px;
`;

export const InputWrapper = styled.View<CustomColorProps>`
  flex-direction: row;
  align-items: center;
  border: solid ${(props) => props.customColor} 2px;
  border-radius: ${w(3)}px;
  padding-right: ${w(2)}px;
`;

export const InputPassword = styled.TextInput<CustomColorProps>`
  flex: 1;
  font-size: ${getFontSize(7)}px;
  font-family: ${Fonts.RalewayRegular};
  padding: ${w(2)}px;
  text-transform: none;
`;

export const ButtonSign = styled.Pressable<CustomColorProps>`
  color: white;
  font-size: ${getFontSize(12)}px;
  font-weight: 600;
  align-self: center;
  padding: ${w(2)}px ${w(10)}px;
  border-radius: ${w(9)}px;
  background-color: ${(props) => props.customColor};
`;

export const LinkedSign = styled.View<CustomColorProps>`
  color: white;
  font-size: ${getFontSize(12)}px;
  font-weight: 600;
  padding: ${w(2)}px ${w(10)}px;
  border-radius: ${w(9)}px;
  background-color: ${(props) => props.customColor};
`;

export const ContainerButtonsSign = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto ${w(4)}px;
  padding: ${w(2)}px ${w(3)}px ${w(2)}px;
`;

export const LinkPopUp = styled.Text`
  font-size: ${getFontSize(6)}px;
  color: ${text.darkgray};
  font-family: ${Fonts.RalewayRegular};
  text-decoration: underline;
  text-transform: none;
`;

export const TextReadAndAgree = styled.Text`
  font-size: ${getFontSize(6)}px;
  color: ${Colors.colors.gray};
  font-family: ${Fonts.RalewayRegular};
  margin-left: ${h(1)}px;
  flex: 1;

`;

export const ContainerRow = styled.View`
  flex: 1;
  padding-right: ${w(6)}px; 
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: ${h(3)}px;
  margin-bottom: ${h(2.8)}px;
  margin-left: ${h(3)}px;
`;
