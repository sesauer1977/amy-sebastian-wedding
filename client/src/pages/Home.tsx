/**
 * Home — Amy & Sebastian Wedding Website
 * Design: Timeless Ivory & Sage
 * Sections: Hero, Countdown, Schedule, Venue, Ceremony, Accommodation, Travel, RSVP Info, Gallery Placeholder
 */
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import VenueSection from "@/components/sections/VenueSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import TravelSection from "@/components/sections/TravelSection";
import GuestInfoSection from "@/components/sections/GuestInfoSection";
import ContactSection from "@/components/sections/ContactSection";
import ScottishTriviaSection from "@/components/sections/ScottishTriviaSection";
import EastLothianSection from "@/components/sections/EastLothianSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionsRef.current = document.querySelectorAll(".fade-in-up");
    sectionsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.012 85)" }}>
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <ScheduleSection />
      <VenueSection />
      <AccommodationSection />
      <TravelSection />
      <GuestInfoSection />
      <ScottishTriviaSection />
      <EastLothianSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
