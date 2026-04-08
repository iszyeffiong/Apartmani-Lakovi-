import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "me" | "en";

type TranslationKey =
  | "nav_home"
  | "nav_rooms"
  | "nav_gallery"
  | "nav_about"
  | "nav_contact"
  | "nav_book_now"
  | "nav_language_button"
  | "hero_subtitle"
  | "hero_book_now"
  | "hero_view_rooms"
  | "home_welcome"
  | "home_title"
  | "home_paragraph_1"
  | "home_paragraph_2"
  | "about_title"
  | "about_heading"
  | "about_paragraph_1"
  | "about_paragraph_2"
  | "about_paragraph_3"
  | "amenities_title"
  | "amenities_heading"
  | "gallery_title"
  | "gallery_subtitle"
  | "gallery_view_full"
  | "location_title"
  | "location_subtitle"
  | "testimonials_title"
  | "cta_heading"
  | "cta_text"
  | "cta_button"
  | "rooms_page_title"
  | "rooms_page_subtitle"
  | "room_details_back"
  | "room_details_amenities"
  | "room_details_cancellation"
  | "book_this_room"
  | "room_available"
  | "per_night"
  | "details"
  | "book"
  | "contact_title"
  | "contact_subtitle"
  | "contact_name"
  | "contact_email"
  | "contact_message"
  | "contact_name_placeholder"
  | "contact_email_placeholder"
  | "contact_message_placeholder"
  | "send_message"
  | "phone_label"
  | "email_label"
  | "address_label"
  | "address_value"
  | "message_sent"
  | "notfound_title"
  | "notfound_message"
  | "return_home"
  | "booking_modal_title"
  | "booking_modal_select_room"
  | "booking_modal_choose_room"
  | "booking_modal_checkin"
  | "booking_modal_checkout"
  | "booking_modal_pick_date"
  | "booking_modal_guests"
  | "booking_modal_full_name"
  | "booking_modal_email"
  | "booking_modal_payment_method"
  | "booking_modal_pay_arrival"
  | "booking_modal_pay_now"
  | "booking_modal_pay_arrival_desc"
  | "booking_modal_pay_now_desc"
  | "booking_modal_secure_payment"
  | "booking_modal_card_number"
  | "booking_modal_expiry"
  | "booking_modal_cvc"
  | "booking_modal_payment_secure"
  | "booking_modal_confirm_booking"
  | "booking_modal_pay_confirm"
  | "booking_modal_free_cancellation"
  | "booking_widget_check_availability"
  | "whatsapp_connect_title"
  | "whatsapp_connect_text"
  | "whatsapp_cancel"
  | "whatsapp_open"
  | "footer_about"
  | "footer_quick_links"
  | "footer_contact"
  | "footer_copyright"
  | "sale_now"
  | "sale_button"
  | "limited_time"
  | "sale_offer_heading"
  | "room_details_guests"
  | "more_about"
  | "amenities_free_wifi"
  | "amenities_free_wifi_desc"
  | "amenities_free_parking"
  | "amenities_free_parking_desc"
  | "amenities_air_conditioning"
  | "amenities_air_conditioning_desc"
  | "amenities_sea_view"
  | "amenities_sea_view_desc"
  | "amenities_near_beach"
  | "amenities_near_beach_desc"
  | "amenities_kitchen"
  | "amenities_kitchen_desc"
  | "testimonial_1"
  | "testimonial_2"
  | "testimonial_3";

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    nav_home: "Home",
    nav_rooms: "Rooms",
    nav_gallery: "Gallery",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book_now: "Book Now",
    nav_language_button: "EN",
    hero_subtitle: "Your peaceful retreat on the Adriatic coast. Experience comfort, beauty, and unforgettable hospitality.",
    hero_book_now: "Book Now",
    hero_view_rooms: "View Rooms",
    home_welcome: "Welcome",
    home_title: "Your Home Away From Home",
    home_paragraph_1:
      "Nestled along the stunning Adriatic coastline, Apartmani Laković offers a collection of beautifully appointed apartments designed for comfort and relaxation. Whether you're seeking a romantic escape or a family adventure, our apartments provide the perfect base to explore the region.",
    home_paragraph_2:
      "With personalized service, modern amenities, and breathtaking sea views, we ensure every guest feels at home from the moment they arrive.",
    about_title: "About Apartmani Laković",
    about_heading: "Our Story",
    about_paragraph_1:
      "For over a decade, the Laković family has welcomed guests from around the world to our beautiful apartments on the Adriatic coast. What started as a small family guesthouse has grown into a collection of modern, stylish apartments - but our commitment to personal, warm hospitality remains unchanged.",
    about_paragraph_2:
      "We believe that a great holiday starts with a great place to stay. That's why we've carefully designed each apartment with comfort, style, and functionality in mind. From the premium linens to the fully equipped kitchens, every detail is chosen to make your stay exceptional.",
    about_paragraph_3:
      "Located in the heart of Budva, our apartments offer easy access to beaches, restaurants, historical sites, and the vibrant nightlife. Whether you're here to relax, explore, or celebrate - we're here to ensure you have an unforgettable experience.",
    amenities_title: "Amenities",
    amenities_heading: "Everything You Need",
    amenities_free_wifi: "Free WiFi",
    amenities_free_wifi_desc: "High-speed internet throughout",
    amenities_free_parking: "Free Parking",
    amenities_free_parking_desc: "Secure private parking",
    amenities_air_conditioning: "Air Conditioning",
    amenities_air_conditioning_desc: "Climate control in every room",
    amenities_sea_view: "Sea View",
    amenities_sea_view_desc: "Stunning Adriatic panoramas",
    amenities_near_beach: "Near Beach",
    amenities_near_beach_desc: "Steps from crystal waters",
    amenities_kitchen: "Kitchen",
    amenities_kitchen_desc: "Fully equipped kitchenettes",
    gallery_title: "Gallery",
    gallery_subtitle: "A Glimpse of Paradise",
    gallery_view_full: "View Full Gallery",
    location_title: "Location",
    location_subtitle: "Find your perfect coastal escape",
    testimonials_title: "Testimonials",
    cta_heading: "Ready for your Adriatic getaway?",
    cta_text:
      "Book your stay today and enjoy seaside comfort, warm hospitality, and unforgettable memories at Apartmani Laković.",
    cta_button: "Reserve Now",
    rooms_page_title: "Our Rooms & Apartments",
    rooms_page_subtitle:
      "Choose from our selection of beautifully appointed apartments, each designed for comfort and relaxation.",
    room_details_back: "Back to Rooms",
    room_details_amenities: "Amenities",
    room_details_cancellation: "Free cancellation up to 48 hours before check-in",
    book_this_room: "Book This Room",
    room_available: "available",
    per_night: "/night",
    details: "Details",
    book: "Book",
    contact_title: "Contact Us",
    contact_subtitle: "Have questions or ready to book? We'd love to hear from you.",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_name_placeholder: "Your full name",
    contact_email_placeholder: "you@example.com",
    contact_message_placeholder: "Tell us about your stay plans...",
    send_message: "Send Message",
    phone_label: "Phone",
    email_label: "Email",
    address_label: "Address",
    address_value: "Obala bb, 85310 Budva, Montenegro",
    message_sent: "Message sent! We'll get back to you shortly.",
    notfound_title: "Oops! Page not found",
    notfound_message: "The page you're looking for doesn't exist.",
    return_home: "Return to Home",
    booking_modal_title: "Book Your Stay",
    booking_modal_select_room: "Select Room",
    booking_modal_choose_room: "Choose a room...",
    booking_modal_checkin: "Check-in",
    booking_modal_checkout: "Check-out",
    booking_modal_pick_date: "Pick date",
    booking_modal_guests: "Guests",
    booking_modal_full_name: "Full Name",
    booking_modal_email: "Email",
    booking_modal_payment_method: "Payment Method",
    booking_modal_pay_arrival: "Pay on Arrival",
    booking_modal_pay_now: "Pay Now",
    booking_modal_pay_arrival_desc: "Pay when you check in - no upfront charge",
    booking_modal_pay_now_desc: "Secure your booking with immediate payment",
    booking_modal_secure_payment: "Secure Payment",
    booking_modal_card_number: "Card Number",
    booking_modal_expiry: "Expiry",
    booking_modal_cvc: "CVC",
    booking_modal_payment_secure: "Your payment info is encrypted and secure",
    booking_modal_confirm_booking: "Confirm Booking",
    booking_modal_pay_confirm: "Pay & Confirm Booking",
    booking_modal_free_cancellation: "Free cancellation up to 48 hours before check-in",
    booking_widget_check_availability: "Check Availability",
    whatsapp_connect_title: "Connect with us",
    whatsapp_connect_text:
      "Send us a message on WhatsApp and our team will respond to your inquiry as soon as possible. We're here to help with all your booking questions!",
    whatsapp_cancel: "Cancel",
    whatsapp_open: "Open WhatsApp",
    footer_about:
      "Experience the beauty of the Adriatic coast in our carefully designed apartments. Your perfect seaside retreat awaits.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_copyright: "All rights reserved.",
    sale_now: "FROM 999€ NOW!",
    sale_button: "CLAIM 999€ OFFER",
    limited_time: "LIMITED TIME",
    sale_offer_heading: "Exclusive Deal / Ekskluzivna ponuda:",
    room_details_guests: "Up to {count} guests",
    more_about: "More About Us",
    testimonial_1:
      "Perfect location, spotlessly clean, and the balcony view at sunset is unforgettable. Highly recommend for couples.",
    testimonial_2:
      "Felt like home from the moment we arrived. The kids loved the beach nearby. Great value for a family holiday.",
    testimonial_3:
      "Warm hosts, comfortable rooms, and an amazing Adriatic view. We can't wait to come back.",
  },
  me: {
    nav_home: "Početna",
    nav_rooms: "Sobe",
    nav_gallery: "Galerija",
    nav_about: "O nama",
    nav_contact: "Kontakt",
    nav_book_now: "Rezerviši",
    nav_language_button: "ME",
    hero_subtitle:
      "Vaš miran odmor na Jadranskoj obali. Doživite udobnost, ljepotu i nezaboravnu gostoljubivost.",
    hero_book_now: "Rezerviši",
    hero_view_rooms: "Pogledaj sobe",
    home_welcome: "Dobrodošli",
    home_title: "Vaš dom daleko od kuće",
    home_paragraph_1:
      "Smešten pored zadivljujuće jadranske obale, Apartmani Laković nude kolekciju lijepo uređenih apartmana dizajniranih za udobnost i opuštanje. Bilo da tražite romantični bijeg ili porodičnu avanturu, naši apartmani predstavljaju savršen izbor za istraživanje regije.",
    home_paragraph_2:
      "Sa personalizovanom uslugom, modernim sadržajima i zadivljujućim pogledom na more, pobrinut ćemo se da se svaki gost osjeća kao kod kuće od trenutka dolaska.",
    about_title: "O Apartmanima Laković",
    about_heading: "Naša priča",
    about_paragraph_1:
      "Više od deceniju porodica Laković dočekuje goste iz cijelog svijeta u našim lijepim apartmanima na Jadranskoj obali. Ono što je počelo kao mala porodična kuća za goste preraslo je u kolekciju modernih, stilskih apartmana - ali našu posvećenost ličnoj, toploj gostoljubivosti ostaje nepromijenjena.",
    about_paragraph_2:
      "Vjerujemo da odličan odmor počinje odličnim mjestom za boravak. Zato smo pažljivo dizajnirali svaki apartman s udobnošću, stilom i funkcionalnošću na umu. Od premium posteljine do potpuno opremljenih kuhinja, svaki detalj je odabran da vaš boravak učini izuzetnim.",
    about_paragraph_3:
      "Smešten u srcu Budve, naši apartmani nude lak pristup plažama, restoranima, istorijskim mjestima i vibrantnom noćnom životu. Bilo da ste ovdje da se opustite, istražite ili proslavite - tu smo da vam obezbijedimo nezaboravno iskustvo.",
    amenities_title: "Usluge",
    amenities_heading: "Sve što vam treba",
    amenities_free_wifi: "Besplatan WiFi",
    amenities_free_wifi_desc: "Brzi internet u cijelom objektu",
    amenities_free_parking: "Besplatan parking",
    amenities_free_parking_desc: "Siguran privatni parking",
    amenities_air_conditioning: "Klima",
    amenities_air_conditioning_desc: "Kontrola klime u svakoj sobi",
    amenities_sea_view: "Pogled na more",
    amenities_sea_view_desc: "Zapanjujući jadranski panorami",
    amenities_near_beach: "Blizu plaže",
    amenities_near_beach_desc: "Korak od kristalno čistog mora",
    amenities_kitchen: "Kuhinja",
    amenities_kitchen_desc: "Potpuno opremljene čajna kuhinja",
    gallery_title: "Galerija",
    gallery_subtitle: "Pogled u raj",
    gallery_view_full: "Pogledaj punu galeriju",
    location_title: "Lokacija",
    location_subtitle: "Pronađite svoje savršeno primorsko utočište",
    testimonials_title: "Izjave",
    cta_heading: "Spremni za jadranski odmor?",
    cta_text:
      "Rezervišite svoj boravak danas i uživajte u udobnosti uz more, toploj gostoljubivosti i nezaboravnim uspomenama u Apartmanima Laković.",
    cta_button: "Rezerviši sada",
    rooms_page_title: "Naše sobe i apartmani",
    rooms_page_subtitle:
      "Izaberite iz naše ponude lijepo uređenih apartmana, svaki dizajniran za udobnost i opuštanje.",
    room_details_back: "Nazad na sobe",
    room_details_amenities: "Sadržaji",
    room_details_cancellation: "Besplatno otkazivanje do 48 sati prije prijave",
    book_this_room: "Rezerviši ovu sobu",
    room_available: "raspoloživo",
    per_night: "/noć",
    details: "Detalji",
    book: "Rezerviši",
    contact_title: "Kontakt",
    contact_subtitle: "Imate pitanja ili ste spremni za rezervaciju? Rado ćemo čuti od vas.",
    contact_name: "Ime",
    contact_email: "Email",
    contact_message: "Poruka",
    contact_name_placeholder: "Vaše puno ime",
    contact_email_placeholder: "vi@example.com",
    contact_message_placeholder: "Recite nam o svojim planovima boravka...",
    send_message: "Pošalji poruku",
    phone_label: "Telefon",
    email_label: "Email",
    address_label: "Adresa",
    address_value: "Obala bb, 85310 Budva, Crna Gora",
    message_sent: "Poruka poslana! Odgovorićemo vam uskoro.",
    notfound_title: "Ups! Stranica nije pronađena",
    notfound_message: "Stranica koju tražite ne postoji.",
    return_home: "Povratak na početnu",
    booking_modal_title: "Rezervišite svoj boravak",
    booking_modal_select_room: "Izaberite sobu",
    booking_modal_choose_room: "Izaberite sobu...",
    booking_modal_checkin: "Prijava",
    booking_modal_checkout: "Odjava",
    booking_modal_pick_date: "Izaberite datum",
    booking_modal_guests: "Gosti",
    booking_modal_full_name: "Puno ime",
    booking_modal_email: "Email",
    booking_modal_payment_method: "Način plaćanja",
    booking_modal_pay_arrival: "Plaćanje po dolasku",
    booking_modal_pay_now: "Plati sada",
    booking_modal_pay_arrival_desc: "Platite pri prijavi - bez prethodne uplate",
    booking_modal_pay_now_desc: "Osigurajte vašu rezervaciju trenutnom uplatom",
    booking_modal_secure_payment: "Sigurno plaćanje",
    booking_modal_card_number: "Broj kartice",
    booking_modal_expiry: "Ističe",
    booking_modal_cvc: "CVC",
    booking_modal_payment_secure: "Vaši podaci o plaćanju su šifrovani i sigurni",
    booking_modal_confirm_booking: "Potvrdi rezervaciju",
    booking_modal_pay_confirm: "Plati i potvrdi rezervaciju",
    booking_modal_free_cancellation: "Besplatno otkazivanje do 48 sati prije prijave",
    booking_widget_check_availability: "Provjerite dostupnost",
    whatsapp_connect_title: "Povežite se sa nama",
    whatsapp_connect_text:
      "Pošaljite nam poruku na WhatsApp i naš tim će odgovoriti na vaš upit što je prije moguće. Tu smo da pomognemo sa svim pitanjima o rezervaciji!",
    whatsapp_cancel: "Otkaži",
    whatsapp_open: "Otvori WhatsApp",
    footer_about:
      "Doživite ljepotu Jadranske obale u našim pažljivo dizajniranim apartmanima. Vaše savršeno primorsko utočište čeka.",
    footer_quick_links: "Brze veze",
    footer_contact: "Kontakt",
    footer_copyright: "Sva prava zadržana.",
    sale_now: "OD 999€ SAD!",
    sale_button: "ZATRAŽI 999€ PONUDU",
    limited_time: "OGRANIČENO VRIJEME",
    sale_offer_heading: "Ekskluzivna ponuda:",
    room_details_guests: "Do {count} gostiju",
    more_about: "Više o nama",
    testimonial_1:
      "Savršena lokacija, besprijekorno čisto, a pogled sa balkona na zalazak sunca je nezaboravan. Toplo preporučujem za parove.",
    testimonial_2:
      "Osjećali smo se kao kod kuće od trenutka dolaska. Djeca su obožavala plažu u blizini. Sjajna vrijednost za porodični odmor.",
    testimonial_3:
      "Topli domaćini, udobne sobe i fantastičan pogled na Jadran. Jedva čekamo da se vratimo.",
  },
};

interface LanguageContextValue {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lakovic-lang";

export const LanguageProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [lang, setLang] = useState<Language>("me");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "en" || stored === "me") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      toggleLanguage: () => setLang((current) => (current === "me" ? "en" : "me")),
      t: (key: TranslationKey) => translations[lang][key] ?? key,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
