import { Link, Outlet } from "react-router-dom";
import { routes } from "../routes";

const Navbar = () => {
  return (
    <>
      <nav>
        <h3>Logo</h3>
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <Link to={route.path}>{route.id}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
