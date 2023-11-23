import { twMerge } from "tailwind-merge";

export const SectionImage = ({ src, ...rest }) => {
  return (
    <div className="relative">
      <img style={{}} className={twMerge("w-full h-auto object-cover image-masked", rest.className)} src={src} />
    </div>
  );
};
