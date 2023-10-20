import Image from "next/image";
import Link from "next/link";
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
      <div className="image-left-sec" onClick={previousImage} />
      {id !== undefined ? (
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
      ) : (
        <>
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
        </>
      )}
      <div className="image-right-sec" onClick={nextImage} />
    </div>
  );
}

export default memo(BlurImage);
