import api from '@/lib/axios';

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (payload: LoginPayload) => {
  const {data} = await api.post('/auth/login', payload);
  return data; // API response
};
export interface ResetPasswordPayload {
  email?: string;
  password: string;
  confirmPassword: string;
}

export const resetPassword = async (payload: ResetPasswordPayload) => {
  const {data} = await api.post('/auth/resetPassword', payload);
  return data;
};

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
  role: string;
  address: string;
  phoneNumber: string;
}
export const registerUser = async (payload: RegisterPayload) => {
  const {data} = await api.post('auth/signup', payload);
  return data;
};
