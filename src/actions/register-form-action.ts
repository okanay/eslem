'use server';

import { Argon2IDHashPassword } from '@/server/auth/password-hash';
import { insertNewUser } from '@/server/drizzle/functions/insert-new-user';

export const registerFormAction = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const hashedPassword = await Argon2IDHashPassword(password as string);
  return await insertNewUser(email as string, hashedPassword);
};
