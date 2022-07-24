import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

import './NavBar.scss';
import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';

const NavBar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="navbar__menu">
        <li className="navbar__user">
          <Link to="/user">{<p>{user.name}</p>}</Link>
        </li>
        <li className="navbar__points">
          <p>{user.points}</p>
          <img src={coin} alt="coin" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;