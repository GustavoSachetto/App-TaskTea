import { ErrorProps, api } from "@/services/api/api";

export type RelationshipTokenProps = {
  token: string,
  message: string,
  expires_at: string
}

export const createToken = async (token?: string | null) => {
  const response = await api.get<RelationshipTokenProps & ErrorProps>(
    `/relationship`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const createRelationship = async (relationshipToken: string, token: string) => {
  const response = await api.post<{ message: string } & ErrorProps>(
    `/relationship`, { token: relationshipToken }, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const deleteRelationshipById = async (id: number, token: string) => {
  const response = await api.delete<{ message: string } & ErrorProps>(
    `/relationship/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
} 

export const deleteMyRelationship = async (token: string) => {
  const response = await api.delete<{ message: string } & ErrorProps>(
    `/relationship`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })

  return response.data;
}