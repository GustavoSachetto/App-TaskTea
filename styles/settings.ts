import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

const { colors } = Colors;

export const Container = styled.View`
    flex: 1;
    padding: 10px 25px 0 25px;
    height: 85%;
    display: flex;
    font-family: ${Fonts.RalewayBold};
    background-color:${colors.white};
`;
export const Header = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    font-family: ${Fonts.RalewayBold};
`;

export const Logo = styled.Image`
    width:55px;
    margin:10px;
`;

export const Title = styled.Text`
    font-size:27px;
    font-family: ${Fonts.RalewayBold};
`;

export const Functions = styled.View`
    background-color: #edeaea;
    padding:10px;
    margin:10px 0 10px 0;
    border-radius: 20px;
    flex-direction:row;
    align-items:center;
`;

export const Text = styled.Text`
    margin-left:12px;
    font-family: ${Fonts.RalewayBold};
`;