import z from "zod";

const createAdminZodSchema = z.object({
  body: z.object({
    name: z.string(),
    contactNumber: z.string(),
  }),
});
const updateAdminZodSchema = z.object({
  body: z.object({
    name: z.string(),
    contactNumber: z.string(),
  }),
});
export const AdminValidation = {
  createAdminZodSchema,
 updateAdminZodSchema,
};