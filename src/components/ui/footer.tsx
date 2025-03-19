"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LogoSvg } from "./logo-svg";
import { usePathname } from "next/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const pathname = usePathname();

  // Función para manejar el scroll suave hacia los anclajes
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();

    // Solo scroll si estamos en la página principal
    if (pathname === '/') {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a la página principal con hash
      window.location.href = `/#${anchorId}`;
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start">
              <LogoSvg width={50} height={50} variant="light" className="scale-125" />
            </div>
            <p className="text-white/80 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'servicios')}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#proyectos"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'proyectos')}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#sobre-nosotros"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'sobre-nosotros')}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'servicios')}
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'servicios')}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'servicios')}
                >
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'servicios')}
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => handleAnchorClick(e, 'servicios')}
                >
                  Digital Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Information */}
          <div className="space-y-4 lg:col-span-3 flex flex-col lg:flex-row lg:justify-between items-center border-t border-white/20 pt-8 mt-8">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6 lg:mb-0">
              <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <span className="text-white/70">+1 (786) 480-3088</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <span className="text-white/70">info@swiftzone.com</span>
              </div>
              <div>
                <LanguageSwitcher
                  variant="full"
                  className="text-white bg-primary-foreground/10 hover:bg-white/20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {currentYear} SwiftZone. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
