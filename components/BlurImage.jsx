"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlurImage({ image, id }) {
  const [isLoading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image?.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image?.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden shadow-lg hover:shadow-md transition-all duration-300 shadow-[#c0bcbc] images">
      <div className="image-left-sec" onClick={previousImage} />
      {id !== undefined ? (
        <Link href={`/products/${id}`}>
          <Image
            src={image && image[currentImageIndex]}
            width={1000}
            height={1000}
            className={`object-cover duration-700 ease-in-out ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            })`}
            onLoadingComplete={() => setLoading(false)}
          />
        </Link>
      ) : (
        <Image 
          src={image && image[currentImageIndex]} 
          width={1000} 
          height={1000} 
          className={`object-cover duration-700 ease-in-out ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          })`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
      <div className="image-right-sec" onClick={nextImage} />
    </div>
  );
}