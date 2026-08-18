"use client";

import PromptInput from "@/src/components/prompt-input";
import { RefObject, useState } from "react";

export type Message = {
  content: string;
  role: string;
};

export default function Chat({chatRef}: {chatRef: RefObject<HTMLTableSectionElement|null>}) {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <section ref={chatRef} className="border-2 border-red-500 chat-cmp-custom flex h-full w-full p-4 flex-col">
      {/* Header */}
      {/* <header className="shrink-0 border-b border-black/[0.06] px-5 py-4">
                <p className="text-[14px] font-medium text-neutral-900">Assistant</p>
            </header> */}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-6 border-2 border-green-400">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div className="my-12" key={msg.content + Math.random().toFixed(4)}>
              {msg.content}
            </div>
          ))
        ) : (
          <p>Start chat...</p>
        )}
      </div>

      {/* Composer */}
      <PromptInput setMessages={setMessages} />
    </section>
  );
}
