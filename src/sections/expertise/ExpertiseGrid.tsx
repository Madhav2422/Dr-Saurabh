"use client";

import { useState } from "react";
import ExpertiseRow from "./ExpertiseRow";
import { expertiseData } from "./expertiseData";

export default function ExpertiseGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-white/8">
      {expertiseData.map((item, i) => (
        <ExpertiseRow
          key={item.id}
          item={item}
          index={i}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
}