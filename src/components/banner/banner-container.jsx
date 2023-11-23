export const BannerContainer = ({
  children,
  variantSize,
  variantColor = "primary",
  textPosition = "center",
}) => {
  const defaultStyle = "h-auto w-full py-6 md:py-4 px-8 flex flex-col gap-2";

  const getTextPosition = () => {
    switch (textPosition) {
      case "center":
        return "text-center justify-center items-center";
      case "left":
        return "text-left justify-left items-left";
      case "right":
        return "text-right justify-right items-right";
    }
  };

  const getVariantSize = () => {
    switch (variantSize) {
      case "xs":
        return "md:h-16";
      case "sm":
        return "md:h-24";
      case "md":
        return "md:h-40";
      case "lg":
        return "md:h-56";
      case "xl":
        return "md:h-72";
    }
  };

  const getVariantColor = () => {
    switch (variantColor) {
      case "primary":
        return "text-white bg-gradient-to-b from-[5%] from-secondary-dark to-secondary-default";
      case "secondary":
        return "text-white bg-secondary-default";
      case "negative":
        return "text-black bg-white";
      case "positive":
        return "text-white bg-black";
    }
  };

  return (
    <div
      className={`${defaultStyle} ${getVariantSize()} ${getVariantColor()} ${getTextPosition()}`}
    >
      {children}
    </div>
  );
};
