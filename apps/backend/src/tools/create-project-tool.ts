import { templateRegistry, Templates } from "../template-registry/template-registry.js";
import { Tool } from "./tool.js";

type CreateProjectToolArgsType = {
    templateName: Templates;
}

export class CreateProjectTool implements Tool {
    name: string;
    execute: (args: CreateProjectToolArgsType) => Promise<string>;

    constructor(name: string) {
        this.name = name;
        this.execute = async (args: CreateProjectToolArgsType) => {

            const templateName = args.templateName;

            let template;
            if (!templateRegistry[templateName]) {
                throw new Error(`Unknown template: ${templateName}`);
            }
            
            template = templateRegistry[templateName];

            console.log(template);

            return Promise.resolve("");
        }
    }
}