import { motion } from "motion/react";
import { MapPin, Phone, Clock, Sparkles, MessageSquare } from "lucide-react";
import { DISPLAY_PHONE, ADDRESS, WHATSAPP_LINKS } from "../data";

export default function LocationMap() {
  // Use the exact full address with 23/5, Sadhanathapuram, as requested by the user
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-24 bg-[#FFF8F6] relative overflow-hidden">
      {/* Visual ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5A4C7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E75480]/10 text-[#E75480] font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Our Location</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2B2B2B]">
            Visit Us in Chennai
          </h2>
          
          <p className="font-sans text-base text-[#2B2B2B]/70 mt-4 leading-relaxed">
            New Fashion Beauty Parlour is situated in Chennai, Tamil Nadu. Find us on the map below or contact us to book your premium slot!
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Map Embed Column */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border border-[#F5A4C7]/30 bg-white relative">
            <iframe
              src={mapEmbedUrl}
              title="New Fashion Beauty Parlour Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1] contrast-[1.05]"
            />
          </div>

          {/* Details Sidebar Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Address Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5A4C7]/20 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#E75480]/10 text-[#E75480] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2B2B2B]">Our Location</h3>
                  <p className="font-sans text-sm text-[#2B2B2B]/75 mt-2 leading-relaxed">
                    <strong>New Fashion Beauty Parlour</strong><br />
                    {ADDRESS}
                  </p>
                  <span className="inline-block mt-3 px-3 py-1 rounded bg-[#FFF8F6] border border-[#F5A4C7]/20 font-sans text-xs text-[#E75480] font-semibold">
                    📍 Chennai Hub Specialist
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F5A4C7]/20 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#E75480]/10 text-[#E75480] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2B2B2B]">Call & Book</h3>
                  <p className="font-sans text-sm text-[#2B2B2B]/75 mt-2 leading-relaxed">
                    Speak directly to our specialist to customize your package or discuss wedding designs.
                  </p>
                  <a
                    href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
                    className="inline-block font-sans text-xl font-bold text-[#E75480] hover:text-[#B76E79] transition-colors mt-3"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Scheduling and warning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-tr from-[#2B2B2B] to-[#404040] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/5"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/10 text-[#F5A4C7] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">Sunday Slots Only</h3>
                  <p className="font-sans text-sm text-white/70 mt-2 leading-relaxed">
                    Our salon functions <span className="text-[#F5A4C7] font-semibold">Exclusively on Sundays</span> by appointment. Limited slots. Please book in advance to secure your session.
                  </p>
                  
                  {/* WhatsApp instant CTA */}
                  <a
                    href={WHATSAPP_LINKS.general}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white font-sans text-xs font-bold shadow-md transition-all mt-4 border border-[#D4AF37]/30"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Instant Booking Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
