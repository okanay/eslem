import * as argon2 from 'argon2';

export async function Argon2IDHashPassword(password: string) {
  return await argon2.hash(password, { type: argon2.argon2id });
}

export async function Argon2IDVerifyPassword(hashPassword: string, enteredPassword: string) {
  return await argon2.verify(hashPassword, enteredPassword, { type: argon2.argon2id });
}
