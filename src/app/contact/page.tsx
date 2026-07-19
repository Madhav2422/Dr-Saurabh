import { ContactHero, ContactBody } from "@/sections/contact";

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactHero />
      <ContactBody />
    </main>
  );
}