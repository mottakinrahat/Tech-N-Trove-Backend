import { fileUploader } from "../../../helpers/fileUploader";
import prisma from "../../../shared/prisma";

const createSpecialtiesIntoDB = async (req:any) => {
const file = req.file ;
if(file){
    const uploadToCloudinary = await fileUploader.uploadToCloudinary(file.path);
    req.body.icon = uploadToCloudinary.url;
}
const createSpecialties=await prisma.specialties.create({
    data:req.body
})
return createSpecialties;
}

export const SpecialitiesServices = {                                              
    createSpecialtiesIntoDB
}