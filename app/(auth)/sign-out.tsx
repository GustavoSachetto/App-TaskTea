import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { useSession } from '@/hooks/ctx';

export default function signOut() {
  const { session, signOut } = useSession();
	
  return (
    <View>
      <Text
        onPress={() => {
          signOut(session);

          router.replace('/');
        }}>
        Sair
      </Text>
    </View>
  );
}