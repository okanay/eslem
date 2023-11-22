import db from '@/server/drizzle/db';

export default async function findUserWithAccessToken(accessToken: string) {
  let user;
  user = await db.query.usersTable
    .findFirst({ where: (user, { eq }) => eq(user.accessToken, accessToken) })
    .catch(e => null);
  return user;
}
