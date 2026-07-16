import { ServiceItem, PortfolioItem, ReviewItem, TrainingProgram } from "./types";
import earPiercingImg from "./assets/images/ear_nose_piercing_artistry_1783869469948.jpg";
import wartRemovalImg from "./assets/images/face_wart_treatment_1783575881964.jpg";
import bridalJewelryImg from "./assets/images/bridal_jewelry_1783499837286.jpg";
import bridalMakeupImg from "./assets/images/bridal_makeup_1783502492437.jpg";
import sareeDrapingImg from "./assets/images/saree_draping_1783502510258.jpg";
import creativeHairstyleImg from "./assets/images/creative_hairstyle_1783503214863.jpg";
import hairColoringImg from "./assets/images/hair_coloring_1783503435677.jpg";
import logoBrandImg from "./assets/images/new_circular_brand_logo_1784002857803.jpg";
import indianHairStylingImg from "./assets/images/indian_hair_styling_1783575419127.jpg";
import facialBeforeAfterImg from "./assets/images/facial_before_after_1783576012266.jpg";
import indianContouringGlowImg from "./assets/images/indian_contouring_glow_1783576154238.jpg";

export const BRAND_LOGO = logoBrandImg;

export const CONTACT_PHONE = "+919094924686";
export const DISPLAY_PHONE = "+91 9094924686";
export const ADDRESS = "23/5, Gandhi Rd, SADANANADAPURAM, New Perungalathur, Chennai, Sadhanathapuram, Tamil Nadu 600063";

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@mahalakshmi2946?si=sdf9B4NObB-htJoI",
  instagram: "https://www.instagram.com/maharavi_beauty_logs?igsh=MWI2ajVvYWdrYWQwbg==",
  facebook: "https://www.facebook.com/100083185187920/"
};

export const WHATSAPP_LINKS = {
  general: `https://wa.me/919094924686?text=${encodeURIComponent("Hello New Fashion Beauty Parlour, I would like to enquire about your services and book an appointment!")}`,
  training: `https://wa.me/919094924686?text=${encodeURIComponent("Hello, I am interested in joining your Saree Prepleating and Bridal Training Classes. Please share more details.")}`,
  service: (serviceName: string) => `https://wa.me/919094924686?text=${encodeURIComponent(`Hello, I would like to book an appointment for ${serviceName} service.`)}`
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "skincare-facial",
    title: "Facial & Skincare",
    icon: "🌸",
    description: "Refreshing facials, custom threading, dermaplaning, and specialized acne treatments for a radiant complexion.",
    image: facialBeforeAfterImg,
    details: ["Hydrating & skin-brightening facials", "Gentle dermaplaning & face threading", "Deep-pore exfoliation & blackhead extraction", "Organic skincare ingredients for sensitive skin"]
  },
  {
    id: "hair-styling",
    title: "Hair Styling & Cutting",
    icon: "✂️",
    description: "Modern & traditional cuts, premium color treatments, and personalized hair pampering sessions.",
    image: indianHairStylingImg,
    details: ["Precision haircuts matching face shapes", "Global hair coloring & balayage", "Keratin and hair spa treatments", "Glamorous curls and blowout styling"]
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup & Styling",
    icon: "💄",
    description: "Bespoke bridal makeups, flawless saree draping, and professional jewelry coordination for your big day.",
    image: bridalMakeupImg,
    details: ["Traditional HD & Airbrush bridal makeup", "Professional saree pleating & draping", "Family & bridesmaid styling packages", "Trial sessions and custom glow preps"],
    isFeatured: true
  },
  {
    id: "ear-piercing",
    title: "Ear & Nose Piercing",
    icon: "💎",
    description: "Professional, 100% hygienic ear and nose piercing using sterile equipment with a wide selection of premium studs.",
    image: earPiercingImg,
    details: ["Safe, painless precision techniques", "Dermatology-approved sterile tools", "Exclusive selection of gold & diamond studs", "Comprehensive nose & ear aftercare support"],
    isNew: true
  },
  {
    id: "wart-removal",
    title: "Wart & Skin Removal",
    icon: "🏥",
    description: "Safe, medical-grade, and painless removal of warts, moles, and skin tags under professional sanitary conditions.",
    image: wartRemovalImg,
    details: ["Advanced dermatologist-approved equipment", "Painless, quick 15-minute procedures", "No scarring or thermal damage to skin", "Hygienic clinic-grade treatment environment"],
    isNew: true
  },
  {
    id: "bridal-jewellery",
    title: "Bridal Jewellery",
    icon: "👑",
    description: "Exclusive bridal jewellery sets featuring premium traditional and contemporary designs, available for rental and custom matching.",
    image: bridalJewelryImg,
    details: ["South Indian antique gold & temple designs", "Premium diamond & kundan rental sets", "Custom bridal package coordination", "Individual or bundle jewellery options"],
    isNew: true,
    isFeatured: true
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "p1",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop",
    title: "Traditional South Indian Bride",
    description: "Flawless HD bridal makeup with gold jewelry coordination & fresh flowers bun."
  },
  {
    id: "p2",
    image: sareeDrapingImg,
    title: "Perfect Saree Draping",
    description: "Impeccable silk saree draping with neat, uniform pleats and secure pin-ups."
  },
  {
    id: "p3",
    image: creativeHairstyleImg,
    title: "Creative Hairstyle Artistry",
    description: "Intricate braided designs and elegant styling customized with traditional floral and gold accessories."
  },
  {
    id: "p4",
    image: earPiercingImg,
    title: "Ear & Nose Piercing Artistry",
    description: "Symmetric and sanitary ear and nose piercings decorated with modern gold studs."
  },
  {
    id: "p5",
    image: wartRemovalImg,
    title: "Wart Removal Transformation",
    description: "Clear and healed skin following painless medical-grade aesthetic treatments."
  },
  {
    id: "p6",
    image: bridalJewelryImg,
    title: "Bridal Jewellery Showcase",
    description: "Exquisite heavy chokers, necklaces, and jhumkas for the ultimate bridal aura."
  },
  {
    id: "p7",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
    title: "Traditional Floral Bun",
    description: "Symmetrical wedding bun styled with fresh rose and jasmine garlands."
  },
  {
    id: "p8",
    image: indianContouringGlowImg,
    title: "Modern Contouring & Glow",
    description: "Subtle base, sharp contouring, and luminous dewy look for reception events."
  },
  {
    id: "p9",
    image: hairColoringImg,
    title: "Creative Hair Coloring",
    description: "Rich copper highlights paired with sleek modern long layers."
  },
  {
    id: "p10",
    image: bridalMakeupImg,
    title: "Complete Bridal Package",
    description: "Stunning synergy of high-definition makeup, heavy bridal jewelry, and luxury styling."
  }
];

export const TRAINING_DATA: TrainingProgram[] = [
  {
    id: "t1",
    title: "Professional Beautician Course (Basics to Advance)",
    description: "An intensive career-ready syllabus covering facial therapies, standard & modern haircutting, advanced hair spas, threading, waxing, and professional salon hygiene.",
    details: [
      "Thread shaping, face waxing & hygienic cleanup",
      "Skin classification, premium facials & detan therapies",
      "Basic to advanced commercial haircuts & blow-dry styling",
      "Deep hair spa, dandruff therapies & damage repair",
      "Advanced salon tool operations & sanitization standards",
      "Client consultation, soft skills & salon business management"
    ]
  },
  {
    id: "t2",
    title: "Elite Bridal Makeup & Hair Styling Training",
    description: "Master the high-definition (HD) bridal makeup secrets, color theory, luxury base building, traditional floral hair structures, and secure jewelry coordination.",
    details: [
      "Flawless HD & Matte bridal base applications",
      "Advanced color correction and custom facial contouring",
      "Bridal eye makeup (Smokey, Cut-crease, Glitter locks)",
      "Traditional bridal buns, braids, and flower garnishing",
      "Luxury product selection (MAC, Kryolan, Huda Beauty)",
      "Heavy bridal jewelry setting and lock-pinning coordination"
    ]
  },
  {
    id: "t3",
    title: "Saree Prepleating, Draping & Box Folding Mastery",
    description: "Learn professional saree prepleating techniques, precise box folding, pre-stitching, and rapid secure draping for all silk fabrics.",
    details: [
      "Precision pleat sizing and iron-pressing for Kanchipuram silks",
      "Professional box folding and secure board pinning",
      "Quick secure draping and lock-pinning secrets",
      "Fabric care, steaming, and pre-stitching alignments",
      "Modern fusion styles, lehenga setups, and guest draping",
      "Saree prepleating business setup and package marketing"
    ]
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    name: "Priya M.",
    rating: 5,
    text: "Best bridal makeup I've ever had! The jewelry coordination was perfect. Received so many compliments on my wedding day!",
    service: "Bridal Makeup & Styling",
    avatarSeed: "Priya"
  },
  {
    id: "r2",
    name: "Anjali K.",
    rating: 5,
    text: "Professional ear and nose piercing, extremely hygienic! No pain or swelling, and the gold jewelry options were beautiful.",
    service: "Ear & Nose Piercing",
    avatarSeed: "Anjali"
  },
  {
    id: "r3",
    name: "Sneha V.",
    rating: 5,
    text: "Wart removal was completely painless, and the results are fantastic. Skin healed beautifully with zero marks. Highly recommend!",
    service: "Wart & Skin Removal",
    avatarSeed: "Sneha"
  },
  {
    id: "r4",
    name: "Divya S.",
    rating: 5,
    text: "Their training classes changed my career! Learned complete bridal prep, draping, and business tips from expert instructors.",
    service: "Saree Prepleating & Bridal Training",
    avatarSeed: "Divya"
  },
  {
    id: "r5",
    name: "Meera R.",
    rating: 5,
    text: "The complete bridal package was absolutely flawless. Makeup, saree, and luxury jewelry came together beautifully.",
    service: "Complete Bridal Package",
    avatarSeed: "Bridal Styling"
  },
  {
    id: "r6",
    name: "Kavitha N.",
    rating: 5,
    text: "Very professional service in Chennai. Visited for a facial and threading; the ambiance was so therapeutic and clean.",
    service: "Facial & Skincare",
    avatarSeed: "Kavitha"
  }
];
