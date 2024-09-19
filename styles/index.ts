import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';

const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerRow = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content:center;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 5%;
  margin-bottom: 15px;
`;

export const TextButton = styled.Text<any>`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${(props: any) => props.customColor || colors.white};
  font-family: ${Fonts.RalewayBold};
`;

export const Title = styled.Text<any>`
  color: ${(props: any) => props.customColor || title.gray};
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

export const ContainerButton = styled.View<any>`
  width: 96%;
  display: flex;
  justify-content: center;
  flex-direction: ${(props: any) => props.direction || 'column'};
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
