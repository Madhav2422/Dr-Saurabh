import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

export default function ExperienceStack() {
  return (
    <section className="relative bg-[#04070c] pb-32">
      <div className="flex flex-col gap-[45vh]">
        {experienceData.map((experience, i) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={i}
            total={experienceData.length}
          />
        ))}
      </div>
    </section>
  );
}