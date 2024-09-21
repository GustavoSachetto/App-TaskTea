import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

const { title } = Colors;
const { dark } = Colors;
const { button } = Colors;
const { colors } = Colors;

export const ContainerAllTasks = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;

`;

export const QuebraCabeca = styled.Image`
  width: 65px;
  height: 65px;
  margin-bottom: 15px;
  transform: rotate(110deg);
`;

export const ContainerRowTasks = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;

`;

  export const TextTask = styled.Text`
  color: ${ Colors.colors.yellow };
  font-size: 33px;
  font-weight: 600;
  padding: 12px 0;
  text-align: center;
  border-radius: 16px;
  align-items: center;

  font-family: ${Fonts.RalewayBold};
`;

export const ContainerTasksDoing = styled.View`
  margin-top: -4%;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: ${hp('4%')}px ;
  width: ${wp('73%')}px ;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  font-family: ${Fonts.RalewayBold};
  background-color: ${ Colors.colors.lightYellow };
`;

export const TextDoing = styled.Text`
color: ${ Colors.colors.white };
font-size: 17px;
font-weight: 600;
text-align: center;
font-family: ${Fonts.RalewayBold};
`;

export const GradientBorderBoxTasks = styled(LinearGradient).attrs({
  colors: ['#f9d448', '#ffffff', '#ffffff', '#ffffff', '#f9d448'],
  
})`
  height: ${hp('60%')}px;
  width: ${wp('80%')}px;
  align-self: center;
  justify-content: flex-start; 
  align-items: center;
  border-radius: 23px;
  margin-bottom: 20px;
  margin-top: -2px;
  position: relative; 
  z-index: 98;

`;


export const ScrollViewContainerTasks = styled.ScrollView`
  flex: 1;
  z-index: 98;
  border-radius: 17px;
`;

export const BoxTasks = styled.View`
  flex: 1;
  width: ${wp('77%')}px;
  border-radius: 23px;
  background-color: white;
  z-index: 2;
  bottom: 1%;
  margin-top: 5px;
  padding: 3%;
`;

export const Task1 = styled.View`
  margin-top: 0.1%;
  display: flex;
  margin-bottom: 18px;
  flex-direction: column;
  height: 60px;
  width: 100%;
  border-radius: 7px;
  font-family: ${Fonts.RalewayBold};
  background-color: ${ Colors.colors.lightYellow };
`;

export const Title = styled.Text`
  color: ${ Colors.colors.white };
  margin-left: 15px;
  margin-top: 7px;
  font-size: 19px;
  font-weight: 600;
  text-align: justify;
  font-family: ${Fonts.RalewayBold};
`;

export const Description = styled.Text`
  color: ${ Colors.colors.white };
  margin-left: 15px;
  margin-top: 7px;
  font-size: 10px;
  font-weight: 600;
  text-align: justify;
  font-family: ${Fonts.RalewayItalic};
`;

export const Clips = styled.Image`
  width: 70px;
  height: 70px;
  right: 0;
  margin-top: -16px;
  margin-bottom: 15px;
  position: absolute;
  z-index: 99;
`;