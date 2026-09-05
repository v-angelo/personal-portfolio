import { Button } from "@/components/Button";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="hover:text-primary text-xl font-bold tracking-tight"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="glass items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground hover:bg-surface rounded-full px-4 py-2 text-sm"
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
          className="text-foreground p-2 md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="glass-strong md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground py-2 text-lg"
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
