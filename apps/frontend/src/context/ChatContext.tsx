"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export type Message = {
    content: string;
    role: string;
}

type ChatContext = {
    messages: Message[];
    setMessages: Dispatch<SetStateAction<Message[]>>;
    initialMessage: Message;
    setInitialMessage: Dispatch<SetStateAction<Message>>;
}


const chatContext = createContext<ChatContext | null>(null);

export function ChatContextProvider ({children}: {children: ReactNode}) {

    const [initialMessage, setInitialMessage] = useState<Message>({content: "", role: ""});
    const [messages, setMessages] = useState<Message[]>([]);

    return (
        <chatContext.Provider value={{messages, setMessages, initialMessage, setInitialMessage}}>
            {
                children
            }
        </chatContext.Provider>
    );
}

export function useChatContext () {
    const ctx = useContext(chatContext);
    if (!ctx) throw new Error("ChatContext not found!");
    return ctx;
}