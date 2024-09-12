import { Text, View, Image, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View>
        <Image source="../../assets/images/logo.png" style={styles.image} />
      </View>
      <View>
        <Text>Bem Vindo ao seu app de tratamento diário!</Text>
        <Text>
          Aqui iremos ajuda-lo a se desenvolver tanto psicologicamente quanto em sua cordenação motora.
        </Text>
      </View>
      <View style={styles.container_button}>
        <Button title="Cadastrar" />
        <Link href="/(public)/sign-in">Entrar</Link>
      </View>
      <View>
        <Link href="">Termos de serviço</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
  container_button: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  image: {
    width: 300,
    height: 300
  }
})