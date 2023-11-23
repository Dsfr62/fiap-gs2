export const BannerContainer = ({
  children,
  variantSize,
  variantColor = "primary",
}) => {
  const defaultStyle =
    "h-auto w-full py-4 px-8 flex flex-col justify-center items-center gap-2";

  const getVariantSize = () => {
    switch (variantSize) {
      case "sm":
        return "md:h-40";
      case "md":
        return "md:h-56";
      case "lg":
        return "md:h-72";
    }
  };

  const getVariantColor = () => {
    switch (variantColor) {
      case "primary":
        return "bg-primary-default";
      case "secondary":
        return "bg-secondary-default";
    }
  };

  return (
    <div className={`${defaultStyle} ${getVariantSize()} ${getVariantColor()}`}>
      {children}
    </div>
  );
};
