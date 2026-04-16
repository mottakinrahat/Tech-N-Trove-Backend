import express from "express";
import { userRoutes } from "../modules/User/user.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { ManagerRoutes } from "../modules/manager/manager.routes";
import { buyerRoutes } from "../modules/buyer/buyer.routes";


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
  }
];
 

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
