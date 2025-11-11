// src/pages/Tutoring.tsx
import { useAOS } from "@/hooks/useAOS";
import { Navbar } from "@/components/layout/Navbar";
import { TutoringHero } from "@/components/sections/Tutoring/TutoringHero";
import { Services } from "@/components/sections/Tutoring/Services";
import { Pricing } from "@/components/sections/Tutoring/Pricing";
import { Reviews } from "@/components/sections/Tutoring/Reviews";
import { FAQ } from "@/components/sections/Tutoring/FAQ";
import { ContactForm } from "@/components/sections/Tutoring/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

export const Tutoring = () => {
  useAOS({
    duration: 500,
    easing: "ease-in-sine",
    once: false,
    offset: 200,
    delay: 0,
    mirror: true,
  });

  return (
    <div className="bg-light" style={{ overflowX: "hidden" }}>
      <Navbar />
      <TutoringHero />
      <Services />
      {/* <Pricing /> */}
      {/* <Reviews /> */}
      <FAQ />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  );
};
