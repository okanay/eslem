import { Argon2IDHashPassword } from '@/server/auth/password-hash';
import { usersTable } from '@/server/drizzle/schemas';
import db from '@/server/drizzle/db';
import currentDate from '@/libs/date/current-date';

export async function insertNewUser(email: string, password: string) {
  const hashedPassword = await Argon2IDHashPassword(password);

  return await db
    .insert(usersTable)
    .values({
      email: email,
      hashedPassword: hashedPassword,
      role: 'authority_user',
      gender: 'Belirtilmedi',
      name: 'Okan',
      surname: 'Ay',
      emailIsActive: false,
      phoneNumber: '5325468228',
      birthdate: currentDate,
    })
    .returning()
    .then(e => e[0]);
}
