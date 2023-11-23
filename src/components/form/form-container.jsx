const FormContainer = ({ children, onSubmit, id, isLoading }) => {
  const defaultStyle =
    "flex flex-col gap-4 w-full h-auto p-4 bg-gray-default text-black";
  return (
    <form
      id={id}
      onSubmit={(e) => onSubmit(e)}
      className={`${defaultStyle} ${isLoading && "animate-pulse"}`}
    >
      {children}
    </form>
  );
};

export default FormContainer;
