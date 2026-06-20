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
exports.AddressController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const trycatch_1 = require("../../../helpers/trycatch");
const sendResponse_1 = require("../../../helpers/sendResponse");
const address_services_1 = require("./address.services");
const createAddress = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield address_services_1.AddressServices.createAddressIntoDB(req.user, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Address created successfully",
        data: result,
    });
}));
const getMyAddresses = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield address_services_1.AddressServices.getMyAddressesFromDB(req.user);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Addresses retrieved successfully",
        data: result,
    });
}));
const updateMyAddress = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield address_services_1.AddressServices.updateMyAddressFromDB(req.user, req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Address updated successfully",
        data: result,
    });
}));
const deleteMyAddress = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield address_services_1.AddressServices.deleteMyAddressFromDB(req.user, req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Address deleted successfully",
        data: null,
    });
}));
const setDefaultAddress = (0, trycatch_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield address_services_1.AddressServices.setDefaultAddressIntoDB(req.user, req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Default address updated successfully",
        data: result,
    });
}));
exports.AddressController = {
    createAddress,
    getMyAddresses,
    updateMyAddress,
    deleteMyAddress,
    setDefaultAddress,
};
