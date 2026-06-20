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
exports.ManagerController = void 0;
const trycatch_1 = require("../../../helpers/trycatch");
const manager_constants_1 = require("./manager.constants");
const pick_1 = require("../../../shared/pick");
const manager_services_1 = require("./manager.services");
const sendResponse_1 = require("../../../helpers/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const getAllFromDB = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.pick)(req.query, manager_constants_1.managerFilterableFields);
    const options = (0, pick_1.pick)(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = yield manager_services_1.ManagerService.getAllFromDB(filters, options);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Managers retrieval successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getByIdFromDB = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield manager_services_1.ManagerService.getByIdFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Manager retrieval successfully',
        data: result,
    });
}));
const updateIntoDB = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield manager_services_1.ManagerService.updateIntoDB(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Manager data updated!",
        data: result
    });
}));
const deleteFromDB = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield manager_services_1.ManagerService.deleteFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Manager deleted successfully',
        data: result,
    });
}));
const softDelete = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield manager_services_1.ManagerService.softDelete(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Manager soft deleted successfully',
        data: result,
    });
}));
exports.ManagerController = {
    updateIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
    softDelete
};
