"use client";

import Chat from "@/src/components/chat";
import FileEditor from "@/src/components/file-editor";
import { useAppContext } from "@/src/context/AppContext";
import { useEffect, useRef } from "react";

export default function Home() {
  const chatRef = useRef<HTMLTableSectionElement>(null);
  const appContext = useAppContext();

  useEffect(() => {
    const chatElement = chatRef.current;
    if (!chatElement) return;

    if (appContext.isChatStarted) {
      chatElement.classList.remove("w-full");
      chatElement.classList.remove("w-[25%]");
    }

  }, [
    appContext.isChatStarted
  ]);

  return (
    <div className="p-4 border border-black h-full flex">
      <Chat chatRef={chatRef} />
      {/* <FileEditor /> */}
    </div>
  );
}
