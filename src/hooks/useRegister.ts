import {RegisterPayload, registerUser} from '@/services/auth';
import {useMutation} from '@tanstack/react-query';
import {toast} from 'react-toastify';
import {useTranslations} from 'next-intl';

export const useRegister = () => {
  const t = useTranslations('registerPage');
  return useMutation({
    mutationFn: (payload: RegisterPayload) => registerUser(payload),
    onSuccess: (data) => {
      console.log('Registered User', data);
      toast.success(t('toastSuccess'));
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    }
  });
};
