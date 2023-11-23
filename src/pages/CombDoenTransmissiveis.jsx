import { Banner } from "../components/banner";
import CadastroBanner from "../components/cadastro-banner";

const CombDoenTransmissiveisPage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>Combate as doenças transmissíveis</Banner.Title>
        <Banner.Text>
          As doenças transmissíveis representam uma ameaça constante à saúde
          global. Com a rápida disseminação de infecções como a COVID-19 e
          outras doenças tropicais negligenciadas, a necessidade de soluções
          eficazes é mais urgente do que nunca. Estas doenças afetam
          desproporcionalmente as populações em países de baixa e média renda,
          onde o acesso limitado a cuidados de saúde e informações complica a
          situação.
        </Banner.Text>
      </Banner.Container>
      <h3 className="text-xl uppercase font-bold">
        Impacto da Tecnologia no Problema
      </h3>
      <p>
        A tecnologia está desempenhando um papel fundamental no combate a
        doenças transmissíveis. Através do uso de big data e inteligência
        artificial, estamos melhorando a vigilância e o rastreamento de surtos
        de doenças. Além disso, aplicativos móveis e plataformas digitais estão
        ampliando o alcance de campanhas de conscientização e educação sobre
        medidas preventivas e práticas de higiene.
      </p>
      <p>Imagem</p>

      <h3 className="text-xl uppercase font-bold">
        Soluções Tecnológicas e o Caminho à Frente
      </h3>
      <p>
        Para combater efetivamente as doenças transmissíveis, a integração de
        tecnologias digitais na saúde pública é crucial. Isso inclui o uso de
        sistemas de alerta precoce, melhoria na distribuição de vacinas e
        medicamentos através de cadeias de suprimentos digitais, e o
        fortalecimento de redes de comunicação para educação em saúde. Estas
        abordagens tecnológicas são essenciais para controlar surtos e proteger
        populações vulneráveis.
      </p>
      <p>Imagem</p>
      <CadastroBanner />
    </div>
  );
};

export default CombDoenTransmissiveisPage;
