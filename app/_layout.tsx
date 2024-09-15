import { useEffect } from 'react';
import { router, Slot } from 'expo-router';
import { SessionProvider, useSession } from '@/hooks/ctx';

function InitialLayout() {
  const { session } = useSession();

  useEffect(() => {
    
    if (!session) {
      router.replace("/(auth)")
    } else {
      router.replace("/(public)")
    }

  }, [session])

  return <Slot />
}

export default function Root() {
  return (
    <SessionProvider>
      <InitialLayout />
    </SessionProvider>
  );
}