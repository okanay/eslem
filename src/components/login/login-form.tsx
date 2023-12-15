'use client';

import { notificationAtom } from '@/atoms/notification-atom';

import { useForm } from 'react-hook-form';
import { LoginButton } from '@/components/login/login-button';
import { useLoginValidation } from '@/hooks/useLoginValidation';
import { useRouter } from 'next/navigation';
import { LoginInputError } from '@/components/login/login-input-error';
import { signIn, SignInResponse } from 'next-auth/react';
import { useSetAtom } from 'jotai';

export const LoginForm = () => {
  const router = useRouter();
  const { register, getValues } = useForm();
  const { checkLoginInput, clearError, formattedErrors } = useLoginValidation();
  const setNotification = useSetAtom(notificationAtom);

  // These constants are updated when the <LoginForm> component is rendered, and they are used for styling.
  const isError = Boolean(formattedErrors?._errors);
  const isEmailValid = Boolean(!formattedErrors?.email);
  const isPasswordValid = Boolean(!formattedErrors?.password);

  // This function, as the <form-action>, runs on the server after checking the input values.
  const handleFormAction = async (formData: FormData) => {
    if (!checkLoginInput(getValues())) return;
    clearError();

    const { email, password } = getValues();
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) handleLoginSuccess(response);
    else handleLoginFail(response);
  };

  // This function runs after a successful user login.
  const handleLoginSuccess = (response: SignInResponse) => {
    router.push('/?status=authenticated');
  };

  // This function runs when there is a login error.
  const handleLoginFail = (response: SignInResponse | undefined) => {
    if (response?.ok === false) {
      setNotification({
        isOpen: true,
        type: 'login-error',
        message: response.error as string,
      });
    }
  };

  return (
    <form action={handleFormAction} className={'flex w-full flex-col gap-4'}>
      <div data-name={'email-container'} className={'relative h-full w-full'}>
        <input
          {...register('email')}
          name={'email'}
          type={'email'}
          placeholder={'Email Address'}
          className={`h-12 w-full rounded-lg border-2 border-zinc-50 bg-primary-400  pl-12 pr-4 text-zinc-50 placeholder-zinc-50/80 transition-colors duration-500 focus:placeholder-zinc-50/0 focus:outline-none`}
        />
        <div
          data-name={'email-heroicon-container'}
          className={
            'pointer-events-none absolute left-0 top-0 flex h-12 w-full items-center justify-start px-4'
          }
        >
          {/*<EnvelopeIcon className={'h-[24px] w-[24px] text-zinc-50'} />*/}
        </div>
      </div>
      <LoginInputError
        isError={!isEmailValid}
        message={formattedErrors?.email?._errors.at(0) as string}
        name={'email-error-container'}
      />

      <div
        data-name={'password-container'}
        className={'relative h-full w-full'}
      >
        <input
          {...register('password')}
          name={'password'}
          type={'password'}
          placeholder={'Password'}
          className={`h-12 w-full rounded-lg border-2 border-zinc-50 bg-primary-400  pl-12 pr-4 text-zinc-50 placeholder-zinc-50/80 transition-colors duration-500 focus:placeholder-zinc-50/0 focus:outline-none`}
        />
        <div
          data-name={'password-heroicon-container'}
          className={
            'pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-start px-4'
          }
        >
          {/*<LockClosedIcon className={'h-[24px] w-[24px] text-zinc-50'} />*/}
        </div>
      </div>
      <LoginInputError
        isError={!isPasswordValid}
        message={formattedErrors?.password?._errors.at(0) as string}
        name={'password-error-container'}
      />

      <div
        data-name={'form-buttons-container'}
        className={'mt-8 flex flex-col items-end gap-4'}
      >
        <LoginButton />
        <button type={'button'} className={'text-lg text-zinc-50'}>
          Forgot Password?
        </button>
      </div>
    </form>
  );
};
