import { FontProvider, useFonts } from '@/context/FontContext';
import { SessionProvider, useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { router, Slot } from 'expo-router';
import { verifyUserRole } from '@/utils/verifyUserRole';

function InitialLayout() {
  const { session, signOut } = useSession();
  const { fontsLoaded } = useFonts();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (isMounted && fontsLoaded) checkUserRole();
  }, [session, isMounted, fontsLoaded]);

  if (!fontsLoaded) {
    return null;    
  }

  const checkUserRole = async () => {
    if (session) {
      const role = await verifyUserRole(session);
      
      !role ? router.push("/(public)") : router.push(`/(auth)/(${role})` as any);
    } else {
      router.push("/(public)");
    }
  }


  return (
    <Slot />
  )
}

export default function Root() {
  return (
      <SessionProvider>
        <FontProvider>
          <InitialLayout />
        </FontProvider>
      </SessionProvider>
  );
}