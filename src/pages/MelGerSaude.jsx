import { Banner } from "../components/Banner";
import { Section } from "../components/Section";
import CadastroBanner from "../components/CadastroBanner";
import saude_geral_1_img from "../assets/saude_geral_1.png";
import saude_geral_2_img from "../assets/saude_geral_2.png";

const MelGerSaudePage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>Melhoria geral da saúde</Banner.Title>
        <Banner.Text>
          A melhoria da saúde global é um desafio complexo, abrangendo desde o combate a doenças infecciosas e crônicas
          até a promoção do bem-estar mental e físico. Enfrentamos desigualdades significativas no acesso a cuidados de
          saúde, nutrição adequada e ambientes saudáveis, especialmente em comunidades de baixa renda.
        </Banner.Text>
      </Banner.Container>
      <Section.Container>
        <Section.Image maskImageFileName="clip-path-1" src={saude_geral_1_img} />
        <Section.TextContainer className="average:order-first average:text-left ">
          <Section.Title text="Impacto da Tecnologia no Problema" />
          <Section.Text text="As tecnologias emergentes têm o potencial de transformar a saúde global. Com a digitalização dos serviços de saúde, desde registros eletrônicos de saúde até plataformas de e-Learning em bem-estar, estamos vendo um acesso mais amplo e equitativo à informação e ao cuidado. A IA e a análise de dados estão fornecendo insights críticos para melhorar os resultados de saúde em larga escala." />
        </Section.TextContainer>
      </Section.Container>

      <Section.Container className=" bg-[#f8faff]">
        <Section.Image maskImageFileName="clip-path-2" src={saude_geral_2_img} />
        <Section.TextContainer className="average:text-right ">
          <Section.Title text="Soluções Tecnológicas e o Caminho à Frente" />
          <Section.Text text="Para melhorar a saúde global, devemos aproveitar o poder da tecnologia para inovar em prevenção, diagnóstico e tratamento. Isso inclui soluções como telessaúde para comunidades remotas, programas de saúde móvel para educação e prevenção, e uso de dados para políticas de saúde baseadas em evidências. Com a colaboração global e o investimento em tecnologias de saúde, podemos criar um futuro mais saudável para todos." />
        </Section.TextContainer>
      </Section.Container>

      <CadastroBanner />
    </div>
  );
};

export default MelGerSaudePage;
