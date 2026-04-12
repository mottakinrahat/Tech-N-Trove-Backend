/*
  Warnings:

  - You are about to drop the column `name` on the `specialties` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `specialties` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `specialties` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."specialties_name_key";

-- AlterTable
ALTER TABLE "public"."specialties" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "specialties_title_key" ON "public"."specialties"("title");
