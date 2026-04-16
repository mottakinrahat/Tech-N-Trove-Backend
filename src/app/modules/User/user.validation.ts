import z from "zod";
export const GenderEnum = z.enum(["MALE", "FEMALE"]);

const createAdminValidation = z.object({
  body: z.object({
    password: z.string().min(1, { message: "Password is required" }),
    admin: z.object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
      contactNumber: z.string().min(1, { message: "Phone number is required" }),
    }),
  }),
});

const createManagerValidationSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  manager: z.object({
    name: z.string().min(1, "Name is required"),
    profilePhoto: z.string().url("Invalid photo URL").optional(),
    contactNumber: z
      .string()
      .min(10, "Contact number must be at least 10 digits"),
    address: z.string().optional(),
    email: z.string().email("Invalid email address"),
  }),
});

const createBuyerValidationSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  buyer: z.object({
    email: z.string().email(),
    name: z.string().min(1, "Name is required"),
    profilePhoto: z.string().url().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional(),
  }),
});
export const UserValidation = {
  createAdminValidation,
  createManagerValidationSchema,
  createBuyerValidationSchema,
};
