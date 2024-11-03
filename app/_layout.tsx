import { FontProvider, useFonts } from '@/context/FontContext';  
import { useStorageState } from '@/utils/useStorageState';
import { SessionProvider, useSession } from '@/hooks/ctx';
import { useEffect, useState } from 'react';
import { router, Slot } from 'expo-router';
import { getMyUser } from '@/services/api/routes/user';

function InitialLayout() {
  const { session } = useSession();
  const { fontsLoaded } = useFonts(); 
  const [ isMounted, setIsMounted ] = useState(false);
  const [[isLoading, userData], setUserData] = useState('');

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

  const verifyUserRole: (session: string) => Promise<string | null> = async (session) => {
    if (userData) return userData;
  
    const response = await getMyUser(session);
  
    if (!response.data.role) {
      console.error('Role is undefined');
      return null;
    }
  
    const role = response.data.role[0];
    return role;
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
