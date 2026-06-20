"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/User/user.routes");
const admin_routes_1 = require("../modules/admin/admin.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const manager_routes_1 = require("../modules/manager/manager.routes");
const buyer_routes_1 = require("../modules/buyer/buyer.routes");
const address_routes_1 = require("../modules/address/address.routes");
const shippingAddress_routes_1 = require("../modules/shippingAddress/shippingAddress.routes");
const product_routes_1 = require("../modules/product/product.routes");
const category_routes_1 = require("../modules/category/category.routes");
const brand_routes_1 = require("../modules/brand/brand.routes");
const payment_routes_1 = require("../modules/payment/payment.routes");
const cart_routes_1 = require("../modules/cart/cart.routes");
const order_routes_1 = require("../modules/order/order.routes");
const review_routes_1 = require("../modules/review/review.routes");
const wishlist_routes_1 = require("../modules/wishlist/wishlist.routes");
const banner_routes_1 = require("../modules/banner/banner.routes");
const discount_routes_1 = require("../modules/discount/discount.routes");
const router = express_1.default.Router();
const moduleRouter = [
    {
        path: "/user",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/admins",
        route: admin_routes_1.adminRoutes,
    },
    {
        path: "/auth",
        route: auth_routes_1.authRoutes,
    },
    {
        path: "/manager",
        route: manager_routes_1.ManagerRoutes,
    },
    {
        path: "/buyer",
        route: buyer_routes_1.buyerRoutes,
    },
    {
        path: "/addresses",
        route: address_routes_1.addressRoutes,
    },
    {
        path: "/shipping-addresses",
        route: shippingAddress_routes_1.shippingAddressRoutes,
    },
    {
        path: "/products",
        route: product_routes_1.productRoutes,
    },
    {
        path: "/categories",
        route: category_routes_1.categoryRoutes,
    },
    {
        path: "/brands",
        route: brand_routes_1.brandRoutes,
    },
    {
        path: "/payment",
        route: payment_routes_1.paymentRoutes,
    },
    {
        path: "/cart",
        route: cart_routes_1.cartRoutes,
    },
    {
        path: "/order",
        route: order_routes_1.orderRoutes,
    },
    {
        path: "/reviews",
        route: review_routes_1.reviewRoutes,
    },
    {
        path: "/wishlist",
        route: wishlist_routes_1.wishlistRoutes,
    },
    {
        path: "/banners",
        route: banner_routes_1.bannerRoutes,
    },
    {
        path: "/discounts",
        route: discount_routes_1.discountRoutes,
    },
];
moduleRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
