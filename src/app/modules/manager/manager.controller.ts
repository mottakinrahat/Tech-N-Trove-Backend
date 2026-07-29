import { NextFunction, Request, RequestHandler, Response } from 'express';
import { catchAsync } from '../../../helpers/trycatch';
import { managerFilterableFields } from './manager.constants';
import { pick } from '../../../shared/pick';
import { ManagerServices } from './manager.services';
import { sendResponse } from '../../../helpers/sendResponse';
import status from "http-status";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, managerFilterableFields);

    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

    const result = await ManagerServices.getAllFromDB(filters, options);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Managers retrieval successfully',
        meta: result.meta,
        data: result.data,
    });
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params as any;
    const result = await ManagerServices.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Manager retrieval successfully',
        data: result,
    });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {

    const { id } = req.params as any;
    const result = await ManagerServices.updateIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Manager data updated!",
        data: result
    })
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params as any;
    const result = await ManagerServices.deleteFromDB(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Manager deleted successfully',
        data: result,
    });
});


const softDelete = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params as any;
    const result = await ManagerServices.softDeleteFromDB(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Manager soft deleted successfully',
        data: result,
    });
});


export const ManagerController = {
    updateIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
    softDelete
}