import { Router } from "express";
import authRouter from "./routes/auth.routes.js";

const apiRouter: Router = Router();

// auth routes
apiRouter.use("/auth", authRouter);

export default apiRouter;