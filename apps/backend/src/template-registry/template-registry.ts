
export type TemplateNames = "react-vite-ts";

export type Template = {commands: {init: string[]; install: string[]; dev: string[]}};

type TemplateRegistry = {
    templates: Record<TemplateNames, Template>;
    get: (templateName: TemplateNames) => Template;
};

export const templateRegistry: TemplateRegistry = {
    templates: {
        "react-vite-ts": {
            commands: {
                init: ["npm", "create", "vite@latest", ".", "--", "--template", "react-ts"],
                install: ["npm", "install"],
                dev: ["npm", "run", "dev", "--", "--host", "0.0.0.0"],
            }
        }
    },
    get: (templateName: TemplateNames) => {
        return templateRegistry.templates[templateName];
    },
};