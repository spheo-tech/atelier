import { Closing } from "@/components/home/Closing";
import { Collection } from "@/components/home/Collection";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { License } from "@/components/home/License";
import { Marquee } from "@/components/home/Marquee";
import { Process } from "@/components/home/Process";
import { Standard } from "@/components/home/Standard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Collection />
      <Standard />
      <Process />
      <License />
      <Faq />
      <Closing />
    </>
  );
}
