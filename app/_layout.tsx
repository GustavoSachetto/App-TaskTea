import { useEffect } from 'react';
import { router, Slot } from 'expo-router';
import { SessionProvider, useSession } from '@/hooks/ctx';
import { FontProvider } from '../context/FontContext'; // Verifique se o caminho está correto

function InitialLayout() {
  const { session } = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/(auth)/(child)");
    } else {
      router.replace("/(public)");
    }
  }, [session]);
  return (
    <FontProvider>
      <Slot />
    </FontProvider>
  );
}

export default function Root() {
  return (
    <SessionProvider>
      <InitialLayout />
    </SessionProvider>
  );
}
