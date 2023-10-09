"use client";

import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ image, height, width }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="overflow-hidden shadow-lg shadow-[#c0bcbc]">
      <Image
        src={image}
        width={1000}
        height={1000}
        className={`w-full h-[${height}rem] object-cover duration-700 ease-in-out  ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
