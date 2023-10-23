import Image from "next/image";
import Link from "next/link";
import leftArrow from "@/assets/arrow-left.svg"
import rightArrow from "@/assets/arrow-right.svg"
import { memo, useState, useEffect } from "react";

function BlurImage({ image, id }) {
  const [isLoading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (image) {
      setTotalImages(image.length);
    }
  }, [image]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden shadow-lg hover:shadow-md transition-all duration-300 shadow-[#c0bcbc] images h-full">
      {id !== undefined ? (
        <>
          <div className="image-left-sec" onClick={previousImage} />
          <Link href={`/products/${id}`}>
            <Image
              src={image && image[currentImageIndex]}
              width={1000}
              height={1000}
              className={`h-full object-cover duration-700 ease-in-out  ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading(false)}
            />
          </Link>
          <div className="image-right-sec" onClick={nextImage} />
        </>
      ) : (
        <div className="dynamic-image-container">
          <div
            className="image-left-sec image-left-sec-arrow"
            onClick={previousImage}
          >
            <Image src={leftArrow} width={30} height={30} />
          </div>

          <Image
            src={image && image[currentImageIndex]}
            width={1000}
            height={1000}
            className={`object-cover duration-700 ease-in-out dynamic-image ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            })`}
            onLoadingComplete={() => setLoading(false)}
          />
          <div className="dynamic-image-length">
            {currentImageIndex + 1}/{totalImages}
          </div>

          <div
            className="image-right-sec image-right-sec-arrow"
            onClick={nextImage}
            >
              <Image src={rightArrow} width={30} height={30} />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(BlurImage);