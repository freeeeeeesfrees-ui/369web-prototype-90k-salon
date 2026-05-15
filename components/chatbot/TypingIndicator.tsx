export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="bg-white border border-surface-border px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
        <span className="w-2 h-2 bg-ink-sub rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-ink-sub rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-ink-sub rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
