"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const manager_controller_1 = require("./manager.controller");
const prisma_1 = require("../../../../prisma/generated/prisma");
const manager_validation_1 = require("./manager.validation");
const validateRequest_1 = __importDefault(require("../../middleWares/validateRequest"));
const auth_1 = require("../../middleWares/auth");
const router = express_1.default.Router();
// task 3
router.get('/', manager_controller_1.ManagerController.getAllFromDB);
//task 4
router.get('/:id', manager_controller_1.ManagerController.getByIdFromDB);
router.patch('/:id', 
// auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.MANAGER),
(0, validateRequest_1.default)(manager_validation_1.ManagerValidation.update), manager_controller_1.ManagerController.updateIntoDB);
//task 5
router.delete('/:id', (0, auth_1.auth)(prisma_1.UserRole.ADMIN), manager_controller_1.ManagerController.deleteFromDB);
// task 6
router.delete('/soft/:id', (0, auth_1.auth)(prisma_1.UserRole.ADMIN), manager_controller_1.ManagerController.softDelete);
exports.ManagerRoutes = router;
