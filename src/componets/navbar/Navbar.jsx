import './navbar.css';
import { Link } from "react-router-dom"; // <- correcto


export const Navbar = () => {
  return (
    <nav className='cont-nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to="/">Inventario</Link>
        </li>
        <div className='nav-right'>
          <li className='nav-item'>
            <Link to="/enviado">Envíos</Link>
          </li>
          <li className='nav-item'>
            <Link to="/inventario/retiro">Retiro</Link>
          </li>
          <li className='nav-item'>
            <Link to="/inventario/cambio">Cambio</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
