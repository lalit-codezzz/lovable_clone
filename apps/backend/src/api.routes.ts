import { Router } from "express";
import authRouter from "./routes/auth.routes.js";
import testRouter from "./routes/test.routes.js";

const apiRouter: Router = Router();

// auth routes
apiRouter.use("/auth", authRouter);
apiRouter.use("/test", testRouter);

export default apiRouter;