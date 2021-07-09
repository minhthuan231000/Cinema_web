-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS "Cinemas_id_seq"

-- Table Definition
CREATE TABLE "public"."Cinemas" (
    "id" int4 NOT NULL DEFAULT nextval('"Cinemas_id_seq"'::regclass),
    "name" varchar NOT NULL,
    "address" text,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Cinemas" ("id", "name", "address", "createdAt", "updatedAt") VALUES
(1, 'BHD Star 3/2', 'Lầu 4, Siêu Thị Vincom 3/2, 3C Đường 3/2, Q. 10, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Cinemas" ("id", "name", "address", "createdAt", "updatedAt") VALUES
(2, 'BHD Star Bitexco', ' Lầu 3 & 4, TTTM ICON 68, 2 Hải Triều, Q.1, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');
INSERT INTO "public"."Cinemas" ("id", "name", "address", "createdAt", "updatedAt") VALUES
(3, 'BHD Star Phạm Hùng', 'Lầu 4, Centre Mall, C6/27 Phạm Hùng, Bình Chánh, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(4, 'CGV Pandora City', 'Lầu 3, Pandora City 1/1 Trường Chinh, Q. Tân Phú, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(5, 'CGV Vivo City', 'Lầu 5, TTTM SC VivoCity, 1058 Nguyễn Văn Linh, Q.7, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(6, 'Lotte Cộng Hoà', 'Tầng 4, Pico Plaza, 20 Cộng Hòa, P.12, Q. Tân Bình, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(7, 'Lotte Phú Thọ', 'Tầng 4 Lotte Mart Phú Thọ, ngã tư 3/2 và Lê Đại Hành, Q.11, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(8, 'CGV Vincom Đồng Khởi', 'Tầng 3, TTTM Vincom Center Đồng Khởi, 72 Lê Thánh Tôn & 45A Lý Tự Trọng, Quận 1, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07'),
(9, 'CGV Vincom Thủ Đức', 'Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, P. Bình Thọ, Q. Thủ Đức, Tp. Hồ Chí Minh', '2021-07-08 13:42:35.582476+07', '2021-07-08 13:42:35.582476+07');