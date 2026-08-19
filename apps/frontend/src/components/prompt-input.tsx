"use client";

import { useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import { useChatContext } from "../context/ChatContext";
import { useRouter } from "next/navigation";

// {setMessages}: {setMessages: React.Dispatch<React.SetStateAction<Message[]>>}

export default function PromptInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const chatContext = useChatContext();
    const router = useRouter();

    const sendButtonHandler = () => {
        const textareaElement = textareaRef.current;
        if (!textareaElement) return; 
        const value = textareaElement.value;
        if (value === "" || value === null || value === undefined) return;
        const msg = {
            content: value,
            role: "user",
        }
        chatContext.setInitialMessage(msg);
        textareaElement.value = "";
        const projectId = crypto.randomUUID();
        router.replace(`project/${projectId}`);
    }

    return <div className="relative w-full mx-auto max-w-4xl p-4 border-2 border-black/50 rounded-sm transition-all duration-100 outline-black/60 focus-within:outline-6 focus">
        <textarea ref={textareaRef} className="outline-none w-full h-full p-4 placeholder:text-black" placeholder="Command and create...">
        </textarea>
        <button className="absolute bottom-4 right-4 flex items-center bg-black px-3 py-3 gap-2 rounded-sm cursor-pointer" onClick={sendButtonHandler}>
            <BsSendFill size={20} color="#fff" />
        </button>
    </div>
}

// onClick={sendButtonHandler}