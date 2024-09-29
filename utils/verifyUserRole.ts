import { getMyUser } from '@/services/api/user'


export async function verifyUserRole(session: any) {
    let response = null;
    if (session) {
      response = await getMyUser(session);
    }
    console.log(response?.role);
    return response?.role;
}