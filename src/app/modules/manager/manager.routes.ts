import express from 'express'
import { ManagerController } from './manager.controller';
import { UserRole } from '../../../../prisma/generated/prisma';
import { ManagerValidation } from './manager.validation';
import validateRequest from '../../middleWares/validateRequest';
import { auth } from '../../middleWares/auth';


const router = express.Router();

// task 3
router.get('/', ManagerController.getAllFromDB);

//task 4
router.get('/:id', ManagerController.getByIdFromDB);

router.patch(
    '/:id',
    // auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.MANAGER),
    validateRequest(ManagerValidation.update),
    ManagerController.updateIntoDB
);

//task 5
router.delete(
    '/:id',
    auth(UserRole.ADMIN),
    ManagerController.deleteFromDB
);

// task 6
router.delete(
    '/soft/:id',
    auth(UserRole.ADMIN),
    ManagerController.softDelete);

export const ManagerRoutes = router;