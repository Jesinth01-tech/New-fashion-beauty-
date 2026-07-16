import { Youtube, Instagram, Facebook, Heart } from "lucide-react";
import { SOCIAL_LINKS, BRAND_LOGO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B2B2B] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative top pink border line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E75480] via-[#D4AF37] to-[#B76E79]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 group mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg border border-[#D4AF37]/40">
                <img
                  src={BRAND_LOGO}
                  alt="New Fashion Beauty Parlour Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight tracking-tight text-white group-hover:text-[#F5A4C7] transition-colors">
                  New Fashion
                </span>
                <span className="font-sans text-[10px] tracking-widest text-[#F5A4C7] font-semibold uppercase">
                  Beauty Parlour
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-white/70 max-w-sm leading-relaxed mb-6">
              Empowering confidence through premium styling, certified training courses, sterile ear piercing, pain-free wart removal, and luxury rental jewellery in Chennai, Tamil Nadu.
            </p>

            {/* Social Icons List */}
            <div className="flex gap-4">
              
              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all hover:scale-110 shadow-md"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* YouTube */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all hover:scale-110 shadow-md"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all hover:scale-110 shadow-md"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-white/5 pb-2 mb-4">
              Explore Parlour
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-sans text-sm text-white/70 hover:text-[#F5A4C7] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#services" className="font-sans text-sm text-white/70 hover:text-[#F5A4C7] transition-colors">
                  Our Services Menu
                </a>
              </li>
              <li>
                <a href="#portfolio" className="font-sans text-sm text-white/70 hover:text-[#F5A4C7] transition-colors">
                  Artistry Portfolio
                </a>
              </li>
              <li>
                <a href="#training" className="font-sans text-sm text-white/70 hover:text-[#F5A4C7] transition-colors">
                  Professional Classes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Quick View Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-white/5 pb-2 mb-4">
              Salon Specialties
            </h4>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li className="flex gap-2 items-start">
                <span className="text-[#F5A4C7]">✨</span>
                <span>Mon-Sat 10:00 AM - 8:30 PM & Sunday Appt Only</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#D4AF37]">👑</span>
                <span>Custom gold bridal jewellery consultation</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#F5A4C7]">🎓</span>
                <span>Certified curriculum for beauty aspirants</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#D4AF37]">🏥</span>
                <span>Sterile & safe clinical ear piercing & mole care</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {currentYear} New Fashion Beauty Parlour. All rights reserved.
          </p>
          
          <p className="font-sans text-[11px] text-white/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#E75480] fill-current" /> in Chennai, Tamil Nadu.
          </p>
        </div>

      </div>
    </footer>
  );
}
