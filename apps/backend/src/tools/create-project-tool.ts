import { SandboxManager } from "../sandbox/sandbox-manager.js";
import { Sandbox } from "../sandbox/sandbox.js";
import { templateRegistry, TemplateNames } from "../template-registry/template-registry.js";
import { Tool } from "./tool.js";

type CreateProjectToolArgsType = {
    templateName: TemplateNames;
}

export class CreateProjectTool implements Tool {
    name = "create_project";
    execute: (args: CreateProjectToolArgsType) => Promise<string>;

    constructor() {
        this.execute = async (args: CreateProjectToolArgsType) => {

            const templateName = args.templateName;

            let template = templateRegistry.get(templateName);
            if (!template) {
                throw new Error(`Unknown template: ${templateName}`);
            }

            const sandbox: Sandbox = await SandboxManager.create(template);

            console.log(sandbox);

            return Promise.resolve("sandbox up & running!");
        }
    }
}