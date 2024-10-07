import { Modal } from 'react-native';
import { CenteredView, ModalView, Header, CloseButton, ModalImage, Title, Text, Line } from '@/styles/service-terms';

type ServiceTermsProps = {
    visible?: boolean, 
    onClose: () => void
  }

export default function ServiceTerms ({ visible, onClose }: ServiceTermsProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <CenteredView>
        <ModalView>
          <Header>
            <Title>Termos de serviço</Title>
            <CloseButton onPress={onClose}>
              <ModalImage source={require('../assets/icons/x.png')} />
            </CloseButton>
          </Header>
          <Line />
          <Text>
            {"\n\n"}
            ACEITAÇÃO DOS TERMOS:
            {"\n\n"}
            Bem-vindo ao TaskTea! Este aplicativo foi desenvolvido para auxiliar no tratamento de crianças que sofrem com o Transtorno do Espectro Autista (TEA), oferecendo uma plataforma onde, através de desafios diários criados em conjunto com os responsáveis, é possível desenvolver uma série de tarefas focadas na melhoraria de relações interpessoais e muito mais. Ao usar o nosso aplicativo, você e seus responsáveis legais concordam com os seguintes Termos de Serviço.
            {"\n\n"}
            CONTA E SEGURANÇA:
            {"\n\n"}
            Para utilizar o TaskTea será necessário criar uma conta. Esta conta deve ser criada e mantida sobre gerenciamento de um responsável legal.
            O responsável legal é responsável por garantir a precisão das informações fornecidas e pela segurança da conta, além de ser a pessoa que deverá desenvolver de forma consciente desafios personalizados para sua criança.
            Recomendamos que o nome de usuário e senha sejam mantidos em sigilo e que o responsável supervisione o uso do aplicativo pela criança, auxiliando-a em seu tratamento.
            {"\n\n"}
            PRIVACIDADE E PROTEÇÃO DE DADOS:
            {"\n\n"}
            Levamos a privacidade das crianças muito a sério e não coletaremos nenhuma informação de forma intencional sem o consentimento de um responsável legal.
            {"\n\n"}
            Todos os dados fornecidos serão mantidos em sigilo, acessíveis apenas ao usuário autorizado, que poderá gerenciá-los conforme necessário. Prezamos pela segurança e integridade de nossos usuários acima de tudo.
            {"\n\n"}
            USO PERMITIDO:
            {"\n\n"}
            O TaskTea é um aplicativo voltado a ajudar crianças com TEA, e deve ser usado apenas para fins educacionais e de tratamento. Queremos que seja usado para o auxílio dessas crianças de forma à melhorar suas relações interpessoais e muito mais.
            O aplicativo deve ser supervisionado por um responsável legal, e seus desafios criados de forma consciente para contribuir com o tratamento.
            Não é permitido usar o aplicativo para qualquer atividade ilegal ou inadequada.
            {"\n\n"}
            RESPONSABILIDADE DO RESPONSAVEL LEGAL:
            {"\n\n"}
            O responsável legal concorda em observar o uso do aplicativo e todas as ações da mesma durante o seu uso, a fim de garantir que não seja utilizado de maneira indevida. E concorda em criar e monitorar os desafios fornecidos para a criança, de forma a desempenhar seu tratamento de forma segura e própria para ela.
            O TaskTea não se responsabiliza por qualquer atividade inadequada durante o uso do aplicativo ou fora do mesmo, apenas pela segurança de seus dados pessoais.
            {"\n\n"}
            SUSPENSÃO OU ENCERRAMENTO DA CONTA:
            {"\n\n"}
            Podemos suspender ou desligar qualquer conta que viole estes Termos de Serviço ou que esteja envolvida em atividades indevidas ou ilegais.
            O TaskTea se reserva o direito de limitar o acesso ao aplicativo caso possua alguma irregularidade ou uso indevido.
            {"\n\n"}
            ALTERAÇÃO NOS TERMOS:
            {"\n\n"}
            Esses termos podem ser atualizados de tempos em tempos. Caso ocorra notificaremos os usuários sobre as alterações, e será responsabilidade do responsável revisar as alterações e ver se concorda com as mesmas.
            {"\n\n"}
            CONTATO:
            {"\n\n"}
            Em caso de dúvidas ou preocupações sobre estes Termos de Serviço, ou queira sugerir uma melhoria ou bug entre em contato conosco pelo e-mail: contato.tasktea@gmail.com
          </Text>
        </ModalView>
      </CenteredView>
    </Modal>
  )
}