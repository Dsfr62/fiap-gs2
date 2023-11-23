import { useState } from "react";
import { Link, useHref } from "react-router-dom";
import { routes } from "../routes";
import BurgerSvg from "./icons/BurgerSvg";
import CloseSvg from "./icons/CloseSvg";

const Navbar = () => {
  const pathname = useHref();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#fafafb] p-2 w-full h-[64px] flex items-center justify-center flex-col lg:flex-row lg:justify-start">
      {/* Bloco contendo a Logo e o botão de abrir menu que aparece quando a tela está pequena */}

      <div className="w-full px-4 flex justify-between items-center lg:w-auto">
        <Link
          className="text-primary-default text-2xl font-bold no-underline block"
          to="/"
        >
          WellnessChat
        </Link>
        <button
          className="flex cursor-pointer lg:hidden"
          onClick={handleToggleNavbar}
        >
          <p className="mr-2 text-black">{isOpen ? "Fechar" : "Menu"}</p>
          <div className="h-6 w-6 flex justify-center items-center rounded-full bg-black bg-opacity-10">
            {isOpen ? <CloseSvg /> : <BurgerSvg />}
          </div>
        </button>
      </div>

      {/* Bloco contendo um fundo escuro que aparece quando o menu está aberto */}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full absolute top-[64px] bg-black bg-opacity-50 h-[calc(100%-64px)] lg:hidden`}
        onClick={closeNavbar}
      />

      {/* Bloco contendo os links do menu */}

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } w-[280px] flex-col absolute top-[64px] right-0 h-[calc(100%-64px)] z-10 bg-[#fafafb] lg:flex lg:w-auto lg:flex-row lg:items-center lg:static lg:bg-transparent lg:h-auto lg:z-0`}
      >
        <ul className="list-reset flex flex-col mt-2 lg:mt-0 lg:flex-row lg:items-center">
          {routes.map(
            (route) =>
              route.path !== "/" && (
                <li key={route.id} className="mr-3 px-4">
                  <Link
                    to={route.path}
                    className={`inline-block border-b py-2 w-full font-semibold hover:text-primary-default ${
                      pathname === route.path
                        ? "text-primary-default"
                        : "text-black"
                    }`}
                    onClick={closeNavbar}
                  >
                    {route.id}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
