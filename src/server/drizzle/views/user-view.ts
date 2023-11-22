import { pgView } from 'drizzle-orm/pg-core';
import user from '@/server/drizzle/schemas/user';

const userViewTable = pgView('user_view').as(qb =>
  qb
    .select({
      id: user.id,
      name: user.name,
      surname: user.surname,
      gender: user.gender,
      birthdate: user.birthdate,
      email: user.email,
      phoneNumber: user.phoneNumber,
      accessToken: user.accessToken,
      role: user.role,
    })
    .from(user),
);

export default userViewTable;
