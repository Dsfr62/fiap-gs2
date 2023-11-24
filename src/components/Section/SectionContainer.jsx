import { twMerge } from "tailwind-merge";

export const SectionContainer = ({ children, ...rest }) => {
  return (
    <section className={twMerge("w-100 flex items-center justify-center", rest.className)}>
      <div className="grid grid-cols-1 average:grid-cols-2 gap-x-8 min-[1200px]:w-[1200px] max-[1200px]:w-[100%] py-4 mb-[30px]">
        {children}
      </div>
    </section>
  );
};
