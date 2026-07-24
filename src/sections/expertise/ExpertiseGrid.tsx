"use client";

import { useState } from "react";
import ExpertiseRow from "./ExpertiseRow";
import { expertiseData } from "./expertiseData";

export default function ExpertiseGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-white/8">
      {expertiseData.map((item, i) => (
        <ExpertiseRow
          key={item.id}
          item={item}
          index={i}
          isActive={activeIndex === i}
          onActivate={() => setActiveIndex(activeIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}