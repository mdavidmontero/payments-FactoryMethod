import { Router } from "express";
import { PaymentRoutes } from "./payments/route";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/payments", PaymentRoutes.routes);
    return router;
  }
}
