import { useEffect, useState } from "react";
import { Banner } from "../components/banner";
import { Form } from "../components/form";
import contactSVG from "../assets/svgs/contact.svg";
import LinkElement from "../components/Link";
import { routes } from "../routes";

const PaginaInicialPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const themes = routes.slice(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Cadastro enviado com sucesso!");
    }, 5000);
  };

  useEffect(() => {
    const scrollToForm = () => {
      document
        .getElementById("form-cadastro")
        .scrollIntoView({ behavior: "smooth" });
    };
    if (window.location.hash === "#form-cadastro") {
      scrollToForm();
    }
  }, []);

  //TODO: adicionar video pitch
  //TODO: adicionar primeira seção de slogan e imagem
  return (
    <div>
      <div className="flex justify-center p-8">
        <h1 className="text-center w-full text-4xl">
          Imagem e slogan da página inicial
        </h1>
      </div>
      <Banner.Container variantSize="md" variantColor="primary">
        <Banner.Title>Temas</Banner.Title>
        <Banner.TextCarousel>
          {themes.map((r) => (
            <Banner.Text>
              <LinkElement key={`link ${r.id}`} href={r.path}>
                {r.id}
              </LinkElement>
            </Banner.Text>
          ))}
        </Banner.TextCarousel>
      </Banner.Container>
      <div className="flex justify-center p-8">
        <p className="text-center w-full text-4xl">Video Pitch</p>
      </div>
      <div className="w-full flex justify-center items-start px-4 py-6 md:pb-4 md:pt-8 bg-gray-default">
        <Form.Container
          id="form-cadastro"
          onSubmit={(e) => handleSubmit(e)}
          isLoading={isLoading}
        >
          <Form.Title>
            Cadastre-se
            <Form.SubTitle>
              Fale Conosco para se cadastrar e receber acesso grátis à nossa
              plataforma durante 30 dias.
            </Form.SubTitle>
          </Form.Title>
          <Form.InputContainer>
            <Form.Label htmlFor="nome">Nome</Form.Label>
            <Form.Input
              id="nome"
              type="text"
              placeholder="Digite aqui"
              required
              disabled={isLoading}
            />
          </Form.InputContainer>
          <Form.InputContainer>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input
              id="email"
              type="text"
              placeholder="Digite aqui"
              required
              disabled={isLoading}
            />
          </Form.InputContainer>
          <Form.InputContainer>
            <Form.Label htmlFor="descricao">Fale sobre você</Form.Label>
            <Form.Input
              id="descricao"
              type="text"
              placeholder="Digite aqui"
              required
              disabled={isLoading}
            />
          </Form.InputContainer>
          <Form.Button>Enviar</Form.Button>
        </Form.Container>
        <img
          src={contactSVG}
          className="hidden invisible md:visible md:block"
          alt="contact-us"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default PaginaInicialPage;
