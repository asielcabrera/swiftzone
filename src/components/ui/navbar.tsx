"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/context/language-context";

interface NavLink {
  key: string;
  href: string;
  isAnchor: boolean;
  anchorId?: string;
}

const navLinksLeft: NavLink[] = [
  { key: "nav.about", href: "/#sobre-nosotros", isAnchor: true, anchorId: "sobre-nosotros" },
  { key: "nav.services", href: "/#servicios", isAnchor: true, anchorId: "servicios" },
];

const navLinksRight: NavLink[] = [
  { key: "nav.blog", href: "/blog", isAnchor: false },
  { key: "nav.contact", href: "/#contacto", isAnchor: true, anchorId: "contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if we're on the home page and not scrolled
  const isHomeAndNotScrolled = mounted && !scrolled && pathname === "/";

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string | undefined) => {
    if (!anchorId) return;

    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    // Only scroll if we're on the home page
    if (pathname === '/') {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash
      window.location.href = `/#${anchorId}`;
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-secondary/95 backdrop-blur-md py-3 shadow-sm"
          : "bg-secondary py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinksLeft.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : undefined}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Center Logo for Desktop */}
          <div className="hidden md:flex flex-shrink-0 justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Logo variant="dark" withBackground={false} className="scale-150" />
            </Link>
          </div>

          {/* Logo for Mobile */}
          <div className="md:hidden flex items-center">
            <Link href="/" className="flex items-center">
              <Logo variant="dark" withBackground={false} className="scale-125" />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinksRight.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => link.isAnchor ? handleAnchorClick(e, link.anchorId) : undefined}
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            <LanguageSwitcher
              variant="minimal"
              className="text-primary hover:text-primary/80"
            />
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher
              variant="minimal"
              className="text-primary"
            />
            <button
              type="button"
              className="focus:outline-none text-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-secondary md:hidden transition-transform duration-300 ease-in-out pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <nav className="flex flex-col space-y-6 items-center">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  if (link.isAnchor) {
                    handleAnchorClick(e, link.anchorId);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            <LanguageSwitcher
              variant="full"
              className="mt-4 text-primary bg-white/10 hover:bg-white/20"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
