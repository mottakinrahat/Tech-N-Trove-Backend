import { z } from 'zod';

const create = z.object({
    body: z.object({
        email: z.string({
            required_error: 'Email is required',
        }),
        name: z.string({
            required_error: 'Name is required',
        }),
        profilePhoto: z.string({
            required_error: 'Profile Photo is required',
        }),
        contactNumber: z.string({
            required_error: 'Contact Number is required',
        }),
    }),
});

const update = z.object({
    body: z.object({
        name: z.string().optional(),
        profilePhoto: z.string().optional(),
        contactNumber: z.string().optional(),
    }),
});

export const ManagerValidation = {
    create,
    update,
};