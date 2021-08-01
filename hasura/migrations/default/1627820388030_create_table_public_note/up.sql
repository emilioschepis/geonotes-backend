CREATE TABLE "public"."note" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "content" text NOT NULL, "location" geography NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
