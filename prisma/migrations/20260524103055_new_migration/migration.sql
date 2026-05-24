/*
  Warnings:

  - Added the required column `paymentMethod` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."BannerType" AS ENUM ('HERO', 'OFFER', 'PROMO');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('COD', 'ONLINE');

-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "paymentMethod" "public"."PaymentMethod" NOT NULL;

-- AlterTable
ALTER TABLE "public"."banners" ADD COLUMN     "bannerType" "public"."BannerType" NOT NULL DEFAULT 'HERO',
ADD COLUMN     "description" TEXT,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "buttonLink" DROP NOT NULL;
