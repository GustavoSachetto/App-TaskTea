import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

const { colors } = Colors;

export const Container = styled.View`
    flex: 1;
    height: 85%;
    display: flex;
    font-family: ${Fonts.RalewayBold};
    background-color:${colors.white};
`;

export const Banner = styled.Image`
    width:100%;
    height:20%;
`;

export const ImageProfile = styled.Image`
    max-width:130px;
    height:130px;
    width:100%;
    border-radius: 65px;
    margin-top:-65px;
    margin-left:13px;
`;

export const SectionProfile = styled.View`
    padding:10px;
    flex-direction:column;
`;

export const NameProfile = styled.Text`
    font-family: ${Fonts.RalewayBold};
    color: ${Colors.colors.blue};
    font-size:22px;
`;

export const About = styled.Text`
    margin:5px 0 5px 0;
    font-family: ${Fonts.RalewayRegular};
`;

export const Button = styled.Pressable`
    background-color: ${Colors.colors.blue};
    border-radius: 15px;
    padding: 7px;
    margin-top: 9px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${Colors.colors.white};
    font-size: 17px;
    text-align: center;
    font-family: ${Fonts.RalewayBold};
`;