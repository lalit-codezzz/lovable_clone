"use client";

import { useRef } from "react";
import { BsArrowUp, BsPaperclip } from "react-icons/bs";
import { useChatContext } from "../context/ChatContext";
import { useRouter } from "next/navigation";

export default function PromptInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContext = useChatContext();
  const router = useRouter();

  const sendButtonHandler = () => {
    const textareaElement = textareaRef.current;
    if (!textareaElement) return;
    const value = textareaElement.value;
    if (!value) return;

    const msg = {
      content: value,
      role: "user",
    };
    chatContext.setInitialMessage(msg);
    textareaElement.value = "";
    const projectId = crypto.randomUUID();
    router.replace(`project/${projectId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendButtonHandler();
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-2 focus-within:border-[#5EEAD4]/40 transition-colors shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
      <textarea
        ref={textareaRef}
        rows={3}
        onKeyDown={handleKeyDown}
        className="w-full bg-transparent resize-none outline-none px-3 pt-2 text-[15px] text-white/90 placeholder:text-white/30"
        placeholder="Command and create..."
      />
      <div className="flex items-center justify-between px-2 pb-1">
        <button className="flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-md border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 transition-colors">
          <BsPaperclip size={12} />
          Attach
        </button>
        <button
          onClick={sendButtonHandler}
          className="w-8 h-8 rounded-lg bg-[#5EEAD4] hover:bg-[#7FF3DE] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Send"
        >
          <BsArrowUp size={16} color="#0B0C0E" />
        </button>
      </div>
    </div>
  );
}