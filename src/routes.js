import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

export const routes = [
  { path: "/", element: <Home />, id: "Página Inicial" },
  {
    path: "/reducao-mortalidade-infantil",
    element: <h1>Redução da mortalidade infantil</h1>,
    id: "Redução da mortalidade infantil",
  },
  {
    path: "/combates-a-doencas-transmissiveis",
    element: <h1>Combate a doenças transmissiveis</h1>,
    id: "Combate a doenças transmissiveis",
  },
  {
    path: "/prevencao-e-tratamento-de-doencas-nao-transmissiveis",
    element: <h1>Prevenção e tratamento de doenças não transmissiveis</h1>,
    id: "Prevenção e tratamento de doenças não transmissíveis",
  },
  {
    path: "/melhoria-geral-da-saude",
    element: <h1>Melhoria geral da saúde</h1>,
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
