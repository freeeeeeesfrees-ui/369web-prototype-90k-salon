type Props = {
  role: "user" | "bot";
  text: string;
};

export function MessageBubble({ role, text }: Props) {
  if (role === "user") {
    return (
      <div className="flex justify-end mb-3">
        <div className="max-w-[75%] bg-brand-primary text-white px-4 py-2 rounded-2xl rounded-tr-sm">
          <p className="text-sm whitespace-pre-line">{text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start mb-3">
      <div className="max-w-[85%] bg-white border border-surface-border text-ink-main px-4 py-2 rounded-2xl rounded-tl-sm">
        <p className="text-sm whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}
