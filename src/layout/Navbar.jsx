import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 pb-4 md:pb-0">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="items-center gap-1 rounded-full glass px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* cta button */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="cursor-pointer p-2 text-foreground md:hidden"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="animate-fade-in glass-strong md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="py-2 text-lg text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}

            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
