import { Banner } from "../components/banner";
import { Section } from "../components/Section";
import CadastroBanner from "../components/cadastro-banner";
import mortalidade_infatil_1_img from "../assets/mortalidade_infantil_1.png";
import mortalidade_infatil_2_img from "../assets/mortalidade_infantil_2.png";

const ReduMortInfantilPage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>Redução da Mortalidade Infantil</Banner.Title>
        <Banner.Text>
          A mortalidade infantil é uma das questões mais desafiadoras na saúde global, com 26.052 mortes por 1000
          nascimentos vivos registradas em 2023. Este problema é particularmente grave em regiões com acesso limitado a
          cuidados de saúde de qualidade. A falta de informação, infraestrutura inadequada e desigualdades
          socioeconômicas contribuem significativamente para essas taxas alarmantes.
        </Banner.Text>
      </Banner.Container>

      <Section.Container>
        <Section.Image maskImageFileName="clip-path-1" src={mortalidade_infatil_1_img} />
        <Section.TextContainer className="average:text-right ">
          <Section.Title text="Impacto da Tecnologia no Problema" />
          <Section.Text text="Com o avanço da tecnologia, estamos vendo um impacto positivo na redução da mortalidade infantil. Soluções como aplicativos de saúde, plataformas de telemedicina e dispositivos de monitoramento estão melhorando o acesso a cuidados pré e pós-natais. Essas tecnologias fornecem informações vitais e facilitam o diagnóstico precoce de condições perigosas, tanto para mães quanto para bebês." />
        </Section.TextContainer>
      </Section.Container>

      <Section.Container className="bg-[#f8faff]">
        <Section.Image maskImageFileName="clip-path-2" src={mortalidade_infatil_2_img} />
        <Section.TextContainer className="average:order-first average:text-left ">
          <Section.Title text="Soluções Tecnológicas e o Caminho à Frente" />
          <Section.Text text="A tecnologia não apenas melhora o acesso a informações e serviços de saúde, mas também capacita comunidades com educação e recursos para o cuidado infantil. Iniciativas como a disseminação de conhecimento sobre nutrição infantil, práticas de higiene e importância da vacinação via plataformas digitais são essenciais. Ao integrar essas soluções tecnológicas, podemos dar passos significativos em direção a um futuro onde cada criança tem a chance de um começo de vida saudável." />
        </Section.TextContainer>
      </Section.Container>

      <CadastroBanner />
    </div>
  );
};

export default ReduMortInfantilPage;
