import express, {Express} from "express";
import apiRouter from "./api.routes.js";

const app: Express = express();

app.use(express.json());

// Routes
app.use("/api", apiRouter);


app.get("/health-check", (req, res) => {
    return res.json({success: true});
});

export default app;