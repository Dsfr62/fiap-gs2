const FormContainer = ({ children, onSubmit, id, isLoading }) => {
  const defaultStyle =
    "flex flex-col gap-4 w-full md:w-[500px] h-auto text-black";
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
