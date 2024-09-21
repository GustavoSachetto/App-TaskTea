import { ScrollViewContainer,
  Box, GradientBorderBox, LinkedStartTask, TextButtonStartTask, 
  TarefaImage,
  TextTarefa} from '@/styles/index-child';
import { Title } from "@/styles";
import Colors from '@/constants/Colors';
import HeaderIndex  from '@/components/header-index'

const ImageTarefa = require('@/assets/images/tarefa-exemplo.png');
const BlueColor  = Colors.colors.blue;

export default function HomePage() {
 return (
   <ScrollViewContainer>
    <HeaderIndex />
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