import { ScrollViewContainer, Logo, QuebraCabeca, Text, Data, Calendario,
   Box, GradientBorderBox, ContainerRowChild, LinkedStartTask, TextButtonStartTask, 
   TarefaImage,
   TextTarefa} from '@/styles/index-child';
import { Title } from "@/styles";
import Colors from '@/constants/Colors';
import { CurrentDate } from '@/utils/currentDate';

const ImageLogo = require('@/assets/images/logo.png');
const ImageCalendario = require('@/assets/icons/calendario.png');
const ImageDesafios = require('@/assets/icons/desafios-quebra-cabeca.png');
const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const BlueColor  = Colors.colors.blue;

export default function HomePage() {
  return (
    <ScrollViewContainer>
      <QuebraCabeca source={ImageDesafios} resizeMode="contain" />
      <Logo source={ImageLogo} resizeMode="contain" />
      <Text>Olá, nome</Text>
      <ContainerRowChild>
        <Calendario source={ImageCalendario} resizeMode="contain" />
        <Data><CurrentDate/></Data>
      </ContainerRowChild>
      <GradientBorderBox>
         <TarefaImage source={ImageTarefa} ></TarefaImage>
         <Box>
          <Title customColor={BlueColor}>Desafio do Dia</Title>
          <TextTarefa>Tarefa tal, boa sorte!</TextTarefa>
          <LinkedStartTask href="/(auth)/(child)/single-task">
            <TextButtonStartTask>Iniciar</TextButtonStartTask>
          </LinkedStartTask>
        </Box>
      </GradientBorderBox>
    </ScrollViewContainer>
  );
}