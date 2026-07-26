import ExpertiseRow from "./ExpertiseRow";
import { expertiseData } from "./expertiseData";

export default function ExpertiseGrid() {
  return (
    <div className="border-t border-white/8">
      {expertiseData.map((item, i) => (
        <ExpertiseRow key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}