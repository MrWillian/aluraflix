import React from 'react';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Logo from '../../assets/img/Logo.png';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="AluraFlix" className="Logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
      
    </nav>
  );
}

export default Menu;
