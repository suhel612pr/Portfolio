import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0b0b0c]/90 backdrop-blur border-b border-[#262629]" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-sm tracking-tight text-[#ece9e4] hover:text-[#c17a3d] transition-colors"
        >
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#9c9a96] hover:text-[#ece9e4] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex text-sm border border-[#262629] hover:border-[#c17a3d] hover:text-[#c17a3d] transition-colors px-4 py-2 rounded"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden text-[#ece9e4] p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0b0b0c] border-b border-[#262629] px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-[#ece9e4] border-b border-[#1a1a1d]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-4 block text-center border border-[#262629] px-4 py-3 rounded text-sm"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
