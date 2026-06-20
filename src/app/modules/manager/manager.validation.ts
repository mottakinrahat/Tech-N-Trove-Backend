import { z } from 'zod';

const create = z.object({
    body: z.object({
        email: z.string({
            error: 'Email is required',
        }),
        name: z.string({
            error: 'Name is required',
        }),
        profilePhoto: z.string({
            error: 'Profile Photo is required',
        }),
        contactNumber: z.string({
            error: 'Contact Number is required',
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