/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Training from "./components/Training";
import Reviews from "./components/Reviews";
import LocationMap from "./components/LocationMap";
import ContactHours from "./components/ContactHours";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F6] text-[#2B2B2B] font-sans antialiased selection:bg-[#E75480] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Full-screen Hero Banner */}
        <Hero />

        {/* Dynamic Services Bento Grid */}
        <Services />

        {/* 3D Perspective Artistry Slider */}
        <Portfolio />

        {/* Academy & Expert Training Programs */}
        <Training />

        {/* Customer Testimonials Grid */}
        <Reviews />

        {/* Contact Schedule Card Grid */}
        <ContactHours />

        {/* Physical Map & Directions */}
        <LocationMap />
      </main>

      {/* Social Media & Quick Links Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Booking Access */}
      <WhatsAppFloat />
    </div>
  );
}
