import { Banner } from "../components/banner";
import CadastroBanner from "../components/cadastro-banner";

const PrevTratDoencasPage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>
          Prevenção e tratamento de doenças não transmissíveis
        </Banner.Title>
        <Banner.Text>
          Doenças não transmissíveis (NCDs), como doenças cardíacas, câncer e
          diabetes, são as principais causas de morte no mundo, representando
          74% de todas as mortes. Estas doenças são particularmente prevalentes
          em países de baixa e média renda e são frequentemente agravadas por
          fatores como falta de acesso a cuidados de saúde e informações
          adequadas sobre estilos de vida saudáveis.
        </Banner.Text>
      </Banner.Container>
      <h3 className="text-xl uppercase font-bold">
        Impacto da Tecnologia no Problema
      </h3>
      <p>
        A inovação tecnológica está transformando a prevenção e o tratamento de
        NCDs. Ferramentas de monitoramento de saúde, aplicativos de
        gerenciamento de doenças crônicas e plataformas de telemedicina estão
        permitindo um acompanhamento mais eficaz e personalizado dos pacientes.
        Além disso, a análise de dados de saúde está ajudando profissionais a
        identificar fatores de risco e intervir mais cedo.
      </p>
      <p>Imagem</p>

      <h3 className="text-xl uppercase font-bold">
        Soluções Tecnológicas e o Caminho à Frente
      </h3>
      <p>
        Para reduzir o impacto das NCDs, é essencial integrar tecnologias
        digitais na saúde preventiva e no tratamento. Isso inclui a promoção de
        estilos de vida saudáveis através de aplicativos educacionais, melhoria
        no acesso a serviços de saúde digital e o uso de dados para informar
        políticas de saúde pública. Com estas abordagens, podemos avançar em
        direção a um futuro com menos incidência de doenças crônicas e maior
        qualidade de vida.
      </p>
      <p>Imagem</p>
      <CadastroBanner />
    </div>
  );
};

export default PrevTratDoencasPage;
