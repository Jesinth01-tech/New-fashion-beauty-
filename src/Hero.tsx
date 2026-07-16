import { motion } from "motion/react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { WHATSAPP_LINKS } from "../data";
import heroBgImg from "../assets/images/hero_background_1783499901997.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF8F6] pt-16"
    >
      {/* Background Image with Rich Dark Pink Overlay */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <img
          src={heroBgImg}
          alt="New Fashion Beauty Parlour Luxury Interior"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.70] contrast-[1.15] saturate-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlay to ensure text readability while keeping the image very bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/10 md:bg-gradient-to-b md:from-black/50 md:via-black/10 md:to-black/25" />
        {/* Confined bottom blend gradient to keep the center of the image beautifully clear and crisp */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FFF8F6] to-transparent" />
      </div>

      {/* Floating 3D Ambient Orbs (Pink, Rose Gold & Gold) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Orb 1: Primary Pink */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#E75480]/30 to-[#F5A4C7]/20 blur-2xl"
        />

        {/* Orb 2: Rose Gold */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-[#B76E79]/20 to-[#E75480]/10 blur-3xl"
        />

        {/* Orb 3: Gold Accent */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[40%] right-[25%] w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-[#B76E79]/10 blur-xl"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white flex flex-col items-center text-center">
        {/* Top welcome chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F5A4C7]/30 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E75480] animate-pulse" />
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#F5A4C7]">
            Est. in Chennai, Tamil Nadu
          </span>
        </motion.div>

        {/* Main Heading with Playfair Display typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none max-w-5xl tracking-tight text-white drop-shadow-2xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FF69B4] to-[#E75480] relative">
            New Fashion
          </span>{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5A4C7] to-[#B76E79]">
            Beauty Parlour
          </span>
        </motion.h1>

        {/* Tagline & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mt-6"
        >
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#F5A4C7] font-semibold tracking-wide drop-shadow mb-4">
            ✨ Premium Beauty & Bridal Excellence ✨
          </p>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#FFF8F6]/90 max-w-2xl font-light leading-relaxed drop-shadow">
            World-class grooming, styling, hygienic ear piercing, wart skin removal & rental bridal jewellery for every occasion.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full sm:w-auto"
        >
          {/* Primary Button */}
          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white font-sans font-bold text-base shadow-xl hover:shadow-[#E75480]/30 hover:scale-[1.03] transition-all border border-[#D4AF37]/40"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Book Appointment</span>
          </a>

          {/* Secondary Button */}
          <a
            href="#services"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-base border border-white/30 backdrop-blur-sm hover:scale-[1.03] transition-all"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-[#F5A4C7]" />
          </a>
        </motion.div>

        {/* Stats Section banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-[#F5A4C7] drop-shadow">100%</p>
            <p className="font-sans text-xs uppercase tracking-widest text-white/70 mt-1">Hygienic Care</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-[#D4AF37] drop-shadow">Chennai</p>
            <p className="font-sans text-xs uppercase tracking-widest text-white/70 mt-1">Beauty Leader</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-[#F5A4C7] drop-shadow">Mon-Sat</p>
            <p className="font-sans text-xs uppercase tracking-widest text-white/70 mt-1">10 AM - 8:30 PM</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-[#D4AF37] drop-shadow">Elite</p>
            <p className="font-sans text-xs uppercase tracking-widest text-white/70 mt-1">Bridal Jewellery</p>
          </div>
        </motion.div>
      </div>

      {/* Arrow Down decoration */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        >
          <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
          <svg
            className="w-5 h-5 stroke-current fill-none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
