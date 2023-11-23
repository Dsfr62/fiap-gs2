export const BannerText = ({ children }) => {
  const defaultStyle = "text-sm md:text-lg font-medium";

  return <p className={`${defaultStyle}`}>{children}</p>;
};
