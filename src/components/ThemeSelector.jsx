import { useEffect, useRef, useState } from "react";

const themes = [
  { value: "teal", color: "#20b2a6" },
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

  const [currentTheme, setCurrentTheme] = useState("teal");

  const changeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;

    setOpen(false);
  };

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
          className="absolute top-12 z-10 grid w-full min-w-20 animate-fade-in grid-cols-2 rounded-xl glass border p-1 md:min-w-40 md:grid-cols-4"
        >
          {themes.map(
            (theme) =>
              theme.value !== currentTheme && (
                <li
                  key={theme.value}
                  role="option"
                  onClick={() => changeTheme(theme.value)}
                  className={`m-1 h-6 w-6 cursor-pointer rounded-full`}
                  style={{ backgroundColor: `${theme.color}`, opacity: "80%" }}
                ></li>
              ),
          )}
        </ul>
      )}
    </div>
  );
}

export default ThemeSelector;
