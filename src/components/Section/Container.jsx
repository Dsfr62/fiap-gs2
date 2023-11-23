export const SectionContainer = ({ children }) => {
  return (
    <section className="w-100 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-x-8 min-[1200px]:w-[1200px] max-[1200px]:w-[100%] py-4">{children}</div>
    </section>
  );
};
