import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
require('dotenv').config();
import * as schemas from '../drizzle/schemas';

const connectionString = process.env.DATABASE_URL || '';
const client = postgres(connectionString);
const db = drizzle(client, { schema: schemas });

export default db;
