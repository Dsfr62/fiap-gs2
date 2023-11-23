const Button = ({
  children,
  type,
  onClick,
  variantStyle = "primary",
  width,
}) => {
  const defaultStyle =
    "px-4 py-1 rounded font-bold ease-linear transition-all cursor-pointer";

  const getVariantStyle = () => {
    switch (variantStyle) {
      case "primary":
        return "bg-primary-default text-white hover:bg-opacity-80";
      case "secondary":
        return "bg-secondary-default text-white hover:bg-opacity-80";
      case "tertiary":
        return "bg-white border-2 border-primary-default text-primary-default hover:bg-primary-default hover:text-white";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${defaultStyle} ${getVariantStyle()} ${width}`}
    >
      {children}
    </button>
  );
};

export default Button;
