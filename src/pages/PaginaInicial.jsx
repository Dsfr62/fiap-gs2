import { useEffect, useState } from "react";
import { Banner } from "../components/banner";
import { Form } from "../components/form";
import contactSVG from "../assets/svgs/contact.svg";
import LinkElement from "../components/Link";
import { routes } from "../routes";
import { Section } from "../components/Section";
import home_slogan from "../assets/home_slogan.png";
import logo_white_bg from "../assets/logo_white_bg.png";
import { shuffleArray } from "../utils/functions";
import { members } from "../utils/members";

const PaginaInicialPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const membersShuffled = shuffleArray(members)
    .map((member) => `${member[0]} (${member[1]})`)
    .join(", ");
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
      document.getElementById("form-cadastro").scrollIntoView({ behavior: "smooth" });
    };
    if (window.location.hash === "#form-cadastro") {
      scrollToForm();
    }
  }, []);

  //TODO: adicionar video pitch
  //TODO: adicionar primeira seção de slogan e imagem
  return (
    <div>
      <Section.Container className="bg-[#f8faff]">
        <Section.Image maskImageFileName="clip-path-2" src={home_slogan} />
        <Section.TextContainer className="average:text-right">
          <Section.Title text="Conectando Você à Saúde do Futuro" />
          <Section.Text text="WellnessChat é sua ponte para o bem-estar personalizado, com a sabedoria da IA ao seu alcance." />
        </Section.TextContainer>
      </Section.Container>
      <Banner.Container variantSize="md" variantColor="primary">
        <Banner.Title>Temas</Banner.Title>
        <Banner.TextCarousel>
          {themes.map((r) => (
            <Banner.Text key={r.id}>
              <LinkElement href={r.path}>{r.id}</LinkElement>
            </Banner.Text>
          ))}
        </Banner.TextCarousel>
      </Banner.Container>
      <div className="flex justify-center p-8">
        <p className="text-center w-full text-4xl">Video Pitch</p>
      </div>
      <Section.Container>
        <div className="rounded-full object-cover overflow-hidden w-10/12 average:w-100">
          <Section.Image className="scale-150" src={logo_white_bg} />
        </div>
        <Section.TextContainer className="mt-[30px] average:mt-0 average:text-right average:order-last">
          <Section.Title text="Conheça Nossa Equipe de Visionários" />
          <Section.Text
            text={`Por trás do WellnessChat está um grupo dedicado de inovadores em tecnologia e saúde. ${membersShuffled}. Juntos, estamos redefinindo o cuidado preventivo.`}
          />
        </Section.TextContainer>
      </Section.Container>
      <div className="w-full flex justify-center items-start px-4 py-6 md:pb-4 md:pt-8 bg-gray-default">
        <Form.Container id="form-cadastro" onSubmit={(e) => handleSubmit(e)} isLoading={isLoading}>
          <Form.Title>
            Fale Conosco
            <Form.SubTitle>
              Preencha o formulário para se cadastrar, enviar dúvidas e sugestões e receber acesso grátis à nossa
              plataforma durante 30 dias.
            </Form.SubTitle>
          </Form.Title>
          <Form.InputContainer>
            <Form.Label htmlFor="nome">Nome</Form.Label>
            <Form.Input id="nome" type="text" placeholder="Digite aqui" required disabled={isLoading} />
          </Form.InputContainer>
          <Form.InputContainer>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input id="email" type="text" placeholder="Digite aqui" required disabled={isLoading} />
          </Form.InputContainer>
          <Form.InputContainer>
            <Form.Label htmlFor="descricao">Fale sobre você</Form.Label>
            <Form.Input id="descricao" type="text" placeholder="Digite aqui" required disabled={isLoading} />
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
