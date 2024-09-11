import { api } from "../api";

type CategoryProps = {
    id: number,
    name: string,
    created_at: string,
    updated_at: string
}

type PostCategoryProps = {
    name: string
}

export const getAllCategories = async () => {
    const response = await api.get<CategoryProps[]>(
        `/categories`
    )

    return response.data;
}

export const fetchCategoryById = async (id: number) => {
    const response = await api.get<CategoryProps>(
        `/categories/${id}`
    )

    return response.data;
}

export const createCategory = async (data: PostCategoryProps, token: string) => {
    const response = await api.post<CategoryProps>(
        `/categories`, data, {
        headers: { 'Authorization': `Bearer ${token}` }
    })

    return response.data;
}

export const editCategoryById = async (id: number, data: PostCategoryProps, token: string) => {
    const response = await api.put<CategoryProps>(
        `/categories/${id}`, data, {
        headers: { 'Authorization': `Bearer ${token}` }
    })

    return response.data;
}

export const deleteCategoryById = async (id: number, token: string) => {
    const response = await api.delete(
        `/categories/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })

    return response.data;
}