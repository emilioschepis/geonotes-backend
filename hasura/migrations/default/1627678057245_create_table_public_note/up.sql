CREATE TABLE "public"."note" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "location" point NOT NULL, "content" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
