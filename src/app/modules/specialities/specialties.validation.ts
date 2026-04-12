import z from "zod";

const specialitiesValidation = z.object({
    title: z.string("Title is required").min(3).max(255)
})

export const specialtiesValidation = {
    specialitiesValidation
}