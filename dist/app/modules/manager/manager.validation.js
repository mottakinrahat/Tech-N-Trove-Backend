"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            error: 'Email is required',
        }),
        name: zod_1.z.string({
            error: 'Name is required',
        }),
        profilePhoto: zod_1.z.string({
            error: 'Profile Photo is required',
        }),
        contactNumber: zod_1.z.string({
            error: 'Contact Number is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        profilePhoto: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
    }),
});
exports.ManagerValidation = {
    create,
    update,
};
