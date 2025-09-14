import { useEffect, useState } from "react";


const AutoSlide = ({ images = [], interval = 5000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`grid overflow-hidden h-full w-full`}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`
            col-start-1 row-start-1 transition-opacity duration-700 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          aria-hidden={i === index ? "false" : "true"}
        >
          <img
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover rounded-3xl"
            style={{ display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}

export default AutoSlide
