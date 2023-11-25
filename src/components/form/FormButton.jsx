import Button from "../Button";

const FormButton = ({ children }) => {
  return (
    <Button type="submit" width="w-full md:w-80" variantStyle="primary">
      {children}
    </Button>
  );
};

export default FormButton;
