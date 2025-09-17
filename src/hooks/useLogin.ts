import {useMutation} from '@tanstack/react-query';
import {loginUser, LoginPayload} from '@/services/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => loginUser(payload),
    onSuccess: (data) => {
      // assume API response is { token: "...", user: {...} }
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }
      // if you want to persist user info
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
    }
  });
};
