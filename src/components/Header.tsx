import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import { WHATSAPP_LINKS, DISPLAY_PHONE, BRAND_LOGO } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Training", href: "#training" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-[#F5A4C7]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-2.5 group animate-fade-in">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-xl border-2 border-[#D4AF37]/70 group-hover:scale-105 transition-transform duration-300">
              <img
                src={BRAND_LOGO}
                alt="New Fashion Beauty Parlour Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-2xl sm:text-3xl md:text-4xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#E75480] via-[#C73860] to-[#D4AF37] tracking-tight group-hover:brightness-110 transition-all duration-300">
                New Fashion
              </span>
              <span className="font-sans text-xs sm:text-sm md:text-base tracking-widest text-[#D4AF37] font-extrabold uppercase mt-1 drop-shadow-sm">
                Beauty Parlour
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-[#2B2B2B]/80 hover:text-[#E75480] relative py-1 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E75480] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-[#2B2B2B]/75 hover:text-[#E75480] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B76E79]" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg border border-[#D4AF37]/30 hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#E75480] text-white hover:bg-[#E75480]/90 shadow-md transition-colors"
              aria-label="WhatsApp Booking"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#2B2B2B] hover:text-[#E75480] hover:bg-[#F5A4C7]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white border-b border-[#F5A4C7]/20 shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#2B2B2B]/80 hover:text-[#E75480] hover:bg-[#F5A4C7]/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#F5A4C7]/20 flex flex-col gap-3 px-4">
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 text-sm font-medium text-[#2B2B2B]/80 hover:text-[#E75480] py-2"
                >
                  <Phone className="w-5 h-5 text-[#B76E79]" />
                  <span>Call: {DISPLAY_PHONE}</span>
                </a>
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#E75480] text-white font-semibold shadow-md text-center transition-transform hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Book Appointment via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
