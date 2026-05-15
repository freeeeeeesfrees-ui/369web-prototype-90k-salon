import { Hero } from "@/components/home/Hero";
import { Concept } from "@/components/home/Concept";
import { MenuPreview } from "@/components/home/MenuPreview";
import { StylistsPreview } from "@/components/home/StylistsPreview";
import { MemberPromo } from "@/components/home/MemberPromo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <MenuPreview />
      <StylistsPreview />
      <MemberPromo />
    </main>
  );
}
