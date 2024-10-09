import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const RoleEnum = pgEnum("role", ["admin", "user"]);

export const userTable = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  email: text("email").unique().notNull(),
  username: text("username"),
  password: text("password").notNull(),
  image: text("image"),
  role: RoleEnum("role").default("user"),
  customerId: text("customer_id"),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
