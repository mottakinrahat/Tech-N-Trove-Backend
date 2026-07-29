import { Prisma } from "../../../../prisma/generated/prisma";
import prisma from "../../../shared/prisma";

const getSettingsFromDB = async () => {
  return prisma.storeSettings.upsert({
    where: { id: "singleton" },
    update: {},
    create: { id: "singleton" },
  });
};

const upsertSettingsIntoDB = async (payload: {
  storeName?: string;
  logoUrl?: string | null;
  faviconUrl?: string | null;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
  supportEmail?: string | null;
  supportPhone?: string | null;
  address?: string | null;
  currency?: string;
  currencySymbol?: string;
  socialLinks?: Record<string, string> | null;
}) => {
  // Prisma requires Prisma.JsonNull instead of `null` for nullable JSON fields
  const socialLinks =
    payload.socialLinks === null
      ? Prisma.JsonNull
      : payload.socialLinks;

  const data = { ...payload, socialLinks };

  return prisma.storeSettings.upsert({
    where: { id: "singleton" },
    update: data,
    create: {
      id: "singleton",
      ...data,
    },
  });
};

export const StoreSettingsServices = {
  getSettingsFromDB,
  upsertSettingsIntoDB,
};
