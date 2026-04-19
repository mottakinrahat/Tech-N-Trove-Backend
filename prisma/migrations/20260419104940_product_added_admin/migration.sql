/*
  Warnings:

  - Made the column `productAddById` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."products" ALTER COLUMN "productAddById" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_productAddById_fkey" FOREIGN KEY ("productAddById") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
