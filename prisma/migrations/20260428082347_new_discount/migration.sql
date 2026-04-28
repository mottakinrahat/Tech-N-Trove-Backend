-- CreateEnum
CREATE TYPE "public"."DiscountType" AS ENUM ('PERCENTAGE', 'FIXED');

-- CreateTable
CREATE TABLE "public"."discounts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."DiscountType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "code" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."discount_products" (
    "id" TEXT NOT NULL,
    "discountId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "discount_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."discount_categories" (
    "id" TEXT NOT NULL,
    "discountId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "discount_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "discounts_code_key" ON "public"."discounts"("code");

-- CreateIndex
CREATE INDEX "discount_products_productId_idx" ON "public"."discount_products"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "discount_products_discountId_productId_key" ON "public"."discount_products"("discountId", "productId");

-- CreateIndex
CREATE INDEX "discount_categories_categoryId_idx" ON "public"."discount_categories"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "discount_categories_discountId_categoryId_key" ON "public"."discount_categories"("discountId", "categoryId");

-- AddForeignKey
ALTER TABLE "public"."discount_products" ADD CONSTRAINT "discount_products_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "public"."discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."discount_products" ADD CONSTRAINT "discount_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."discount_categories" ADD CONSTRAINT "discount_categories_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "public"."discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."discount_categories" ADD CONSTRAINT "discount_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
