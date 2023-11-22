import db from '@/server/drizzle/db';
import { usersTable } from '@/server/drizzle/schemas';
import { eq } from 'drizzle-orm';
import { GenerateRandomToken } from '@/server/auth/generate-accessToken';
import currentDate from '@/libs/date/current-date';

export async function updateUserAccessToken(userId: string) {
  const updatedAccessToken = GenerateRandomToken(32);

  let isSuccess;
  isSuccess = await db
    .update(usersTable)
    .set({ accessToken: updatedAccessToken, lastActiveTime: currentDate })
    .where(eq(usersTable.id, userId))
    .then(e => true)
    .catch(e => false);

  return { isSuccess, updatedAccessToken };
}
