import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, GraduationCap, ArrowRight, ChevronDown, CheckCircle2, Award } from "lucide-react";
import { TRAINING_DATA, WHATSAPP_LINKS } from "../data";
import sareeDrapedPeachImg from "../assets/images/saree_draped_peach_1783745537138.jpg";
import sareeFoldedBlueImg from "../assets/images/saree_professional_box_folding_1783869155869.jpg";
import makeupTrainingModelImg from "../assets/images/makeup_training_model_1783745565997.jpg";
import sareePleatsCloseupImg from "../assets/images/saree_pleats_closeup_1783746008746.jpg";

export default function Training() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="training" className="py-24 bg-[#FFF8F6] relative overflow-hidden">
      {/* Soft overlay patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#B76E79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: 4-Panel Grid Image Showcase with overlay stats */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 h-[520px] relative"
            >
              {/* Image 1: Draped Saree */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F5A4C7]/20 group h-full">
                <img
                  src={sareeDrapedPeachImg}
                  alt="Professional Saree Prepleating and Draping on Mannequin"
                  className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#E75480] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Saree Draping
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white mt-1 leading-snug">
                    Under-Pleat Puffing
                  </h4>
                </div>
              </div>

              {/* Image 2: Aligned Pleats (from uploaded reference image) */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F5A4C7]/20 group h-full">
                <img
                  src={sareePleatsCloseupImg}
                  alt="Perfect Uniform Aligned Saree Pleats Close-up"
                  className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#D4AF37] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Pleat Alignment
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white mt-1 leading-snug">
                    Perfect Vertical Pleats
                  </h4>
                </div>
              </div>

              {/* Image 3: Folded Cyan Saree */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F5A4C7]/20 group h-full">
                <img
                  src={sareeFoldedBlueImg}
                  alt="Neatly Folded Prepleated Cyan Blue Silk Saree"
                  className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#2B6CB0] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Prepleating
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white mt-1 leading-snug">
                    Box Folding
                  </h4>
                </div>
              </div>

              {/* Image 4: Bridal Makeup Artist applying makeup */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F5A4C7]/20 group h-full">
                <img
                  src={makeupTrainingModelImg}
                  alt="Bridal Makeup Artistry Training"
                  className="w-full h-full object-cover object-center filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#E75480] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Bridal Makeup
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white mt-1 leading-snug">
                    New Fashion Parlour
                  </h4>
                </div>
              </div>

              {/* Floating Badge (Centered at top of grid) */}
              <div className="absolute -top-3 left-4 bg-white/95 backdrop-blur-md text-[#2B2B2B] px-3.5 py-1.5 rounded-xl shadow-md border border-[#F5A4C7]/30 flex items-center gap-1.5 z-20">
                <GraduationCap className="w-4 h-4 text-[#E75480]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#2B2B2B]">
                  Govt Certified Syllabus
                </span>
              </div>
            </motion.div>

            {/* Floating Stats below grid to maintain readability without overlapping images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-[#2B2B2B] bg-white backdrop-blur-md p-5 rounded-2xl border border-[#F5A4C7]/20 shadow-lg"
            >
              <p className="font-serif italic text-sm text-[#2B2B2B]/80 leading-relaxed">
                "Empowering 500+ successful beauty professionals across Tamil Nadu at New Fashion Beauty Parlour."
              </p>
              <div className="mt-3.5 flex gap-6 border-t border-[#F5A4C7]/10 pt-3">
                <div>
                  <p className="font-bold font-serif text-lg text-[#E75480]">100%</p>
                  <p className="text-[9px] uppercase text-[#2B2B2B]/60 font-sans tracking-widest font-bold">Hands-on practice</p>
                </div>
                <div className="w-px bg-[#F5A4C7]/20" />
                <div>
                  <p className="font-bold font-serif text-lg text-[#D4AF37]">Weekend</p>
                  <p className="text-[9px] uppercase text-[#2B2B2B]/60 font-sans tracking-widest font-bold">Sunday Special Batches</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Interactive Curriculum Accordion */}
          <div className="lg:col-span-6">
            {/* Header Content */}
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-sans text-xs font-bold uppercase tracking-widest text-[#E75480] block mb-2"
              >
                Learn From The Experts
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="font-serif font-bold text-3xl sm:text-4xl text-[#2B2B2B] tracking-tight"
              >
                Beautician, Bridal & Saree Prepleating Training
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="font-sans text-base text-[#2B2B2B]/75 mt-4 leading-relaxed"
              >
                Step into a high-earning beauty and styling career with Chennai's most comprehensive hands-on training courses. Master the art of professional beauty parlour operations, flawless bridal makeover design, and saree prepleating artistry.
              </motion.p>

              {/* Professional Certification Guarantee Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/50 flex items-start gap-3.5 shadow-sm"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-amber-900">
                    Professional Training & Certification Guaranteed
                  </h4>
                  <p className="font-sans text-xs text-amber-800/80 mt-1 leading-relaxed">
                    Receive a prestigious, industry-recognized course completion certificate upon successfully finishing your practical training. Perfect for launching your independent career or starting a high-end beauty parlour business!
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Courses Accordion List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              {TRAINING_DATA.map((program, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <div
                    key={program.id}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isExpanded
                        ? "bg-white border-[#E75480]/30 shadow-lg"
                        : "bg-white/50 border-[#F5A4C7]/20 hover:bg-white"
                    }`}
                  >
                    {/* Header Trigger */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    >
                      <div className="flex gap-4 items-center">
                        {/* Circle Counter */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-sm ${
                          isExpanded 
                            ? "bg-[#E75480] text-white shadow-md" 
                            : "bg-[#FFF8F6] text-[#E75480] border border-[#F5A4C7]/30"
                        }`}>
                          {index + 1}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#2B2B2B]">
                          {program.title}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#2B2B2B]/40 transition-transform duration-300 ${
                        isExpanded ? "transform rotate-180 text-[#E75480]" : ""
                      }`} />
                    </button>

                    {/* Expandable Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 border-t border-[#F5A4C7]/10 ml-12">
                            <p className="font-sans text-sm text-[#2B2B2B]/70 leading-relaxed mb-4">
                              {program.description}
                            </p>
                            
                            {/* Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {program.details.map((detail, dIdx) => (
                                <div key={dIdx} className="flex gap-2 items-center">
                                  <CheckCircle2 className="w-4 h-4 text-[#E75480] shrink-0" />
                                  <span className="font-sans text-xs text-[#2B2B2B]/85">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
            >
              <a
                href={WHATSAPP_LINKS.training}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white font-sans font-bold text-sm shadow-lg hover:shadow-[#E75480]/20 flex items-center gap-2 hover:scale-[1.02] transition-all w-full sm:w-auto justify-center border border-[#D4AF37]/30"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Enquire About Classes</span>
              </a>
              <span className="font-sans text-xs text-[#2B2B2B]/50 font-medium">
                *Flexible installment plans available.
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
