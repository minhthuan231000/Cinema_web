-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Theaters_id_seq"
DROP TYPE IF EXISTS "public"."enum_Theaters_type";
CREATE TYPE "public"."enum_Theaters_type" AS ENUM ('2d', '3d', '4dx');

-- Table Definition
CREATE TABLE "public"."Theaters" (
    "id" int4 NOT NULL DEFAULT nextval('"Theaters_id_seq"'::regclass),
    "name" varchar NOT NULL,
    "cinema_id" int4 NOT NULL,
    "type" "public"."enum_Theaters_type" NOT NULL,
    "number_row" int4 NOT NULL,
    "number_column" int4 NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "Theaters_cinema_id_fkey" FOREIGN KEY ("cinema_id") REFERENCES "public"."Cinemas"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Theaters" ("id", "name", "cinema_id", "type", "number_row", "number_column", "createdAt", "updatedAt") VALUES
(1, 'BHD Star 3/2', 1, '3d', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Theaters" ("id", "name", "cinema_id", "type", "number_row", "number_column", "createdAt", "updatedAt") VALUES
(2, 'BHD Star Bitexco', 2, '4dx', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Theaters" ("id", "name", "cinema_id", "type", "number_row", "number_column", "createdAt", "updatedAt") VALUES
(3, 'BHD Star Phạm Hùng', 3, '2d', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Theaters" ("id", "name", "cinema_id", "type", "number_row", "number_column", "createdAt", "updatedAt") VALUES
(4, 'CGV Pandora City', 4, '2d', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(5, 'CGV Vivo City', 5, '3d', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(6, 'Lotte Cộng Hoà', 6, '4dx', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(7, 'Lotte Phú Thọ', 7, '2d', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(8, 'CGV Vincom Đồng Khởi', 8, '3d', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(9, 'CGV Vincom Thủ Đức', 9, '4dx', 15, 15, '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');