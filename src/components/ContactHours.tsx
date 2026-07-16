import { motion } from "motion/react";
import { Clock, Phone, MessageSquare, AlertCircle, CalendarRange } from "lucide-react";
import { DISPLAY_PHONE, WHATSAPP_LINKS } from "../data";

export default function ContactHours() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#2B2B2B] via-[#1E1E1E] to-[#E75480]/25 text-white relative overflow-hidden border-t border-[#F5A4C7]/10">
      
      {/* Visual background textures */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(231,84,128,0.15),transparent_40%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(183,110,121,0.1),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column - Hours Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative backdrop-blur-md"
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E75480]/20 text-[#F5A4C7] font-sans text-xs font-bold uppercase tracking-wider mb-6 border border-[#E75480]/30">
                <CalendarRange className="w-3.5 h-3.5" />
                <span>Sunday Special Service</span>
              </div>

              <h3 className="font-serif font-bold text-3xl text-white mb-2">
                Appointment Schedule
              </h3>
              
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-8">
                To maintain the highest standards of individual care and beauty, our salon is open Monday to Saturday, with exclusive Sunday bookings available by prior appointment.
              </p>

              {/* Hours Rows */}
              <div className="space-y-4">
                {/* Mon - Sat */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#E75480]/20 to-transparent border-l-4 border-[#E75480]">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#F5A4C7]" />
                    <span className="font-serif font-bold text-lg text-white">Monday to Saturday</span>
                  </div>
                  <div className="text-right">
                    <span className="font-sans font-bold text-base text-white">10:00 AM – 8:30 PM</span>
                    <p className="text-[10px] text-[#F5A4C7] font-bold uppercase tracking-wider mt-0.5">Regular Walk-ins & Bookings</p>
                  </div>
                </div>

                {/* Sunday */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border-l-4 border-[#D4AF37] shadow-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-serif font-bold text-lg text-white">Sunday</span>
                  </div>
                  <div className="text-right">
                    <span className="font-sans font-bold text-base text-white">Appointment Only</span>
                    <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mt-0.5">Pre-booked Bridal & Special Events</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Notice Indicator */}
            <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 flex gap-3 items-center">
              <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
              <p className="font-sans text-xs text-[#D4AF37] font-bold uppercase tracking-widest leading-relaxed">
                Open Mon-Sat 10 AM - 8:30 PM • Sunday Appointment Only
              </p>
            </div>
          </motion.div>

          {/* Right Column - Quick Contact Form/Action cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Header details */}
            <div className="p-2">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#F5A4C7]">
                Connect Instantly
              </span>
              <h3 className="font-serif font-bold text-3xl text-white mt-1">
                Get In Touch
              </h3>
              <p className="font-sans text-base text-white/70 mt-3 leading-relaxed">
                Ready to transform your look or master bridal beauty techniques? Contact us today to secure your custom slot. We are ready to help!
              </p>
            </div>

            {/* Micro Details Cards list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Phone info card */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <span className="text-2xl block mb-2">📱</span>
                <h4 className="font-serif text-sm font-bold text-white">Direct Phone</h4>
                <p className="font-sans text-xs text-white/60 mt-1">{DISPLAY_PHONE}</p>
              </div>

              {/* Schedule info card */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <span className="text-2xl block mb-2">🕒</span>
                <h4 className="font-serif text-sm font-bold text-white">Regular Hours</h4>
                <p className="font-sans text-xs text-white/60 mt-1">Mon-Sat: 10 AM - 8:30 PM</p>
              </div>

              {/* WhatsApp chat card */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <span className="text-2xl block mb-2">💬</span>
                <h4 className="font-serif text-sm font-bold text-white">WhatsApp Care</h4>
                <p className="font-sans text-xs text-white/60 mt-1">Active Chat Help</p>
              </div>

            </div>

            {/* Giant Action Call Buttons Box */}
            <div className="p-6 bg-[#E75480]/15 rounded-3xl border border-[#E75480]/30 flex flex-col sm:flex-row gap-4 items-center">
              
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white font-sans font-bold text-base shadow-lg hover:shadow-[#E75480]/20 transition-all hover:scale-[1.02] w-full sm:w-auto shrink-0 border border-[#D4AF37]/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, "")}`}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-sans font-semibold text-base transition-all w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-[#F5A4C7]" />
                <span>Call {DISPLAY_PHONE}</span>
              </a>

            </div>

            {/* Note text */}
            <p className="font-sans text-[11px] text-white/50 text-center sm:text-left px-2">
              ⚠️ Note: Slots fill out quickly during peak wedding seasons. Booking at least 1-2 weeks in advance is highly recommended.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
