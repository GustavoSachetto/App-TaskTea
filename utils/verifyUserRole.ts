import { getMyUser } from '@/services/api/routes/user'


export async function verifyUserRole(session: any) {
    let response = null;
    if (session) {
      response = await getMyUser(session);
    }
    return response?.data.role;
}