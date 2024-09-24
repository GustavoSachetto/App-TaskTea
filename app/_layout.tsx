import { useEffect } from 'react';
import { router, Slot } from 'expo-router';
import { SessionProvider, useSession } from '@/hooks/ctx';
import { FontProvider } from '@/context/FontContext'; 

function InitialLayout() {
  const { session } = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/(public)");
    } else {
      router.replace("/(auth)/(child)");
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
