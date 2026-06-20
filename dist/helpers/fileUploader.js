"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = require("cloudinary");
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, path_1.default.join(process.cwd(), "uploads"));
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
cloudinary_1.v2.config({
    cloud_name: "dse4w3es9",
    api_key: "954471851851321",
    api_secret: 'YBC7g1ISjyateAnTE3XtYEY4xXk'
});
const uploadToCloudinary = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cloudinary_1.v2.uploader.upload(filePath, {
            folder: "uploads",
        });
        fs_1.default.unlinkSync(filePath);
        return { url: result.secure_url };
    }
    catch (error) {
        // optional: still try to clean up if upload fails
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlinkSync(filePath);
        }
        throw error;
    }
});
exports.fileUploader = {
    upload,
    uploadToCloudinary,
};
