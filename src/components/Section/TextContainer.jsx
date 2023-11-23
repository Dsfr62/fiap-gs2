import { twMerge } from "tailwind-merge";

export const SectionTextContainer = ({ children, ...rest }) => {
  return <div className={twMerge("flex flex-col justify-center", rest.className)}>{children}</div>;
};
