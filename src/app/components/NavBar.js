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
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__user">
            <Link to="/user">{<p>{user.name}</p>}</Link>
          </li>
          <Link className="navbar__points" to="/user">
            <p>{user.points}</p>
            <img src={coin} alt="coin" />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
