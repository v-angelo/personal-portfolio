const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          className="hover:text-primary text-xl font-bold tracking-tight"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="flex items-center gap-1">
          <div className="glass">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
