import z from "zod";

const upsertSettings = z.object({
  body: z.object({
    storeName: z.string().min(1).optional(),
    logoUrl: z.string().optional().nullable(),
    faviconUrl: z.string().optional().nullable(),
    primaryColor: z.string().optional(),
    secondaryColor: z.string().optional().nullable(),
    accentColor: z.string().optional().nullable(),
    supportEmail: z.string().email().optional().nullable(),
    supportPhone: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    currency: z.string().min(1).max(10).optional(),
    currencySymbol: z.string().min(1).max(5).optional(),
    socialLinks: z.record(z.string(), z.string()).optional().nullable(),
  }),
});

export const StoreSettingsValidation = {
  upsertSettings,
};
