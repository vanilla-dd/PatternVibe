import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

const sql = neon(process.env.DB_URL!);
export const db = drizzle(sql, { schema });

export const DrizzlePgAdapter = new DrizzlePostgreSQLAdapter(
  db,
  schema.sessionTable,
  schema.userTable
);
