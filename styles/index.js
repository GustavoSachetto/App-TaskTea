import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

const { title } = Colors;
const { button } = Colors;

export const Container = styled.View`
  margin: 15px;
  display: flex;
  font-family: Arial;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 9%;
`;

export const Title = styled.Text`
  color: ${ title.gray };
  font-size: 24px;
  margin-top: 4vh;
  font-weight: 600;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${ title.gray };
  font-size: 18px;
  margin-top: 6vh;
  text-align: center;
`;

export const ContainerButton = styled.View`
  width: 96%;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;

export const Button = styled.Pressable`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 0;
  text-align: center;
  border-radius: 16px;
  background-color: ${ button.lightGreen };
`;

export const LinkButton = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 0;
  margin-top: 3vh;
  text-align: center;
  border-radius: 16px;
  background-color: ${ button.lightBlue };
`;

export const LinkStyled = styled(Link)`
  color: ${ title.gray };
  margin-top: 3vh;
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