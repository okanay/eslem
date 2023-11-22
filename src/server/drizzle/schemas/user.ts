import { boolean, text, timestamp, uuid, pgEnum, pgTable } from 'drizzle-orm/pg-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

export const genderEnum = pgEnum('gender', ['Erkek', 'Kadın', 'Belirtilmedi']);
export const roleEnum = pgEnum('role', ['authority_user', 'authority_admin_level_1', 'authority_admin_level_max']);

const table = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  phoneNumber: text('phone_number').notNull(),
  email: text('email').unique().notNull(),
  emailIsActive: boolean('email_is_active').default(false).notNull(),
  hashedPassword: text('hashed_password').default('').notNull(),
  accessToken: text('access_token').default('').notNull(),
  name: text('name').notNull(),
  surname: text('surname').notNull(),
  gender: genderEnum('gender').default('Belirtilmedi'),
  role: roleEnum('role').default('authority_user').notNull(),
  birthdate: timestamp('birthdate').defaultNow(),
  createdTime: timestamp('created_time').defaultNow(),
  lastActiveTime: timestamp('last_active_time').defaultNow(),
});
const tableView = pgTable('table_view', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  phoneNumber: text('phone_number').notNull(),
  email: text('email').unique().notNull(),
  emailIsActive: boolean('email_is_active').default(false).notNull(),
  accessToken: text('access_token').default('').notNull(),
  name: text('name').notNull(),
  surname: text('surname').notNull(),
  gender: genderEnum('gender').default('Belirtilmedi'),
  role: roleEnum('role').default('authority_user').notNull(),
  birthdate: timestamp('birthdate').defaultNow(),
});

export type TUserInsert = InferInsertModel<typeof table>;
export type TUserView = InferSelectModel<typeof tableView>;
export default table;
