import { Section } from "../components/Section";
import { Banner } from "../components/Banner";
import CadastroBanner from "../components/CadastroBanner";
import doencas_transmissiveis_1_img from "../assets/doencas_transmissiveis_1.png";
import doencas_transmissiveis_2_img from "../assets/doencas_transmissiveis_2.png";

const CombDoenTransmissiveisPage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>Combate as doenças transmissíveis</Banner.Title>
        <Banner.Text>
          As doenças transmissíveis representam uma ameaça constante à saúde global. Com a rápida disseminação de
          infecções como a COVID-19 e outras doenças tropicais negligenciadas, a necessidade de soluções eficazes é mais
          urgente do que nunca. Estas doenças afetam desproporcionalmente as populações em países de baixa e média
          renda, onde o acesso limitado a cuidados de saúde e informações complica a situação.
        </Banner.Text>
      </Banner.Container>
      <Section.Container>
        <Section.Image maskImageFileName="clip-path-2" src={doencas_transmissiveis_2_img} />
        <Section.TextContainer className="average:order-first average:text-left ">
          <Section.Title text="Soluções Tecnológicas e o Caminho à Frente" />
          <Section.Text text="Para combater efetivamente as doenças transmissíveis, a integração de tecnologias digitais na saúde pública écrucial. Isso inclui o uso de sistemas de alerta precoce, melhoria na distribuição de vacinas e medicamentos através de cadeias de suprimentos digitais, e o fortalecimento de redes de comunicação para educação em saúde. Estas abordagens tecnológicas são essenciais para controlar surtos e proteger populações vulneráveis." />
        </Section.TextContainer>
      </Section.Container>
      <Section.Container className=" bg-[#f8faff]">
        <Section.Image maskImageFileName="clip-path-1" src={doencas_transmissiveis_1_img} />
        <Section.TextContainer className="average:text-right ">
          <Section.Title text="Impacto da Tecnologia no Problema" />
          <Section.Text text="A tecnologia está desempenhando um papel fundamental no combate a doenças transmissíveis. Através do uso de big data e inteligência artificial, estamos melhorando a vigilância e o rastreamento de surtos de doenças. Além disso, aplicativos móveis e plataformas digitais estão ampliando o alcance de campanhas de conscientização e educação sobre medidas preventivas e práticas de higiene." />
        </Section.TextContainer>
      </Section.Container>
      <CadastroBanner />
    </div>
  );
};

export default CombDoenTransmissiveisPage;
