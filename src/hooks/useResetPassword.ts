import {useMutation} from '@tanstack/react-query';
import {ResetPasswordPayload, resetPassword} from '@/services/auth';
import {toast} from 'react-toastify';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => resetPassword(payload),
    onSuccess: (data) => {
      console.log('Password Reset success:', data);
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error('Not registered');
      console.log(error.response.data.message);
    }
  });
};
