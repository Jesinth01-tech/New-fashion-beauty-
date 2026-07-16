import { motion } from "motion/react";
import { Star, Quote, Sparkles } from "lucide-react";
import { REVIEWS_DATA } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#2B2B2B] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E75480]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F5A4C7] font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
            <span>Satisfied Clients</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Loved by Our Clients
          </h2>
          
          <p className="font-sans text-base text-white/70 mt-4 leading-relaxed">
            Real testimonials from our satisfied customers in Chennai. We hold ourselves to the absolute highest standard of beauty and client comfort.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review, index) => {
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 hover:border-[#E75480]/30 rounded-2xl p-6 sm:p-8 relative group transition-all duration-300 backdrop-blur-sm"
              >
                {/* Quote icon watermarked in corner */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#E75480]/10 transition-colors" />

                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-current text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
                  {/* Custom Avatar Gradient */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E75480] to-[#B76E79] flex items-center justify-center text-white font-sans font-bold text-sm shadow-md uppercase">
                    {review.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">
                      {review.name}
                    </h4>
                    <p className="font-sans text-[10px] text-[#F5A4C7] font-semibold tracking-wider uppercase mt-0.5">
                      Service: {review.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust badge */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 py-6 border-y border-white/5 text-center sm:text-left">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-[#D4AF37]" />
            ))}
          </div>
          <p className="font-sans text-sm text-white/80">
            Rated <span className="font-bold text-[#F5A4C7]">5.0 / 5.0 Stars</span> based on over 120+ organic local reviews.
          </p>
        </div>

      </div>
    </section>
  );
}
