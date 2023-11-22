import type { Config } from 'drizzle-kit';
import { configDotenv } from 'dotenv';

export default {
  driver: 'pg',
  schema: './src/server/drizzle/schemas.ts',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
