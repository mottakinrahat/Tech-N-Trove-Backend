import multer from "multer";
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

cloudinary.config({
  cloud_name: "dse4w3es9",
  api_key: "954471851851321",
  api_secret:'YBC7g1ISjyateAnTE3XtYEY4xXk'
});
const uploadToCloudinary = async (filePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "uploads",
    });
    fs.unlinkSync(filePath);

    return { url: result.secure_url };
  } catch (error) {
    // optional: still try to clean up if upload fails
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw error;
  }
};

export const fileUploader = {
  upload,
  uploadToCloudinary,
};
