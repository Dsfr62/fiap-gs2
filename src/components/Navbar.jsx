import { useState } from "react";
import { Link, Outlet, useHref } from "react-router-dom";
import { routes } from "../routes";
import "../styles/navbar.css";

const Navbar = () => {
  const pathname = useHref();
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h3 className="navbar-brand">FIAP Telemedicina</h3>

        <ul className={`${openNav ? "navbar-open" : "navbar-menu"}`}>
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                to={route.path}
                className={`${
                  pathname == route.path
                    ? "navbar-item-selected"
                    : "navbar-item"
                }`}
              >
                {route.id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
