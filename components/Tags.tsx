"use client";

function Tag({ name }: { name: string }) {
  const key = name.toLowerCase().replace(/\s+/g, "-");

  function highlight() {
    document.querySelectorAll(`[data-tag="${key}"]`).forEach((el) => {
      el.classList.add("tag-glow");
    });
  }

  function unhighlight() {
    document.querySelectorAll(`[data-tag="${key}"]`).forEach((el) => {
      el.classList.remove("tag-glow");
    });
  }

  return (
    <span
      data-tag={key}
      onMouseEnter={highlight}
      onMouseLeave={unhighlight}
      className="text-[10px] px-1.5 py-0.5 bg-paper-dark text-ink-muted rounded cursor-default transition-colors"
    >
      {name}
    </span>
  );
}

export default function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((name) => (
        <Tag key={name} name={name} />
      ))}
    </div>
  );
}
