export const BannerText = ({ children }) => {
  const defaultStyle = "text-white text-center text-lg font-medium";

  return <p className={`${defaultStyle}`}>{children}</p>;
};
