"use client";

import { useEffect, useRef, useState, KeyboardEvent, FormEvent } from "react";
import { matchQA } from "@/lib/chatbot/matcher";
import { INITIAL_BOT_MESSAGE, QUICK_REPLIES } from "@/lib/chatbot/qa";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ChatWindow({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", role: "bot", text: INITIAL_BOT_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 自動スクロール
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // 開いたら入力欄にフォーカス
  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [open]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: `u_${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    // 600ms 遅延で応答（"考えている"演出）
    setTimeout(() => {
      const answer = matchQA(trimmed);
      const botMsg: Message = {
        id: `b_${Date.now()}`,
        role: "bot",
        text: answer,
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="チャットサポート"
      className="fixed inset-0 md:inset-auto md:bottom-6 md:right-6 z-40 md:w-[380px] md:h-[560px] bg-white md:rounded-lg shadow-2xl flex flex-col"
      style={{ animation: "chatSlideUp 200ms ease-out" }}
    >
      <style jsx>{`
        @keyframes chatSlideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* ヘッダー */}
      <header className="bg-brand-primary text-white px-4 py-3 flex items-center justify-between md:rounded-t-lg">
        <div>
          <p className="font-medium">Lumière サポート</p>
          <p className="text-xs text-white/70">AIが24時間ご質問にお答えします</p>
        </div>
        <button
          onClick={onClose}
          aria-label="チャットを閉じる"
          className="p-2 hover:bg-white/10 rounded transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      </header>

      {/* メッセージエリア */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 bg-surface-alt">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role} text={msg.text} />
        ))}
        {typing && <TypingIndicator />}
        {messages.length === 1 && !typing && (
          <QuickReplies items={QUICK_REPLIES} onSelect={sendMessage} />
        )}
      </div>

      {/* 入力エリア */}
      <form onSubmit={handleSubmit} className="border-t border-surface-border p-3 flex gap-2">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ご質問を入力してください..."
          rows={1}
          className="flex-1 resize-none px-3 py-2 border border-surface-border rounded focus:border-brand-primary focus:outline-none text-sm"
        />
        <button
          type="submit"
          aria-label="送信"
          className="bg-brand-primary text-white p-2 rounded hover:bg-brand-primary-light transition-colors disabled:opacity-50"
          disabled={!input.trim() || typing}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}
