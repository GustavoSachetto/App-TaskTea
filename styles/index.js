import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';

const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const Container = styled.View`
 margin: 15px;
  height:85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 5%;
  margin-bottom: 15px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.customColor || colors.white};
  font-family: ${Fonts.RalewayBold};
`;

export const Title = styled.Text`
  color: ${(props) => props.customColor || title.gray};
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  font-family:  ${Fonts.RalewayBold};
`;

export const SubTitle = styled.Text`
  color: ${ title.gray };
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 13px;
  text-align: center;
`;

export const ContainerButton = styled.View`
  width: 96%;
  display: flex;
  justify-content: center;
  flex-direction: ${(props) => props.direction || 'column'};
`;

export const Button = styled.Pressable`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 80px;
  text-align: center;
  border-radius: 16px;
  margin:15px 0;
  background-color: ${ button.lightGreen };
  font-family:  ${Fonts.RalewayBold};
`;

export const LinkButton = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 0;
  text-align: center;
  border-radius: 16px;
  background-color: ${ button.lightBlue };
  font-family: ${Fonts.RalewayBold}
`;

export const LinkStyled = styled(Link)`
  color: ${ title.gray };
  margin-top: 5%;
  font-size: 18px;
  font-style: italic;
  text-decoration: underline;
`;

export const Overlay = styled.View`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Border = styled.View`
  margin-top: 1%;
  width: 95%;
  align-items: flex-start;
  border: solid  ${(props) => props.customColor || dark.background} 4px;
  border-radius:16px;
`;

export const Line = styled.View`
  padding:1px;
  width:95%;
  margin: 0 auto;
  border-radius:13px;
  background-color:${(props) => props.customColor || dark.background};
`;

export const Input = styled.TextInput`
  width: 95%;
  border-radius:13px;
  padding:10px;
  outline: 0;
  margin: 10px auto;
  border: solid  ${(props) => props.customColor || dark.background} 2px;
`;

export const ButtonSignIn = styled.Pressable`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.customColor};
`;

export const LinkedSignIn = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.customColor};
`;

export const ContainerButtonsSignIn = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  padding: 10px 10px 20px;
`;

