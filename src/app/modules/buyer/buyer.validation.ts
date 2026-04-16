import z from "zod";

const createBuyerZodSchema = z.object({
  body: z.object({
    name: z.string(),
    contactNumber: z.string(),
    address: z.string().optional(),
  }),
});
const updateBuyerZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
  }),
});
export const BuyerValidation = {
  createBuyerZodSchema,
 updateBuyerZodSchema,
};