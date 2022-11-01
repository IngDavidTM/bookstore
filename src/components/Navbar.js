import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <header>Bookstore CMS</header>
    <ul>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </ul>
  </nav>
);

export default Navbar;
