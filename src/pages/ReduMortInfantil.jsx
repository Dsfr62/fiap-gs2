import { Banner } from "../components/banner";
import CadastroBanner from "../components/cadastro-banner";

const ReduMortInfantilPage = () => {
  return (
    <div>
      <Banner.Container variantSize="lg">
        <Banner.Title>Redução da Mortalidade Infantil</Banner.Title>
        <Banner.Text>
          A mortalidade infantil é uma das questões mais desafiadoras na saúde
          global, com 26.052 mortes por 1000 nascimentos vivos registradas em
          2023. Este problema é particularmente grave em regiões com acesso
          limitado a cuidados de saúde de qualidade. A falta de informação,
          infraestrutura inadequada e desigualdades socioeconômicas contribuem
          significativamente para essas taxas alarmantes.
        </Banner.Text>
      </Banner.Container>
      <h3 className="text-xl uppercase font-bold">
        Impacto da Tecnologia no Problema
      </h3>
      <p>
        Com o avanço da tecnologia, estamos vendo um impacto positivo na redução
        da mortalidade infantil. Soluções como aplicativos de saúde, plataformas
        de telemedicina e dispositivos de monitoramento estão melhorando o
        acesso a cuidados pré e pós-natais. Essas tecnologias fornecem
        informações vitais e facilitam o diagnóstico precoce de condições
        perigosas, tanto para mães quanto para bebês.
      </p>
      <p>Imagem</p>

      <h3 className="text-xl uppercase font-bold">
        Soluções Tecnológicas e o Caminho à Frente
      </h3>
      <p>
        A tecnologia não apenas melhora o acesso a informações e serviços de
        saúde, mas também capacita comunidades com educação e recursos para o
        cuidado infantil. Iniciativas como a disseminação de conhecimento sobre
        nutrição infantil, práticas de higiene e importância da vacinação via
        plataformas digitais são essenciais. Ao integrar essas soluções
        tecnológicas, podemos dar passos significativos em direção a um futuro
        onde cada criança tem a chance de um começo de vida saudável.
      </p>
      <p>Imagem</p>
      <CadastroBanner />
    </div>
  );
};

export default ReduMortInfantilPage;
