"use client";

import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="overflow-hidden shadow-lg shadow-[#c0bcbc]">
      <Image
        alt=""
        src={image}
        className={`h-[25rem] object-cover duration-700 ease-in-out  ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
