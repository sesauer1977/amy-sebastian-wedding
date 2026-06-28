/**
 * HomeDe — German version of the wedding website at /de/
 * Uses German-specific navigation and section components
 */
import { useEffect, useRef } from "react";
import NavigationDe from "@/components/NavigationDe";
import HeroSectionDe from "@/components/sections/de/HeroSectionDe";
import CountdownSectionDe from "@/components/sections/de/CountdownSectionDe";
import ScheduleSectionDe from "@/components/sections/de/ScheduleSectionDe";
import VenueSectionDe from "@/components/sections/de/VenueSectionDe";
import AccommodationSectionDe from "@/components/sections/de/AccommodationSectionDe";
import TravelSectionDe from "@/components/sections/de/TravelSectionDe";
import GuestInfoSectionDe from "@/components/sections/de/GuestInfoSectionDe";
import TransportSectionDe from "@/components/sections/de/TransportSectionDe";
import ScottishTriviaSectionDe from "@/components/sections/de/ScottishTriviaSectionDe";
import EastLothianSectionDe from "@/components/sections/de/EastLothianSectionDe";
import ContactSectionDe from "@/components/sections/de/ContactSectionDe";
import FooterSectionDe from "@/components/sections/de/FooterSectionDe";

export default function HomeDe() {
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
      <NavigationDe />
      <HeroSectionDe />
      <CountdownSectionDe />
      <ScheduleSectionDe />
      <VenueSectionDe />
      <AccommodationSectionDe />
      <TravelSectionDe />
      <GuestInfoSectionDe />
      <TransportSectionDe />
      <ScottishTriviaSectionDe />
      <EastLothianSectionDe />
      <ContactSectionDe />
      <FooterSectionDe />
    </div>
  );
}
