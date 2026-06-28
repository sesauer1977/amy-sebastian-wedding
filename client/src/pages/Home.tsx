/**
 * Home — Amy & Sebastian Wedding Website
 * Design: Timeless Ivory & Sage
 * Sections: Hero, Countdown, Schedule, Venue, Ceremony, Accommodation, Travel, RSVP Info, Gallery Placeholder
 */
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import VenueSection from "@/components/sections/VenueSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import TravelSection from "@/components/sections/TravelSection";
import GuestInfoSection from "@/components/sections/GuestInfoSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Scroll-triggered fade-in for all .fade-in-up elements
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
      <FooterSection />
    </div>
  );
}
