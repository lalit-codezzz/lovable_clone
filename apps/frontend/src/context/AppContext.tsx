"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type AppContext = {
    isChatStarted: boolean;
    setIsChatStarted: Dispatch<SetStateAction<boolean>>;
}

const appContext = createContext<AppContext | null>(null);

export function AppContextProvider ({children}: {children: ReactNode}) {

    const [isChatStarted, setIsChatStarted] = useState<boolean>(false);

    return (
        <appContext.Provider value={{isChatStarted, setIsChatStarted}}>
            {
                children
            }
        </appContext.Provider>
    );
}

export function useAppContext () {
    const ctx = useContext(appContext);
    if (!ctx) throw new Error("AppContext not found!");
    return ctx;
}