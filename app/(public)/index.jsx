import { Container, ContainerButton, Logo, Title, SubTitle, Button, LinkButton, LinkStyled } from "@/styles/index";

const ImageLogo = require('@/assets/images/logo.png');

export default function HomePage() {
  return (
    <Container>
      <Logo source={ImageLogo} />
      <Title>Bem Vindo ao seu app de tratamento diário!</Title>
      <SubTitle>Aqui iremos ajuda-lo a se desenvolver tanto psicologicamente quanto em sua cordenação motora.</SubTitle>
      <ContainerButton>
        <Button>Cadastrar</Button>
        <LinkButton href="/(public)/sign-in">Entrar</LinkButton>
      </ContainerButton>
      <LinkStyled href="/">Termos de serviços</LinkStyled>
    </Container>
  )
}