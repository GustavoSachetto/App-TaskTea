import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SignInOptions = ({ visible, onClose }) => {

  const router = useRouter();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Image
              source={require('../assets/icons/x.svg')}
              style={styles.Image}
            />
          </Pressable>
          <Text style={styles.modalText}>Que tipo de <br/>usuário você é?</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => router.push('/(public)/sign-up-child')}>
            <Text style={styles.textStyle}>Criança</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => router.push('/(public)/sign-up-responsible')}>
            <Text style={styles.textStyle}>Responsável</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 225,
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 2,
    borderColor: '#00d46e',
    borderStyle: 'solid',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative', 
  },
  closeButton: {
    position: 'absolute', 
    top: 10,
    right: 10,
  },
  Image: {
    width: 28,
    height: 28,
  },
  button: {
    borderRadius: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginVertical: 4,
    width: 160,
    height: 30,
  },
  buttonClose: {
    backgroundColor: '#00d46e',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 500,
    fontSize: 19,
    color: '#737373',
    textAlign: 'center', 
    marginBottom: 15,
  },
});

export default SignInOptions;