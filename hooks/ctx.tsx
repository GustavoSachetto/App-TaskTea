import { useContext, createContext, type PropsWithChildren } from 'react';
import { useStorageState } from '@/utils/useStorageState';
import { createLogin, logout } from '@/services/api/auth';

const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<string> | null;
  signOut: (token?: string | null) => Promise<string> | null;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          const response = await createLogin(email, password)
          
          setSession(response.token);

          return response.message;
        },
        signOut: async (token) => {
          const response = await logout(token)
          
          setSession(null);

          return response.message;
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}