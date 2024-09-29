import { useEffect } from 'react';
import { router, Slot } from 'expo-router';
import { SessionProvider, useSession } from '@/hooks/ctx';
import { FontProvider } from '@/context/FontContext'; 
import { verifyUserRole } from '@/utils/verifyUserRole';

function InitialLayout() {
  const { session } = useSession();

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

    checkUserRole();
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
