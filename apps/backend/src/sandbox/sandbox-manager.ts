import Docker from "dockerode";
import { Template } from "../template-registry/template-registry.js";
import { Sandbox } from "./sandbox.js";

const docker = new Docker({socketPath: "/home/lalit-upadhyay/.docker/desktop/docker.sock"});
/**
 * SandboxManager: It is a layer that handles container orchestration
 */
export class SandboxManager {

    constructor() {

    }

    /**
     * 
     * @param template 
     * @returns Sandbox - Returns a sandbox/container instance 
     */
    static async create (template: Template): Promise<Sandbox> {

        const containerName = "project-test-12345"

        const container = await docker.createContainer({
            Image: "ai-builder-base-img",
            
            name: containerName,
            Cmd: ["sleep", "infinity"],
            WorkingDir: "/workspace",
            ExposedPorts: {
                "5173/tcp": {}
            },
            HostConfig: {
                PortBindings: {
                    "5173/tcp": [
                        {
                            HostPort: "5173"
                        }
                    ]
                }
            }
        });
        await container.start();
        
        // console.log("template---- :", template);
        // await container.exec();
        // await container.exec(template.commands.dev);

        const sandbox: Sandbox = {
            id: container.id,
            name: containerName
        }

        return sandbox;
        
    }

    static destroy () {

    }
    
}