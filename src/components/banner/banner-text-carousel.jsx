import { useState } from "react";

export const BannerTextCarousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const defaultStyle = "flex flex-col justify-between h-full items-center";

  const handleNext = () => {
    setCurrent((current + 1) % children.length);
  };

  const handlePrevious = () => {
    setCurrent((current - 1 + children.length) % children.length);
  };

  return (
    <div className={`${defaultStyle}`}>
      {children[current]}
      <div className="flex gap-4 h-auto items-center">
        <p
          className="text-white cursor-pointer ease-linear transition-all hover:animate-pulse"
          onClick={handlePrevious}
        >
          Anterior
        </p>
        <div className="flex gap-1 items-center">
          {children.map((c, i) => (
            <p
              key={i}
              className={`py-0.5 px-1.5 rounded-full ${
                current == i ? "bg-white" : "bg-gray-default bg-opacity-40"
              }`}
            ></p>
          ))}
        </div>
        <p
          className="text-white cursor-pointer ease-linear transition-all hover:animate-pulse"
          onClick={handleNext}
        >
          Próximo
        </p>
      </div>
    </div>
  );
};
