import api from '@/lib/axios';

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload) => {
  const {data} = await api.post('/auth/login', payload);
  return data; // API response
};
