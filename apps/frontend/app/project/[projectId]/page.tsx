"use client";

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


    return <div>
        Project - {projectId}
        Initial message - {chatContext.initialMessage.content}
    </div>
}