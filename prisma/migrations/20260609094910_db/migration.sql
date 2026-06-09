/*
  Warnings:

  - You are about to drop the column `altPhoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `order_otps` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."order_otps" DROP CONSTRAINT "order_otps_orderId_fkey";

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "altPhoneNumber",
DROP COLUMN "phoneNumber";

-- DropTable
DROP TABLE "public"."order_otps";
