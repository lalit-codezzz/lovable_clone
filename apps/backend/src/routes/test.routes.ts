
import { Router } from "express";
import { CreateProjectTool } from "../tools/create-project-tool.js";

const testRouter: Router = Router();

testRouter.post("", async (req, res) => {
    const cpt = new CreateProjectTool();
    console.log(cpt.name);
    const ress = await cpt.execute({templateName: "react-vite-ts"});
    return res.json({
        out: ress,
    })
});

export default testRouter;