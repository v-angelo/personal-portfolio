import { useEffect, useRef, useState } from "react";

const themes = [
  { value: "ocean", color: "#3b82f6" },
  { value: "violet", color: "#a78bfa" },
  { value: "emerald", color: "#10b981" },
  { value: "amber", color: "#f97316" },
  { value: "oled", color: "#ffffff" },
  { value: "crimson", color: "#ef4444" },
  { value: "gold", color: "#eab308" },
  { value: "cyberpunk", color: "#ff2d95" },
];

function ThemeSelector() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* theme button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="m-1 h-6 w-6 animate-pulse rounded-full bg-primary glow-border"
        aria-haspopup="listbox"
        aria-expanded={open}
      ></button>

      {/* dropdown list */}
      {open && (
        <ul
          role="listbox"
          className="absolute top-12 z-10 grid w-full min-w-40 animate-fade-in grid-cols-4 rounded-xl glass border p-1"
        >
          {themes.map((theme) => (
            <li
              key={theme.value}
              role="option"
              onClick={() => {
                setOpen(false);
              }}
              className={`m-1 h-6 w-6 cursor-pointer rounded-full`}
              style={{ backgroundColor: `${theme.color}` }}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThemeSelector;
