"use client";

import Chat from "@/src/components/chat";
import FileEditor from "@/src/components/file-editor";
import { useChatContext } from "@/src/context/ChatContext";
import { useParams } from "next/navigation"

export default function Project () {
    /**
     * here {projectId} is coming in parameter of the URL
     * Ex: http://localhost:3000/project/{projectId}
     */
    const {projectId} = useParams();

    /**
     * Here in the context I am storing the Initial Chat Message of the user
     * Ex: Build a gym website
     */
    const chatContext = useChatContext();


    return <div className="border-4 border-blue-600 h-full flex">

        <Chat />

        <FileEditor />

        {/* Project - {projectId}
        Initial message - {chatContext.initialMessage.content} */}
    </div>
}