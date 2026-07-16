import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Play, Pause, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = PORTFOLIO_DATA.length;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay Timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 4000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeIndex]);

  // Handle dot clicks
  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-[#2B2B2B] text-white relative overflow-hidden"
    >
      {/* 3D Grid background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E7548008_1px,transparent_1px),linear-gradient(to_bottom,#E7548008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Background orbs */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-[#E75480]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#F5A4C7]/20 text-[#F5A4C7] font-sans text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
            <span>Visual Transformations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Our Artistry Gallery
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base text-white/70 mt-4"
          >
            Transformations that speak elegance. Slide through our hand-picked portfolio of bridal styles, precision piercings, and skincare triumphs.
          </motion.p>
        </div>

        {/* 3D PERSPECTIVE SLIDER STAGE */}
        <div 
          className="relative h-[480px] sm:h-[550px] md:h-[580px] flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main 3D Container with Perspective */}
          <div 
            className="relative w-full max-w-5xl h-[380px] sm:h-[450px] flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {PORTFOLIO_DATA.map((slide, index) => {
              // Calculate index-based relative offset
              let offset = index - activeIndex;
              if (offset < -totalSlides / 2) offset += totalSlides;
              if (offset > totalSlides / 2) offset -= totalSlides;

              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = absOffset <= 2; // Show active + 2 slides on each side

              if (!isVisible) return null;

              // 3D positioning coordinates with dynamic scaling based on viewport width
              const rotateY = offset * (windowWidth < 640 ? -15 : -25); // 3D rotation angle
              const scale = isActive ? 1 : windowWidth < 640 ? 1 - absOffset * 0.22 : 1 - absOffset * 0.15; // responsive scaling
              const spacing = windowWidth < 480 ? 110 : windowWidth < 640 ? 140 : windowWidth < 768 ? 180 : windowWidth < 1024 ? 220 : 260;
              const translateX = offset * spacing; // responsive offset placement
              const zIndex = 100 - absOffset;
              const opacity = isActive ? 1 : windowWidth < 640 ? 1 - absOffset * 0.55 : 1 - absOffset * 0.45;

              return (
                <motion.div
                  key={slide.id}
                  animate={{
                    x: translateX,
                    scale: scale,
                    rotateY: rotateY,
                    zIndex: zIndex,
                    opacity: opacity
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  onClick={() => {
                    if (!isActive) goToSlide(index);
                  }}
                  className={`absolute w-[240px] sm:w-[350px] md:w-[420px] h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-pointer border ${
                    isActive
                      ? "border-[#E75480]/50 shadow-[#E75480]/20"
                      : "border-white/10"
                  }`}
                  style={{
                    transformOrigin: "center center"
                  }}
                >
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover pointer-events-none filter brightness-95"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glass Card Details Overlay on bottom */}
                  <div className={`absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E75480]" />
                      {slide.title}
                    </h3>
                    <p className="font-sans text-xs text-white/80 mt-1 line-clamp-2">
                      {slide.description}
                    </p>
                  </div>

                  {/* Non-active overlay (darkens out side slides slightly) */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Overlay Controls */}
          <div className="absolute inset-x-0 bottom-2 flex items-center justify-between px-4 sm:px-12 max-w-4xl mx-auto z-30">
            {/* Arrow Left */}
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white flex items-center justify-center hover:scale-105 active:scale-95 shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center hover:scale-105 transition-all"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            {/* Arrow Right */}
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white flex items-center justify-center hover:scale-105 active:scale-95 shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center gap-2.5 mt-4 z-30 relative">
          {PORTFOLIO_DATA.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative py-2 focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 h-2 bg-gradient-to-r from-[#E75480] to-[#B76E79]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
