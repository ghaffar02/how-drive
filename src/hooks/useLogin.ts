import {useMutation} from '@tanstack/react-query';
import {loginUser, LoginPayload} from '@/services/auth';
import {toast} from 'react-toastify';
import {useTranslations} from 'next-intl';
import {useRouter} from 'next/navigation';

export const useLogin = () => {
  const t = useTranslations('loginPage');
  const router = useRouter();
  return useMutation({
    mutationFn: (payload: LoginPayload) => loginUser(payload),
    onSuccess: (data) => {
      console.log('Login success:', data);

      if (data.token) {
        localStorage.setItem('authToken', data.token);
        toast.success(t('ToastSuccessful'));
        setTimeout(() => {
          router.push('/dashboard-student');
        }, 500);
      } else {
        toast.success(t('ToastSuccessful'));
        setTimeout(() => {
          router.push('/dashboard-student');
        }, 500);
      }

      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
    },
    onError: (error: any) => {
      toast.error(
        t('ToastError')
        // error?.response.data.message || 'Login failed. Please try again.'
      );
      console.log(error.response.data.message);
    }
  });
};
