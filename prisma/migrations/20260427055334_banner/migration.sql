/*
  Warnings:

  - Made the column `buttonLink` on table `banners` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."banners" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "buttonLink" SET NOT NULL;
