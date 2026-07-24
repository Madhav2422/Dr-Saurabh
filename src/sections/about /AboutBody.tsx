import AboutStory from "./AboutStory";
import CredentialCard from "./CredentialCard";
import AboutTimeline from "./AboutTimeline";
import PhilosophyQuote from "./PhilosophyQuote";
import { credentials } from "./aboutData";

export default function AboutBody() {
  return (
    <section className="relative bg-[#04070c] px-6 pb-28 pt-16 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AboutStory />
          <div className="grid gap-5">
            {credentials.map((credential, i) => (
              <CredentialCard key={credential.title} credential={credential} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <PhilosophyQuote />
        </div>

        <div className="mt-28">
          <AboutTimeline />
        </div>
      </div>
    </section>
  );
}