import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Sparkles, Check, X, ShieldAlert, ArrowRight, CircleDot } from "lucide-react";
import { SERVICES_DATA, WHATSAPP_LINKS } from "../data";
import { ServiceItem } from "../types";

import haircutTrainingPhoto from "../assets/images/haircut_training_photo_1783761976300.jpg";
import hairWashSpaPhoto from "../assets/images/hair_wash_spa_photo_1783761991353.jpg";
import hairStylingHeatPhoto from "../assets/images/hair_styling_heat_photo_1783762004909.jpg";
import hairUpdoBridalPhoto from "../assets/images/hair_updo_bridal_photo_1783762021336.jpg";

import preBridalPrepSpa from "../assets/images/pre_bridal_prep_spa_1783762909533.jpg";
import bridalHdMakeupGlow from "../assets/images/bridal_hd_makeup_glow_1783762922525.jpg";
import partyMakeupGlow from "../assets/images/party_makeup_glow_1783762934711.jpg";
import airbrushMakeupTech from "../assets/images/airbrush_makeup_tech_1783762952108.jpg";
import sareeDrapeStyling from "../assets/images/saree_drape_styling_1783762966116.jpg";
import sareeFoldedBlueImg from "../assets/images/saree_professional_box_folding_1783869155869.jpg";

import hairColorHighlights from "../assets/images/hair_color_highlights_1783763139750.jpg";
import hairBotoxSmoothening from "../assets/images/hair_botox_smoothening_1783763154890.jpg";

import skinDetanFacial from "../assets/images/skin_detan_facial_1783763193414.jpg";
import pedicureManicureSpa from "../assets/images/pedicure_manicure_spa_1783763210627.jpg";
import waxingThreadingSalon from "../assets/images/waxing_threading_salon_1783763227183.jpg";

import skinDetanGlow from "../assets/images/skin_detan_glow_1783763516894.jpg";
import skincareFacialSpa from "../assets/images/skincare_facial_spa_1783763533774.jpg";
import pedicureSpaBowl from "../assets/images/pedicure_spa_bowl_1783763547940.jpg";
import manicureHandSpa from "../assets/images/manicure_hand_spa_1783763564091.jpg";
import hairWaxingSalon from "../assets/images/hair_waxing_salon_1783763577809.jpg";
import eyebrowThreadingThread from "../assets/images/eyebrow_threading_thread_1783763592749.jpg";

import globalHairColor from "../assets/images/global_hair_color_1783764249542.jpg";
import fashionHairColor from "../assets/images/fashion_hair_color_1783764260680.jpg";
import partialHighlights from "../assets/images/partial_highlights_1783764273391.jpg";
import fullHighlights from "../assets/images/full_highlights_1783764285214.jpg";
import rootTouchUp from "../assets/images/root_touch_up_1783764297674.jpg";
import preLightening from "../assets/images/pre_lightening_1783764310685.jpg";
import creativeOmbre from "../assets/images/creative_ombre_hair_1783764325045.jpg";
import botoxTreatment from "../assets/images/botox_hair_treatment_1783764339478.jpg";
import crownSmoothening from "../assets/images/crown_smoothening_1783764350657.jpg";
import smootheningStraightening from "../assets/images/smoothening_straightening_1783764363277.jpg";
import kidsHaircut from "../assets/images/kids_haircut_salon_1783764375545.jpg";

import weddingJewellerySets from "../assets/images/wedding_jewellery_sets_1783764688651.jpg";
import partyBirthdayJewellery from "../assets/images/party_birthday_jewellery_1783764706761.jpg";
import rentalJewellerySets from "../assets/images/rental_jewellery_sets_1783764720668.jpg";
import czChokerSet from "../assets/images/cz_choker_set_1783870010994.jpg";
import czFullBridalSet from "../assets/images/cz_full_bridal_set_1783870027291.jpg";
import hairJadaiSet from "../assets/images/hair_jadai_set_1783870042967.jpg";

import faceWartTreatment from "../assets/images/face_wart_treatment_1783575881964.jpg";
import handWartRemoval from "../assets/images/hand_wart_removal_1783575565889.jpg";
import faceSkinRemoval from "../assets/images/face_skin_removal_1783575775482.jpg";

const WART_REMOVAL_CATEGORIES = [
  {
    title: "1. Facial Wart & Skin Tag Removal",
    description: "Highly precise, painless, and sterile removal of facial warts, flat warts, and sensitive skin tags with minimal post-treatment trace.",
    image: faceWartTreatment,
    items: [
      "Dermatologist-approved micro-cautery technique",
      "100% sterile, single-use professional tools",
      "Pre-treatment cooling and pain-prevention cream",
      "Rapid post-treatment cellular healing and skin recovery"
    ]
  },
  {
    title: "2. Hand & Body Wart Treatment",
    description: "Extremely safe, secure, and fast clearance of stubborn body warts and skin elevations on hands, fingers, or neck.",
    image: handWartRemoval,
    items: [
      "Hygienic procedures taking less than 15 minutes",
      "High-precision target application to protect surrounding skin",
      "Full antiseptic washing and sanitization",
      "Complete deep root clearance to prevent recurrence"
    ]
  },
  {
    title: "3. Advanced Micro-Cautery / Skin Tag Removal",
    description: "Gentle and hygienic skin tag, milia, and mole extraction under strictly sterile standards for a flawless complexion.",
    image: faceSkinRemoval,
    items: [
      "Clean, spot-on treatment with instant results",
      "Soothes and calms the area with clinical aloe solutions",
      "Dermatologically tested post-care recovery guidance",
      "Certified hygienic techniques and zero-scars guarantee"
    ]
  }
];

const HAIR_SERVICES_CATEGORIES = [
  {
    title: "Haircuts & Styling",
    description: "Personalized premium haircutting services styled by our master hair stylists.",
    image: haircutTrainingPhoto,
    items: [
      "One level haircut (Perfect baseline trimming)",
      "Change of style (Complete transformative style change)",
      "Creative cut (Modern, layered, and customized cuts)",
      "Kids cut (Upto 7 years - gentle and styling)"
    ]
  },
  {
    title: "Hair Wash & Treatments",
    description: "Deep nourishing washes, soothing therapies, and ultimate conditioning.",
    image: hairWashSpaPhoto,
    items: [
      "Pre wash (Therapeutic prep cleansing)",
      "Hair wash, conditioning and Blast Dry (Silky & fresh)",
      "Hot oil treatment (Traditional nourishing scalp care)"
    ]
  },
  {
    title: "Thermal & Heat Styling",
    description: "Glamorous heat styling and professional blowdry options.",
    image: hairStylingHeatPhoto,
    items: [
      "Blowdry (Straight or curls options)",
      "Tongs styling (Tight curls or glamorous bouncy waves)",
      "Ironing (Ultra-straight, smooth, and frizz-free hair)"
    ]
  },
  {
    title: "Up-Dos & Bridal Styling",
    description: "Traditional and contemporary buns, braids, and special wedding settings.",
    image: hairUpdoBridalPhoto,
    items: [
      "up-Dos (Elegantly secured buns and modern braids)",
      "Bridal up (Full bridal hair setups and accessory locks)"
    ]
  },
  {
    title: "Premium Hair Coloring & Highlights",
    description: "Vibrant global coloring, fashion highlights, and rich creative combinations.",
    image: hairColorHighlights,
    items: [
      "Global hair coloring (Full rich coverage)",
      "Fashion colour styling (Bold vibrant shades)",
      "Partial highlights (Sun-kissed face-framing)",
      "Full highlights (Voluminous depth and tone)",
      "Root touch up (Seamless matching regrowth coverage)",
      "Pre-Lightening (Professional base brightening prep)",
      "Creative / Ombre / colouring (Custom blended gradients)"
    ]
  },
  {
    title: "Advanced Hair Texture & Botox",
    description: "Transformative professional hair botox, smoothening, and straightening solutions for smooth silky hair.",
    image: hairBotoxSmoothening,
    items: [
      "Botox treatment (Deep repair, absolute frizz-control)",
      "Crown Smoothening (Targeted top layer correction)",
      "Smoothening & Straightening (Sleek, glossy, pin-straight hair)"
    ]
  }
];

const COLOUR_AND_TEXTURE_POINTS = [
  {
    title: "1. Global Colour",
    description: "Elegant, high-shine all-over single-tone rich hair coloring for a professional, cohesive look.",
    image: globalHairColor,
    items: [
      "Rich mahogany, chocolate, copper & ash options",
      "Full deep-hydration nourishment pre-color coat",
      "100% grey coverage with long-lasting premium formulas"
    ]
  },
  {
    title: "2. Fashion Colour",
    description: "Vibrant, bold, and personalized fantasy coloring crafted to express your distinctive flair.",
    image: fashionHairColor,
    items: [
      "Trendy blues, pinks, deep purples & rich burgundies",
      "Color-locking protection therapy included",
      "Custom shade-matching consultation by master stylists"
    ]
  },
  {
    title: "3. Partial Highlights",
    description: "Subtle, beautiful face-framing hand-painted caramel highlights that add natural warmth and dimension.",
    image: partialHighlights,
    items: [
      "Precision strategic foil placements around the crown",
      "Seamless natural-looking sun-kissed blending",
      "Adds elegant visual depth without full-head lift"
    ]
  },
  {
    title: "4. Full Highlights",
    description: "Gorgeous, multi-dimensional full-head highlighting that gives outstanding depth and luminous contrast.",
    image: fullHighlights,
    items: [
      "Comprehensive full-head dimensional highlights",
      "Custom tones from platinum blonde to honey warm gold",
      "High-shine gloss sealer treatment post-color"
    ]
  },
  {
    title: "5. Root Touch Up",
    description: "Flawless and quick dye application to cover grey roots and regrowth, matching your existing shade perfectly.",
    image: rootTouchUp,
    items: [
      "Precise target application to regrowth zones",
      "Seamless blending with previous color",
      "Gentle scalp protection barrier applied first"
    ]
  },
  {
    title: "6. Pre-Lightening",
    description: "Essential base-lightening treatment to safely prepare dark locks for highly vibrant, true-to-tone fashion colors.",
    image: preLightening,
    items: [
      "Gentle bond-protecting lifting process",
      "Maintains maximum hair integrity during lightening",
      "Even base toning for flawless final color overlay"
    ]
  },
  {
    title: "7. Creative / Ombre / Colouring",
    description: "Custom hand-painted gradients, ombre transitions, or melting balayage for an artistic, gorgeous finish.",
    image: creativeOmbre,
    items: [
      "Gently blended gradient transitions from dark to light",
      "Custom color melting tailored to your haircut",
      "Unique hand-designed artistic shading"
    ]
  },
  {
    title: "8. Botox Treatment",
    description: "Premium professional deep-conditioning therapy that completely repairs damage and seals off frizz.",
    image: botoxTreatment,
    items: [
      "Infuses deep amino acids, vitamins & proteins",
      "Absolute frizz elimination with long-lasting silkiness",
      "Intense reflective mirror-like glossy finish"
    ]
  },
  {
    title: "9. Crown Smoothening",
    description: "Targeted, professional top-layer correction for a sleek, clean, and perfectly manageable crown area.",
    image: crownSmoothening,
    items: [
      "Corrects frizzy crown and cowlicks with precision",
      "Makes styling your top layers quick and effortless",
      "Maintains natural hair bounce and volume on the bottom"
    ]
  },
  {
    title: "10. Smoothening / Straightening",
    description: "High-end thermal alignment and keratin seal for pin-straight, ultra-sleek, and gorgeous glossy hair.",
    image: smootheningStraightening,
    items: [
      "Provides long-lasting pin-straight sleek style",
      "Water-resistant frizz defense for tropical weather",
      "Incredibly soft-to-touch glossy texture"
    ]
  },
  {
    title: "11. Kids Cut [upto 7 years]",
    description: "Super friendly, gentle, and happy haircutting experience for toddlers and children under 7 years.",
    image: kidsHaircut,
    items: [
      "Patient, certified child-friendly stylists",
      "Quick and safe scissor and clipper styling",
      "Fun child seat setup with zero-stress environment"
    ]
  }
];

const SKIN_SERVICES_CATEGORIES = [
  {
    title: "1. DE-Tan Services",
    description: "Premium skin-clarifying treatments that gently remove tan, restore natural tone, and leave your skin feeling completely refreshed and bright.",
    image: skinDetanGlow,
    items: [
      "DE-Tan skin treatment (Organic, active ingredients)",
      "Deep hydration & instant cooling therapy for sun-damaged skin",
      "Organic skin-clarifying scrub and pore cleansing"
    ]
  },
  {
    title: "2. Radiant Facials",
    description: "Nourishing, deep-cleansing, and rejuvenating facial therapies tailored to restore essential cellular moisture and unlock a beautiful natural glow.",
    image: skincareFacialSpa,
    items: [
      "Custom nourishing facial (Deep hydration & massage)",
      "Premium vitamin-infused organic skin packs",
      "Relaxing facial acupressure & cellular revival techniques"
    ]
  },
  {
    title: "3. Professional Pedicures",
    description: "Traditional foot spa treatments utilizing soothing warm water baths, fresh rose petals, professional scrubbing, and relaxing massages.",
    image: pedicureSpaBowl,
    items: [
      "Therapeutic foot spa with warm water & beautiful rose petals",
      "Deep exfoliation, callus removal, and nail shaping",
      "Soothing acupressure massage with nourishing foot creams"
    ]
  },
  {
    title: "4. Elegant Manicures",
    description: "Rejuvenating hand care, custom nail grooming, cuticle conditioning, and a gentle massage with rich essential oils.",
    image: manicureHandSpa,
    items: [
      "Professional nail shaping, buffing, and cuticle therapy",
      "Soothing hand scrub and organic skin softening wrap",
      "Relaxing hand massage using rich nourishing essential oils"
    ]
  },
  {
    title: "5. Safe & Hygienic Waxing",
    description: "Premium, gentle warm wax applications under strict sanitary standards for a completely smooth, silk-like, and hair-free finish.",
    image: hairWaxingSalon,
    items: [
      "Hygienic and gentle warm wax application",
      "Suitable for all skin types, including sensitive skin",
      "Post-wax soothing gel application for redness relief"
    ]
  },
  {
    title: "6. Precise Threading",
    description: "Expert facial hair styling and eyebrow shaping using a clean, professional cotton threading technique for perfect contour definition.",
    image: eyebrowThreadingThread,
    items: [
      "Precise eyebrow threading and perfect arch shaping",
      "Upper lip, forehead, and full face custom threading options",
      "Soothing aloe vera massage post-treatment to calm the skin"
    ]
  }
];

const BRIDAL_SERVICES_CATEGORIES = [
  {
    title: "Pre-Bridal Glow Treatments",
    description: "Therapeutic skin preparations and premium facials designed to make you look radiant and build a flawless wedding glow.",
    image: preBridalPrepSpa,
    items: [
      "Pre-Bridal skin treatment (Therapeutic bridal preps)",
      "Nourishing and deep cellular hydrating facials",
      "Detan and organic skin-clarifying glow scrubs"
    ]
  },
  {
    title: "High-Definition Bridal Makeup",
    description: "Signature traditional and modern makeovers styled meticulously to stay fresh and camera-ready all day long.",
    image: bridalHdMakeupGlow,
    items: [
      "Bridal makeup (Traditional temple luxury looks)",
      "Bridal / HD makeup (Micro-fine high-definition precision)",
      "Special morning wedding & glamorous reception packages"
    ]
  },
  {
    title: "Airbrush Makeup",
    description: "State-of-the-art flawless mist foundation application that is water-resistant, completely lightweight, and sweat-proof for 24 hours.",
    image: airbrushMakeupTech,
    items: [
      "Airbrush makeup (Completely seamless skin texture)",
      "Smudge-proof, transfer-proof lock-in setting",
      "Sophisticated face sculpting and flawless highlights"
    ]
  },
  {
    title: "Party & Guest Makeovers",
    description: "Subtle, radiant, and elegant beauty makeups styled beautifully for bridesmaids, wedding guests, and relative circle.",
    image: partyMakeupGlow,
    items: [
      "Party makeup (Subtle glowing and natural aesthetic)",
      "Bridesmaid and custom theme-based family packages",
      "Elegant contouring and soft lip & eyes enhancement"
    ]
  },
  {
    title: "Professional Saree Draping",
    description: "Exquisite traditional and modern pleating, professional folding, and highly secure pinning locks to drape your saree beautifully.",
    image: sareeFoldedBlueImg,
    items: [
      "Saree drape (Perfect crisp pleating and customized draping)",
      "Professional saree prepleating & box folding",
      "Secure pinning and weight distribution shoulder locks"
    ]
  }
];

const BRIDAL_JEWELLERY_CATEGORIES = [
  {
    title: "1. Traditional Wedding Jewellery Sets",
    description: "Exquisite heavy antique temple and gold-finish designer jewellery sets perfect for the main traditional wedding ceremony.",
    image: weddingJewellerySets,
    items: [
      "Heavy traditional antique temple gold chokers & long harams",
      "Matching intricate jhumkas, hangings, and custom maang tikkas",
      "Aesthetic kemp stone and ruby-emerald studded bridal accessories"
    ]
  },
  {
    title: "2. Birthday & Reception Contemporary Jewellery",
    description: "Elegant and sophisticated American Diamond, rose-gold, and silver finish sets perfectly styled for birthdays, wedding receptions, or modern evening parties.",
    image: partyBirthdayJewellery,
    items: [
      "Sophisticated American Diamond chokers & sleek crystal necklaces",
      "Elegant matching drop-earrings and designer sleek bracelets",
      "Contemporary modern rose-gold designs for birthdays & cocktail parties"
    ]
  },
  {
    title: "3. Antique & Kundan Rental Jewellery",
    description: "Access our elite curated catalog of premium royal Kundan, Jadau, and traditional heavy antique sets available for rental.",
    image: rentalJewellerySets,
    items: [
      "Premium heavy Kundan & Jadau luxury bridal multi-layer chokers",
      "Matching layered neckpieces, heavy jhumkas & elaborate bajubandh",
      "Prisinte, fully-sanitized designer sets with secure deposit policy"
    ]
  },
  {
    title: "4. Premium AD Choker Set",
    description: "Sleek, high-polish American Diamond (CZ) premium choker and layered necklace sets matching our signature high-fashion catalog.",
    image: czChokerSet,
    items: [
      "Ultra-modern sparkling wide-band CZ choker studded with ruby-pink drops",
      "Beautifully symmetrical layered necklaces and matching chandelier earrings",
      "Stunning contemporary look for receptions, grand events, and bridal glowups"
    ]
  },
  {
    title: "5. Full Premium AD Bridal Set",
    description: "Our complete royal-tier CZ full bridal jewelry ensemble (SJ945) featuring flawless high-quality gold plating and ruby-diamond work.",
    image: czFullBridalSet,
    items: [
      "Heavy premium CZ bridal choker, medium grand necklace, and matching long haram",
      "Full accessorization: Maang tikka, ear studs with gold-pearl drops, and luxury armlets",
      "Exquisite heavy gold-plated waist belt (odiyanam) to complete the royal bridal outfit"
    ]
  },
  {
    title: "6. Professional Hair Jadai Jewelry Set",
    description: "Intricately designed traditional South Indian braid jewelry and premium embroidered velvet bands for flawless hair adornment.",
    image: hairJadaiSet,
    items: [
      "Premium velvet jadai bands with intricate hand-embroidered gold zari vines",
      "Decorated with brilliant traditional red rubies, emeralds, and white stones",
      "Stately temple Lakshmi coin motifs and traditional jhumka hangings for braids"
    ]
  }
];

const NOSE_PIERCING_PLACEMENTS = [
  {
    title: "1. Classic Nostril Placement",
    description: "The traditional and timeless side nostril piercing. Highly delicate, safe, and beautiful when decorated with gold studs, sparkling diamond pins, or minimal rings.",
    healing: "2-3 Months",
    painLevel: "Very Low (Quick Pinch)",
    coords: { x: 65, y: 78 },
    items: [
      "Provides an elegant and graceful accent to the face",
      "Sterile single-use medical grade pressure system",
      "Easily fits minimal rings or diamond solitaire studs later"
    ]
  },
  {
    title: "2. Septum Cartilage Placement",
    description: "A trendy, sophisticated piercing placed in the soft tissue 'sweet spot' just beneath the septum cartilage. Versatile and highly fashionable.",
    healing: "2-3 Months",
    painLevel: "Low to Mild (Brief Warmth)",
    coords: { x: 50, y: 88 },
    items: [
      "No thick cartilage pierced for maximum safety & healing",
      "Can use clickers, hoops, or circular horseshoe rings",
      "Easy to maintain and conceal if required"
    ]
  }
];

const EAR_PIERCING_PLACEMENTS = [
  {
    title: "1. Classic Earlobe Placement",
    description: "The timeless and most popular earlobe piercing. Highly safe, fast-healing, and perfect for displaying elegant gold studs, drops, and heavy festive hangings.",
    healing: "4-6 Weeks",
    painLevel: "Very Low (Quick Pinch)",
    coords: { x: 48, y: 84 },
    items: [
      "Optimal for heavy dangling bridal earrings later",
      "Virtually painless modern quick-press mechanism",
      "Easiest point to clean and maintain daily"
    ]
  },
  {
    title: "2. Helix Cartilage Placement",
    description: "A trendy and ultra-chic piercing placed along the upper folded rim of the ear cartilage. Ideal for cute studs, minimal rings, or elegant wraps.",
    healing: "3-6 Months",
    painLevel: "Mild (Brief Warmth)",
    coords: { x: 76, y: 28 },
    items: [
      "Adds a stylish modern flair to your wedding look",
      "Uses specialized medical-grade cartilage pressure-pins",
      "Looks outstanding when paired with matching earlobe studs"
    ]
  },
  {
    title: "3. Stylish Tragus Placement",
    description: "A highly sophisticated modern piercing placed on the small cartilage projection directly in front of the ear canal. Looks spectacular with delicate solitaires.",
    healing: "3-6 Months",
    painLevel: "Mild (Moderate Pinch)",
    coords: { x: 32, y: 52 },
    items: [
      "Minimalist and extremely fashionable layout",
      "Conducted with premium micro-precision safety heads",
      "Enhances ear aesthetic symmetry gorgeously"
    ]
  }
];

const EAR_PIN_MODELS = [
  {
    title: "A. Sterile 18K Yellow Gold Studs",
    description: "Dermatologist-recommended hypoallergenic solid gold pins. Absolutely nickel-free and optimal for sensitive skin to prevent irritations.",
    material: "18K Solid Gold",
    size: "3.0mm Classic Sphere",
    type: "gold" as const,
    items: [
      "Pure, warm, authentic traditional look",
      "High bio-compatibility to prevent rejection",
      "Polished safety backs with locked seal"
    ]
  },
  {
    title: "B. Surgical Titanium Silver Stars",
    description: "Sleek, highly durable bio-compatible silver studs styled in a minimalist star pattern. Highly polished with premium scratch resistance.",
    material: "Surgical Grade Titanium",
    size: "3.5mm Star Stud",
    type: "silver" as const,
    items: [
      "Cool, futuristic, contemporary modern look",
      "Extremely lightweight and comfortable",
      "Anti-tarnish, corrosion-resistant lifetime metal"
    ]
  },
  {
    title: "C. Sparkling Solitaire Crystals",
    description: "Brilliant-cut medical-grade metal studs featuring a gorgeous multi-faceted sparkling crystal that reflects light with beautiful brilliance.",
    material: "Medical Grade Alloy",
    size: "4.0mm Brilliant Solitaire",
    type: "crystal" as const,
    items: [
      "Highly luminous diamond-replica shine",
      "Multi-faceted cut to reflect ambient lighting",
      "Perfect sparkling accent for birthdays & parties"
    ]
  }
];

function NosePiercingVisual({ x, y }: { x: number; y: number }) {
  return (
    <div className="relative w-32 h-32 bg-white rounded-2xl border border-[#F5A4C7]/20 flex items-center justify-center p-3 shadow-inner overflow-hidden shrink-0 mx-auto sm:mx-0">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF8F6] to-[#F5A4C7]/10" />
      
      {/* Nose Outline Drawing */}
      <svg viewBox="0 0 100 120" className="w-16 h-16 text-[#E75480]/30 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        {/* Nose bridge and tip */}
        <path d="M 50 20 C 50 40, 48 70, 40 85 C 42 92, 58 92, 60 85 C 52 70, 50 40, 50 20 Z" />
        {/* Left nostril curve */}
        <path d="M 33 80 C 25 80, 25 88, 38 88" strokeWidth="2" />
        {/* Right nostril curve */}
        <path d="M 67 80 C 75 80, 75 88, 62 88" strokeWidth="2" />
      </svg>
      
      {/* Pulsing indicator at point */}
      <div 
        className="absolute w-4 h-4"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#E75480] opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E75480] border-2 border-white shadow-md flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </div>
    </div>
  );
}

function EarPiercingVisual({ x, y }: { x: number; y: number }) {
  return (
    <div className="relative w-32 h-32 bg-white rounded-2xl border border-[#F5A4C7]/20 flex items-center justify-center p-3 shadow-inner overflow-hidden shrink-0 mx-auto sm:mx-0">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF8F6] to-[#F5A4C7]/10" />
      
      {/* Ear Outline Drawing */}
      <svg viewBox="0 0 100 120" className="w-20 h-20 text-[#E75480]/30 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        {/* Outer Helix */}
        <path d="M 40 20 C 70 10, 85 30, 85 55 C 85 85, 60 100, 45 105 C 35 108, 25 95, 25 85 C 25 75, 30 70, 35 70" />
        {/* Inner Antihelix */}
        <path d="M 50 35 C 65 30, 72 45, 72 60 C 72 75, 55 85, 45 88" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Tragus flap */}
        <path d="M 30 55 C 35 55, 38 60, 35 65 C 32 68, 28 65, 30 55" strokeWidth="1.5" />
      </svg>
      
      {/* Pulsing indicator at point */}
      <div 
        className="absolute w-4 h-4"
        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#E75480] opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E75480] border-2 border-white shadow-md flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </div>
    </div>
  );
}

function EarPinVisual({ type }: { type: "gold" | "silver" | "crystal" }) {
  return (
    <div className="relative w-32 h-32 bg-white rounded-2xl border border-[#F5A4C7]/20 flex flex-col items-center justify-center p-3 shadow-inner overflow-hidden shrink-0 mx-auto sm:mx-0">
      {/* Background soft lighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF8F6] to-[#F5A4C7]/10" />
      
      {/* The Pin Post / Needle line in background */}
      <div className="absolute w-1 h-14 bg-gradient-to-b from-gray-400 to-gray-200 rounded-full top-[40%] shadow-sm" />
      
      {/* The front stud face */}
      {type === "gold" && (
        <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-600 via-yellow-400 to-amber-200 border-2 border-yellow-300 flex items-center justify-center shadow-lg">
          {/* Internal bevel / diamond facet simulation */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-bl from-yellow-300 via-amber-400 to-yellow-600 border border-yellow-200 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-white opacity-90 blur-[0.5px]" />
          </div>
          {/* Gold Sparkle Badge */}
          <span className="absolute -top-1 -right-1 text-yellow-200 animate-pulse text-[10px]">✨</span>
        </div>
      )}

      {type === "silver" && (
        <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-slate-400 via-slate-100 to-white border-2 border-slate-300 flex items-center justify-center shadow-lg">
          {/* Star Shape Inside */}
          <div className="w-8 h-8 flex items-center justify-center text-slate-400">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-300 fill-current drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
            </svg>
          </div>
          <span className="absolute -top-1 -right-1 text-cyan-200 animate-pulse text-[10px]">✦</span>
        </div>
      )}

      {type === "crystal" && (
        <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-200 via-white to-sky-300 border-2 border-white flex items-center justify-center shadow-lg">
          {/* Multi-faceted crystal mesh simulation */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white via-cyan-100 to-sky-200 border border-cyan-50 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 rotate-45 border-r border-b border-cyan-300/30" />
            <div className="absolute inset-0 -rotate-45 border-l border-t border-cyan-300/30" />
            <span className="w-3 h-3 rounded-full bg-white opacity-95 filter blur-[0.5px]" />
          </div>
          <span className="absolute -top-1 -right-1 text-sky-400 animate-pulse text-xs font-bold">✨</span>
        </div>
      )}

      <span className="mt-2 text-[9px] font-mono uppercase tracking-wider text-[#2B2B2B]/60 font-semibold">
        {type === "gold" ? "18K Gold" : type === "silver" ? "Titanium" : "Solitaire"}
      </span>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [hairTab, setHairTab] = useState<"colour-texture" | "haircuts">("colour-texture");
  const [earTab, setEarTab] = useState<"nose" | "ear">("nose");

  return (
    <section id="services" className="py-24 bg-[#FFF8F6] relative overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A4C7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E75480]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E75480]/10 text-[#E75480] font-sans text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Exclusive Menu</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B] tracking-tight"
          >
            Luxury Grooming & Specialty Care
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base text-[#2B2B2B]/70 mt-4 leading-relaxed"
          >
            We combine high-end beauty artistry with clinical hygiene standards to offer premium styling, secure bridal jewels, professional ear-piercing, and medical wart removal.
          </motion.p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isJewellery = service.id === "bridal-jewellery";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border ${
                  isJewellery 
                    ? "border-[#D4AF37]/50 shadow-[#D4AF37]/5" 
                    : "border-[#F5A4C7]/20"
                }`}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.95]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Image Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {service.isNew && (
                      <span className="px-3 py-1 text-[10px] font-sans font-bold tracking-widest uppercase bg-[#E75480] text-white rounded-full shadow-md">
                        NEW SERVICE
                      </span>
                    )}
                    {service.isFeatured && (
                      <span className="px-3 py-1 text-[10px] font-sans font-bold tracking-widest uppercase bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-current" />
                        PREMIUM
                      </span>
                    )}
                  </div>

                  {/* Icon floating on image edge */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-lg border border-[#F5A4C7]/30 transform group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Card Info Section */}
                <div className="p-6">
                  <h3 className={`font-serif text-xl font-bold text-[#2B2B2B] ${
                    isJewellery ? "text-[#B76E79] flex items-center gap-1.5" : ""
                  }`}>
                    {service.title}
                    {isJewellery && <span className="text-[#D4AF37]">✨</span>}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#2B2B2B]/70 mt-3 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#F5A4C7]/10">
                    <button
                      onClick={() => setSelectedService(service)}
                      className={`text-sm font-sans font-bold transition-colors flex items-center gap-1 ${
                        isJewellery ? "text-[#D4AF37] hover:text-[#B76E79]" : "text-[#E75480] hover:text-[#B76E79]"
                      }`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <a
                      href={WHATSAPP_LINKS.service(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-1.5 rounded-full font-sans text-xs font-bold border transition-all ${
                        isJewellery
                          ? "bg-gradient-to-r from-[#D4AF37] to-[#B76E79] hover:from-[#B76E79] hover:to-[#D4AF37] text-white border-[#D4AF37]/50"
                          : "bg-[#E75480]/5 hover:bg-[#E75480] text-[#E75480] hover:text-white border-[#E75480]/20"
                      }`}
                    >
                      Book Service
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Details Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#F5A4C7]/20 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-[#E75480] text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative h-60 md:h-72">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{selectedService.icon}</span>
                    {selectedService.isNew && (
                      <span className="px-2 py-0.5 text-[9px] font-sans font-bold tracking-widest uppercase bg-[#E75480] text-white rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold drop-shadow-md">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Content body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                <p className="font-sans text-base text-[#2B2B2B]/80 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Dynamic warning banner for hygienic/medical services */}
                {(selectedService.id === "ear-piercing" || selectedService.id === "wart-removal") && (
                  <div className="mt-5 p-4 rounded-xl bg-[#FFF8F6] border border-[#E75480]/20 flex gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#E75480] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans text-sm font-bold text-[#E75480]">Hygienic & Clinical Standards</h4>
                      <p className="font-sans text-xs text-[#2B2B2B]/70 mt-0.5">
                        We use professional, single-use sterile tools and strict hygiene techniques. Procedures are highly safe, clean, and certified dermatologist approved.
                      </p>
                    </div>
                  </div>
                )}

                {selectedService.id === "hair-styling" ? (
                  <div className="mt-6 space-y-6">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-[#F5A4C7]/20 gap-4">
                      <button
                        onClick={() => setHairTab("colour-texture")}
                        className={`pb-3 text-sm font-serif font-bold transition-all relative ${
                          hairTab === "colour-texture" ? "text-[#E75480]" : "text-[#2B2B2B]/40 hover:text-[#2B2B2B]"
                        }`}
                      >
                        Colour & Texture (11 Specialty Services)
                        {hairTab === "colour-texture" && (
                          <motion.div layoutId="activeHairTabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E75480]" />
                        )}
                      </button>
                      <button
                        onClick={() => setHairTab("haircuts")}
                        className={`pb-3 text-sm font-serif font-bold transition-all relative ${
                          hairTab === "haircuts" ? "text-[#E75480]" : "text-[#2B2B2B]/40 hover:text-[#2B2B2B]"
                        }`}
                      >
                        General Haircuts & Styling
                        {hairTab === "haircuts" && (
                          <motion.div layoutId="activeHairTabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E75480]" />
                        )}
                      </button>
                    </div>

                    {hairTab === "colour-texture" ? (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#E75480]" />
                          <h4 className="font-serif text-lg font-bold text-[#E75480]">
                            Luxury Colour & Texture Specialty
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {COLOUR_AND_TEXTURE_POINTS.map((point, idx) => (
                            <div key={idx} className="bg-[#FFF8F6] rounded-2xl overflow-hidden border border-[#F5A4C7]/25 shadow-sm hover:shadow-lg transition-all flex flex-col">
                              <div className="h-44 overflow-hidden relative group">
                                <img
                                  src={point.image}
                                  alt={point.title}
                                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <h5 className="absolute bottom-3 left-4 right-4 font-serif text-sm font-bold text-white drop-shadow-sm">
                                  {point.title}
                                </h5>
                              </div>
                              <div className="p-4 flex-1 flex flex-col justify-between">
                                <p className="font-sans text-[11px] text-[#2B2B2B]/75 leading-relaxed mb-3">
                                  {point.description}
                                </p>
                                <ul className="space-y-1.5 mt-auto">
                                  {point.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex gap-2 items-start">
                                      <span className="w-4 h-4 rounded-full bg-[#E75480]/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-2.5 h-2.5 text-[#E75480]" />
                                      </span>
                                      <span className="font-sans text-[11px] font-medium text-[#2B2B2B]/90">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <h4 className="font-serif text-lg font-bold text-[#E75480]">
                          Standard Haircuts & Salon Styling
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {HAIR_SERVICES_CATEGORIES.map((category, idx) => (
                            <div key={idx} className="bg-[#FFF8F6] rounded-2xl overflow-hidden border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                              <div className="h-40 overflow-hidden relative">
                                <img
                                  src={category.image}
                                  alt={category.title}
                                  className="w-full h-full object-cover object-center filter brightness-95"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h5 className="absolute bottom-3 left-4 right-4 font-serif text-sm font-bold text-white drop-shadow-sm">
                                  {category.title}
                                </h5>
                              </div>
                              <div className="p-4 flex-1 flex flex-col justify-between">
                                <p className="font-sans text-[11px] text-[#2B2B2B]/60 italic mb-3">
                                  {category.description}
                                </p>
                                <ul className="space-y-2">
                                  {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex gap-2 items-start">
                                      <span className="w-4.5 h-4.5 rounded-full bg-[#E75480]/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-2.5 h-2.5 text-[#E75480]" />
                                      </span>
                                      <span className="font-sans text-xs font-medium text-[#2B2B2B]/90">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : selectedService.id === "bridal-makeup" ? (
                  <div className="mt-6 space-y-8">
                    <h4 className="font-serif text-lg font-bold text-[#E75480] border-b border-[#F5A4C7]/20 pb-2">
                      Exclusive Bridal Services & Packages
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {BRIDAL_SERVICES_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="bg-[#FFF8F6] rounded-2xl overflow-hidden border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                          <div className="h-40 overflow-hidden relative">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover object-center filter brightness-95"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <h5 className="absolute bottom-3 left-4 right-4 font-serif text-sm font-bold text-white drop-shadow-sm">
                              {category.title}
                            </h5>
                          </div>
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <p className="font-sans text-[11px] text-[#2B2B2B]/60 italic mb-3">
                              {category.description}
                            </p>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-2 items-start">
                                  <span className="w-4.5 h-4.5 rounded-full bg-[#E75480]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 text-[#E75480]" />
                                  </span>
                                  <span className="font-sans text-xs font-medium text-[#2B2B2B]/90">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedService.id === "skincare-facial" ? (
                  <div className="mt-6 space-y-8">
                    <h4 className="font-serif text-lg font-bold text-[#E75480] border-b border-[#F5A4C7]/20 pb-2">
                      Premium Skincare, Threading & Spas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {SKIN_SERVICES_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="bg-[#FFF8F6] rounded-2xl overflow-hidden border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                          <div className="h-40 overflow-hidden relative">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover object-center filter brightness-95"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <h5 className="absolute bottom-3 left-4 right-4 font-serif text-sm font-bold text-white drop-shadow-sm">
                              {category.title}
                            </h5>
                          </div>
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <p className="font-sans text-[11px] text-[#2B2B2B]/60 italic mb-3">
                              {category.description}
                            </p>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-2 items-start">
                                  <span className="w-4.5 h-4.5 rounded-full bg-[#E75480]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 text-[#E75480]" />
                                  </span>
                                  <span className="font-sans text-xs font-medium text-[#2B2B2B]/90">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedService.id === "bridal-jewellery" ? (
                  <div className="mt-6 space-y-8">
                    <div className="flex items-center gap-2 border-b border-[#F5A4C7]/20 pb-2">
                      <Sparkles className="w-5 h-5 text-[#E75480]" />
                      <h4 className="font-serif text-lg font-bold text-[#E75480]">
                        Exquisite Bridal & Birthday Jewellery Collections
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {BRIDAL_JEWELLERY_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="bg-[#FFF8F6] rounded-2xl overflow-hidden border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-all hover:shadow-lg flex flex-col">
                          <div className="h-44 overflow-hidden relative group">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                            <h5 className="absolute bottom-3 left-4 right-4 font-serif text-sm font-bold text-white drop-shadow-sm">
                              {category.title}
                            </h5>
                          </div>
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <p className="font-sans text-[11px] text-[#2B2B2B]/70 leading-relaxed mb-3">
                              {category.description}
                            </p>
                            <ul className="space-y-1.5 mt-auto">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-2 items-start">
                                  <span className="w-4 h-4 rounded-full bg-[#E75480]/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 text-[#E75480]" />
                                  </span>
                                  <span className="font-sans text-[11px] font-medium text-[#2B2B2B]/90">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedService.id === "ear-piercing" ? (
                  <div className="mt-6 space-y-6">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-[#F5A4C7]/20 gap-4">
                      <button
                        onClick={() => setEarTab("nose")}
                        className={`pb-3 text-sm font-serif font-bold transition-all relative ${
                          earTab === "nose" ? "text-[#E75480]" : "text-[#2B2B2B]/40 hover:text-[#2B2B2B]"
                        }`}
                      >
                        1. Nose Piercing Placements
                        {earTab === "nose" && (
                          <motion.div layoutId="activeEarTabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E75480]" />
                        )}
                      </button>
                      <button
                        onClick={() => setEarTab("ear")}
                        className={`pb-3 text-sm font-serif font-bold transition-all relative ${
                          earTab === "ear" ? "text-[#E75480]" : "text-[#2B2B2B]/40 hover:text-[#2B2B2B]"
                        }`}
                      >
                        2. Ear Piercing Placements
                        {earTab === "ear" && (
                          <motion.div layoutId="activeEarTabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E75480]" />
                        )}
                      </button>
                    </div>

                    {earTab === "nose" ? (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#E75480]" />
                          <h4 className="font-serif text-lg font-bold text-[#E75480]">
                            Safe & Aesthetic Nose Piercing Placements
                          </h4>
                        </div>
                        <div className="space-y-4">
                          {NOSE_PIERCING_PLACEMENTS.map((point, idx) => (
                            <div key={idx} className="bg-[#FFF8F6] rounded-2xl p-5 border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center">
                              {/* Left interactive visualization */}
                              <NosePiercingVisual x={point.coords.x} y={point.coords.y} />
                              
                              {/* Right details */}
                              <div className="flex-1 space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h5 className="font-serif text-base font-bold text-[#2B2B2B]">
                                    {point.title}
                                  </h5>
                                  <span className="px-2.5 py-0.5 rounded-full bg-[#E75480]/10 text-[#E75480] text-[10px] font-sans font-semibold">
                                    Pain Level: {point.painLevel}
                                  </span>
                                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-sans font-semibold">
                                    Healing: {point.healing}
                                  </span>
                                </div>
                                <p className="font-sans text-xs text-[#2B2B2B]/75 leading-relaxed">
                                  {point.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 pt-2 border-t border-[#F5A4C7]/10">
                                  {point.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex gap-2 items-center">
                                      <Check className="w-3.5 h-3.5 text-[#E75480] shrink-0" />
                                      <span className="font-sans text-[11px] text-[#2B2B2B]/90">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#E75480]" />
                          <h4 className="font-serif text-lg font-bold text-[#E75480]">
                            Safe & Aesthetic Ear Piercing Placements
                          </h4>
                        </div>
                        <div className="space-y-4">
                          {EAR_PIERCING_PLACEMENTS.map((point, idx) => (
                            <div key={idx} className="bg-[#FFF8F6] rounded-2xl p-5 border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center">
                              {/* Left interactive visualization */}
                              <EarPiercingVisual x={point.coords.x} y={point.coords.y} />
                              
                              {/* Right details */}
                              <div className="flex-1 space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h5 className="font-serif text-base font-bold text-[#2B2B2B]">
                                    {point.title}
                                  </h5>
                                  <span className="px-2.5 py-0.5 rounded-full bg-[#E75480]/10 text-[#E75480] text-[10px] font-sans font-semibold">
                                    Pain Level: {point.painLevel}
                                  </span>
                                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-sans font-semibold">
                                    Healing: {point.healing}
                                  </span>
                                </div>
                                <p className="font-sans text-xs text-[#2B2B2B]/75 leading-relaxed">
                                  {point.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 pt-2 border-t border-[#F5A4C7]/10">
                                  {point.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex gap-2 items-center">
                                      <Check className="w-3.5 h-3.5 text-[#E75480] shrink-0" />
                                      <span className="font-sans text-[11px] text-[#2B2B2B]/90">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : selectedService.id === "wart-removal" ? (
                  <div className="mt-6 space-y-8">
                    <h4 className="font-serif text-lg font-bold text-[#E75480] border-b border-[#F5A4C7]/20 pb-2">
                      Professional Wart & Skin Tag Removal Procedures
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {WART_REMOVAL_CATEGORIES.map((category, idx) => (
                        <div key={idx} className="bg-[#FFF8F6] rounded-2xl overflow-hidden border border-[#F5A4C7]/25 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                          <div className="h-40 overflow-hidden relative">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover object-center filter brightness-95"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <h5 className="absolute bottom-3 left-4 right-4 font-serif text-sm font-bold text-white drop-shadow-sm">
                              {category.title}
                            </h5>
                          </div>
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <p className="font-sans text-[11px] text-[#2B2B2B]/60 italic mb-3">
                              {category.description}
                            </p>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-2 items-start">
                                  <span className="w-4.5 h-4.5 rounded-full bg-[#E75480]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 text-[#E75480]" />
                                  </span>
                                  <span className="font-sans text-xs font-medium text-[#2B2B2B]/90">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="font-sans text-sm font-bold text-[#2B2B2B] uppercase tracking-wider mt-6 mb-3">
                      What we include:
                    </h4>
                    
                    {/* List of details */}
                    <ul className="space-y-2.5">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="w-5 h-5 rounded-full bg-[#E75480]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#E75480]" />
                          </span>
                          <span className="font-sans text-sm text-[#2B2B2B]/85">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Footer actions */}
              <div className="p-6 bg-[#FFF8F6] border-t border-[#F5A4C7]/15 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="text-center sm:text-left">
                  <p className="font-sans text-xs text-[#2B2B2B]/60">Mon-Sat: 10 AM - 8:30 PM | Sun: Appointment Only</p>
                  <p className="font-serif text-[#E75480] font-bold text-sm">Appointments & Training</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 rounded-full border border-[#2B2B2B]/20 text-sm font-sans font-semibold text-[#2B2B2B]/70 hover:bg-black/5 transition-colors w-full sm:w-auto"
                  >
                    Close
                  </button>
                  <a
                    href={WHATSAPP_LINKS.service(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#E75480] hover:bg-[#E75480]/90 text-white font-sans text-sm font-bold shadow-md hover:shadow-[#E75480]/20 flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
