import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useSession } from '@/hooks/ctx';

export default function SignIn() {
  const { signIn } = useSession();
  
  return (
    <View>
      <Text
        onPress={() => {
          signIn('sistemateste@gmail.com', 'admin');

          router.replace('/');
        }}>
        Entrar
      </Text>

    </View>
  );
}