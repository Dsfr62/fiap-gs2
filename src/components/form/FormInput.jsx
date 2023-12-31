const FormInput = ({ type, id, value, required, placeholder, disabled }) => {
  const defaultStyle = "p-1 border border-black bg-white rounded text-black";

  //TODO: Se quiser alterar estado e salvar, colocar aqui
  return (
    <input
      id={id}
      type={type}
      value={value}
      className={`${defaultStyle}`}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default FormInput;
