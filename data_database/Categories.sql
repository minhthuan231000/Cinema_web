-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Categories_id_seq"

-- Table Definition
CREATE TABLE "public"."Categories" (
    "id" int4 NOT NULL DEFAULT nextval('"Categories_id_seq"'::regclass),
    "category_name" varchar NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Categories" ("id", "category_name", "createdAt", "updatedAt") VALUES
(1, 'Action', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Categories" ("id", "category_name", "createdAt", "updatedAt") VALUES
(2, 'Horror ', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Categories" ("id", "category_name", "createdAt", "updatedAt") VALUES
(3, 'Cartoon', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Categories" ("id", "category_name", "createdAt", "updatedAt") VALUES
(4, 'Fiction', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(5, 'Myths', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(6, 'Comedy', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(7, 'Adventure', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(8, 'Drama', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(9, 'Cinema', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');