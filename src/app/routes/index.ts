import express from "express";
import { userRoutes } from "../modules/User/user.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { ManagerRoutes } from "../modules/manager/manager.routes";
import { buyerRoutes } from "../modules/buyer/buyer.routes";
import { addressRoutes } from "../modules/address/address.routes";
import { productRoutes } from "../modules/product/product.routes";
import { categoryRoutes } from "../modules/category/category.routes";
import { brandRoutes } from "../modules/brand/brand.routes";
import { paymentRoutes } from "../modules/payment/payment.routes";
import { cartRoutes } from "../modules/cart/cart.routes";
import { orderRoutes } from "../modules/order/order.routes";
import { reviewRoutes } from "../modules/review/review.routes";
import { wishlistRoutes } from "../modules/wishlist/wishlist.routes";


const router = express.Router();

const moduleRouter = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/admins",
    route: adminRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/manager",
    route: ManagerRoutes,
  },
  {
    path: "/buyer",
    route: buyerRoutes,
  },
  {
    path: "/addresses",
    route: addressRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/categories",
    route: categoryRoutes,
  },
  {
    path: "/brands",
    route: brandRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
  {
    path: "/cart",
    route: cartRoutes,
  },
  {
    path: "/order",
    route: orderRoutes,
  },
  {
    path: "/reviews",
    route: reviewRoutes,
  },
  {
    path: "/wishlist",
    route: wishlistRoutes,
  },
];
 

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
