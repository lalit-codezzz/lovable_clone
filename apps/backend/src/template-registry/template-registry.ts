
export type Templates = "react-vite-ts";

type TemplateRegistry = Record<Templates, any>;

export const templateRegistry: TemplateRegistry = {
    "react-vite-ts": {
        framework: "react",
        commands: {
            init: "npm create-vite@latest",
            dev: "npm run dev",
        }
    }
};