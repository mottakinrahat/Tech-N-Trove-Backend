import z from "zod";
export const GenderEnum = z.enum(["MALE", "FEMALE"]);

const createAdminValidation = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  admin: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    contactNumber: z.string().min(1, { message: "Phone number is required" }),
  }),
});

const createDoctorValidationSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  doctor: z.object({
    name: z.string().min(1, "Name is required"),

    profilePhoto: z.string().url("Invalid photo URL").optional(),

    contactNumber: z
      .string()
      .min(10, "Contact number must be at least 10 digits"),

    address: z.string().optional(),

    registrationNumber: z.string().min(1, "Registration number is required"),

    experience: z
      .number()
      .int()
      .min(0, "Experience cannot be negative")
      .optional(),

    gender: GenderEnum,

    appointmentFee: z.number().int().min(0, "Appointment fee required"),

    qualification: z.string().min(1, "Qualification is required"),

    currentWorkPlace: z.string().min(1, "Current workplace is required"),

    designation: z.string().min(1, "Designation is required"),

    email: z.string().email("Invalid email address"),
  }),
});

const createPatientValidationSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  patient: z.object({
    
    email: z.string().email(),
    name: z.string().min(1, "Name is required"),

    profilePhoto: z.string().url().optional(),
    contactNumber: z.string().optional(),
    address: z.string().optional()
  })
});
export const UserValidation = {
  createAdminValidation,
  createDoctorValidationSchema,
  createPatientValidationSchema
};
