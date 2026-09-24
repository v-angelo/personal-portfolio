import { useEffect, useState } from "react";

const backgrounds = {
  violet: "/images/bg/bg-violet.jpg",
  ocean: "/images/bg/bg-ocean.jpg",
  teal: "/images/bg/bg-teal.jpg",
  emerald: "/images/bg/bg-emerald.jpg",
  amber: "/images/bg/bg-amber.jpg",
  oled: "/images/bg/bg-oled.jpg",
  crimson: "/images/bg/bg-crimson.jpg",
  gold: "/images/bg/bg-gold.jpg",
  cyberpunk: "/images/bg/bg-cyberpunk.jpg",
};

function BgSelector() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Object.entries(backgrounds).map(([name, src]) => (
        <img
          key={name}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${theme === name ? "opacity-40" : "opacity-0"} `}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
    </div>
  );
}

export default BgSelector;
