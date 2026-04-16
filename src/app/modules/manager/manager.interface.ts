export type IManagerFilterRequest = {
    searchTerm?: string | undefined;
    email?: string | undefined;
    contactNo?: string | undefined;
};

export type IManagerUpdate = {
    name: string;
    profilePhoto: string;
    contactNumber: string;
};