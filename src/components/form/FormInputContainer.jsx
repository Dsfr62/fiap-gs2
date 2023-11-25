const FormInputContainer = ({ children }) => {
  const defaultStyle = "w-full md:w-80 flex flex-col";
  return <div className={`${defaultStyle}`}>{children}</div>;
};

export default FormInputContainer;
