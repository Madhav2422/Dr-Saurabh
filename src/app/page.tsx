import { ContactCta } from "@/sections/contact-cta";
import { Expertise } from "@/sections/expertise";
import { Hero } from "@/sections/hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
       <Expertise />
        <ContactCta />
    </main>
  );
}