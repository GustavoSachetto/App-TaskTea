import { getMyUser } from '@/services/api/routes/user';

export const verifyUserRole = async (session: string): Promise<string | null> => {
  const response = await getMyUser(session);

  if (response?.message === "Unauthenticated.") {
    console.error("User is unauthenticated.");
    return null;
  }

  if (!response.data.role) {
    console.error('Role is undefined');
    return null;
  }

  return response.data.role[0];
};
