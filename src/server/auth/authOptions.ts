import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import findUserWithEmail from '@/server/drizzle/functions/find-user-with-email';
import { Argon2IDVerifyPassword } from '@/server/auth/password-hash';
import { updateUserAccessToken } from '@/server/drizzle/functions/update-user-access-token';
import findUserWithAccessToken from '@/server/drizzle/functions/find-user-with-access-token';

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('Kullanıcı bilgileri eksik.');
        }

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error('Lütfen geçerli bir e-posta adresi ve şifre girin.');
        }

        const user = await findUserWithEmail(email);

        if (!user) {
          throw new Error('Kullanıcı bulunamadı.');
        }

        const { hashedPassword } = user;
        const passwordIsMatch = await Argon2IDVerifyPassword(hashedPassword, password);

        if (!passwordIsMatch) {
          throw new Error('Şifre hatalı.');
        }

        const { isSuccess, updatedAccessToken } = await updateUserAccessToken(user.id);

        if (!isSuccess) {
          throw new Error('Kullanıcı token güncelleme hatası.');
        }

        user.accessToken = updatedAccessToken;
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          emailIsActive: user.emailIsActive,
          accessToken: user.accessToken,
          name: user.name,
          surname: user.surname,
          gender: user.gender,
          role: user.role,
          birthdate: user.birthdate,
          phoneNumber: user.phoneNumber,
          terminate: false,
        };
      }
      if (token.accessToken) {
        const isTokenValid = await findUserWithAccessToken(token.accessToken as string);
        if (!isTokenValid) {
          return {
            ...token,
            terminate: true,
          };
        }
      }

      return token;
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          email: token.email,
          emailActive: token.emailActive,
          accessToken: token.accessToken,
          name: token.name,
          surname: token.surname,
          gender: token.gender,
          role: token.role,
          birthdate: token.birthdate,
          phoneNumber: token.phoneNumber,
        },
        terminate: token.terminate,
      };
    },
  },
  session: {
    strategy: 'jwt',
  },
};
