type Props = {
  items: string[];
  onSelect: (text: string) => void;
};

export function QuickReplies({ items, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-3 mb-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="text-xs bg-white border border-brand-primary text-brand-primary px-3 py-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
