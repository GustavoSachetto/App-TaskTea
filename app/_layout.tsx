import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { router, Slot } from 'expo-router';
import { SessionProvider, useSession } from '@/hooks/ctx';
import { FontProvider, useFonts } from '@/context/FontContext';  
import { verifyUserRole } from '@/utils/verifyUserRole';
import { OverlayProvider } from '@/context/OverlayContext';
import '@/styles/uppercase.css';

function InitialLayout() {
  const { session } = useSession();
  const { fontsLoaded } = useFonts(); 
  const [ isMounted, setIsMounted ] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const checkUserRole = async () => {
      const roles = await verifyUserRole(session);

      if (roles) {
        const role = Array.isArray(roles) ? roles[0] : roles;
        if (typeof role === 'string') {
          router.push(`/(auth)/(${role})` as any);
        }
      } else {
        router.push("/(public)");
      }
    };

    if (isMounted && fontsLoaded) {
      checkUserRole(); 
    }
  }, [session, isMounted, fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <OverlayProvider>
      <Slot />
    </OverlayProvider>
  );
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
