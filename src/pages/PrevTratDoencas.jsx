import { Banner } from "../components/banner";
import { Section } from "../components/Section";
import CadastroBanner from "../components/cadastro-banner";
import ncds_1_img from "../assets/ncds_1.png";
import ncds_2_img from "../assets/ncds_2.png";

const PrevTratDoencasPage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>Prevenção e tratamento de doenças não transmissíveis</Banner.Title>
        <Banner.Text>
          Doenças não transmissíveis (NCDs), como doenças cardíacas, câncer e diabetes, são as principais causas de
          morte no mundo, representando 74% de todas as mortes. Estas doenças são particularmente prevalentes em países
          de baixa e média renda e são frequentemente agravadas por fatores como falta de acesso a cuidados de saúde e
          informações adequadas sobre estilos de vida saudáveis.
        </Banner.Text>
      </Banner.Container>
      <Section.Container>
        <Section.TextContainer className="text-left pr-[80px]">
          <Section.Title text="Impacto da Tecnologia no Problema" />
          <Section.Text text="As tecnologias emergentes têm o potencial de transformar a saúde global. Com a digitalização dos serviços de saúde, desde registros eletrônicos de saúde até plataformas de e-Learning em bem-estar, estamos vendo um acesso mais amplo e equitativo à informação e ao cuidado. A IA e a análise de dados estão fornecendo insights críticos para melhorar os resultados de saúde em larga escala." />
        </Section.TextContainer>
        <Section.Image maskImageFileName="clip-path-1" src={ncds_1_img} />
      </Section.Container>

      <Section.Container className=" bg-[#f8faff]">
        <Section.Image maskImageFileName="clip-path-2" src={ncds_2_img} />
        <Section.TextContainer className="text-right pr-[80px]">
          <Section.Title text="Soluções Tecnológicas e o Caminho à Frente" />
          <Section.Text text="Para melhorar a saúde global, devemos aproveitar o poder da tecnologia para inovar em prevenção, diagnóstico e tratamento. Isso inclui soluções como telessaúde para comunidades remotas, programas de saúde móvel para educação e prevenção, e uso de dados para políticas de saúde baseadas em evidências. Com a colaboração global e o investimento em tecnologias de saúde, podemos criar um futuro mais saudável para todos." />
        </Section.TextContainer>
      </Section.Container>
      <CadastroBanner />
    </div>
  );
};

export default PrevTratDoencasPage;
