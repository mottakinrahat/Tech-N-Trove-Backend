/*
  Warnings:

  - You are about to drop the column `description` on the `banners` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `banners` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."banners" DROP COLUMN "description",
DROP COLUMN "title";
