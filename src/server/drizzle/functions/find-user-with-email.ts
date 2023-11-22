import db from '@/server/drizzle/db';

export default async function findUserWithEmail(email: string) {
  let user;
  user = await db.query.usersTable.findFirst({ where: (user, { eq }) => eq(user.email, email) }).catch(e => null);
  return user;
}
