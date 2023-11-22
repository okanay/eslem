import { type TUserView } from '@/server/drizzle/schemas/user';

declare module 'next-auth' {
  interface DefaultUser extends TUserView {}

  interface Session {
    user: TUserView;
    terminate: boolean;
  }
}
