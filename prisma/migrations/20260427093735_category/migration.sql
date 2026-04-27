/*
  Warnings:

  - Added the required column `image` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."categories" ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
