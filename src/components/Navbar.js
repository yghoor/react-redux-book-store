import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="page-navbar">
      <h1>Bookstore</h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" activeclassname="active">BOOKS</NavLink>
        </li>

        <li>
          <NavLink to="/categories" activeclassname="active">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
