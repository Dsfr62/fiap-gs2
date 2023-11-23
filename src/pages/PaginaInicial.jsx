import { useEffect, useState } from "react";
import { Banner } from "../components/banner";
import { Form } from "../components/form";
import contactSVG from "../assets/svgs/contact.svg";

const PaginaInicialPage = () => {
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <Banner.Container variantSize="xl" variantColor="positive">
        <Banner.Title>Página Inicial</Banner.Title>
        <Banner.TextCarousel>
          <Banner.Text>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio quidem quo reiciendis aperiam non voluptatem, blanditiis
            labore nesciunt? Perferendis exercitationem consectetur sed pariatur
            deleniti, eaque aliquid officia inventore beatae adipisci.
          </Banner.Text>
          <Banner.Text>
            2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis ipsa, tempore nam animi fugiat, dolorum accusamus,
            cumque voluptas deleniti praesentium facilis at beatae corporis.
            Odit, reprehenderit id? Quas, possimus excepturi.
          </Banner.Text>
          <Banner.Text>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident, officia praesentium dolore cupiditate numquam
            voluptatibus. Illo, esse cumque. Tempora dolorum iusto quisquam
            tenetur, inventore dignissimos nulla labore aut cupiditate quis?
          </Banner.Text>
        </Banner.TextCarousel>
      </Banner.Container>
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
