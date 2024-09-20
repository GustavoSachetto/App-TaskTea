import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';
const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const QuebraCabeca = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: 5%;
  margin-bottom: 15px;
`;

  export const TextTask = styled.Text`
  color: ${ Colors.colors.yellow };
  font-size: 30px;
  font-weight: 600;
  padding: 12px 0;
  text-align: center;
  border-radius: 16px;
  font-family: ${Fonts.RalewayBold};
`;

export const ContainerTasksDoing = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerTasks = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  display: flex;
  font-family: ${Fonts.RalewayBold};
  justify-content:center;
  align-items: center;
  flex-direction: column;
`;

export const ScrollViewContainerTasks = styled.ScrollView`
  background-color: #fff;
  flex: 1;
`;


export const ContainerRowTasks = styled.View`
  flex: 1;
  padding: 15px;
  height: 85%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;