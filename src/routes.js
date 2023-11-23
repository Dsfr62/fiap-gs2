import { Routes, Route } from "react-router-dom";
import PaginaInicialPage from "./pages/PaginaInicial";
import ReduMortInfantilPage from "./pages/ReduMortInfantil";
import CombDoenTransmissiveisPage from "./pages/CombDoenTransmissiveis";
import PrevTratDoencasPage from "./pages/PrevTratDoencas";
import MelGerSaudePage from "./pages/MelGerSaude";
import Layout from "./components/Layout";

export const routes = [
  { path: "/", element: <PaginaInicialPage />, id: "Página Inicial" },
  {
    path: "/reducao-mortalidade-infantil",
    element: <ReduMortInfantilPage />,
    id: "Redução da mortalidade infantil",
  },
  {
    path: "/combates-a-doencas-transmissiveis",
    element: <CombDoenTransmissiveisPage />,
    id: "Combate a doenças transmissiveis",
  },
  {
    path: "/prevencao-e-tratamento-de-doencas-nao-transmissiveis",
    element: <PrevTratDoencasPage />,
    id: "Prevenção e tratamento de doenças não transmissíveis",
  },
  {
    path: "/melhoria-geral-da-saude",
    element: <MelGerSaudePage />,
    id: "Melhoria geral da saúde",
  },
];

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
