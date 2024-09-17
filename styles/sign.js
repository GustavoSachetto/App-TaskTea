import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';

export const Border = styled.View`
  margin-top: 1%;
  width: 95%;
  align-items: flex-start;
  border: solid  ${(props) => props.customColor || dark.background} 4px;
  border-radius:16px;
`;

export const Line = styled.View`
  padding: 1px;
  width: 95%;
  margin: 0 auto 4px;
  border-radius: 13px;
  background-color:${(props) => props.customColor || dark.background};
`;

export const Input = styled.TextInput`
 font-family: ${Fonts.RalewayRegular};
  width: 95%;
  border-radius:13px;
  padding:10px;
  outline: 0;
  margin: 4px auto;
  border: solid  ${(props) => props.customColor || dark.background} 2px;
`;

export const ButtonSign = styled.Pressable`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.customColor};
`;

export const LinkedSign = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 40px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.customColor};
`;

export const ContainerButtonsSign = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  padding: 10px 10px 20px;
`;