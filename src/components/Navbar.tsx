import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS, BRAND } from "../utils/constants";

interface NavbarProps {
  activeSection: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0] dark:border-slate-800 py-3.5"
          : "bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-xs border-b border-[#E2E8F0]/70 dark:border-slate-800/60 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between"
        >
          {/* Logo Mark & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            id="navbar-brand-link"
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded-md p-1"
            aria-label="UMK - KADYOB Digital Creator Home"
          >
            {/* Minimal Geometric Logo Mark */}
            <div className="bg-[#2563EB] text-white font-bold px-3 py-1 rounded-sm text-lg sm:text-xl font-heading shadow-xs group-hover:bg-[#1D4ED8] transition-colors">
              UMK
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#64748B] dark:text-slate-400 uppercase leading-tight font-mono">
                Kadyob Digital Creator
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#64748B] dark:text-slate-300">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors duration-150 py-1 relative ${
                    isActive
                      ? "text-[#2563EB] font-semibold dark:text-blue-400"
                      : "hover:text-[#2563EB] dark:hover:text-blue-400 text-[#64748B] dark:text-slate-300"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] dark:bg-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Area (Theme toggle & CTA) */}
          <div className="hidden sm:flex items-center space-x-4">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              id="navbar-cta-button"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2 rounded-md text-sm font-semibold shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Right Controls (Toggle + Hamburger) */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle-button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[70px] bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 shadow-xl z-50 lg:hidden px-6 py-6"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      id={`mobile-nav-${link.id}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-semibold dark:bg-blue-950/50 dark:text-blue-400"
                          : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </a>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/30"
                  >
                    <span>Contact Me</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
