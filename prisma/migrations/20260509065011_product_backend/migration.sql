-- CreateEnum
CREATE TYPE "public"."ProductStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'DRAFT');

-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "status" "public"."ProductStatus" NOT NULL DEFAULT 'DRAFT';
