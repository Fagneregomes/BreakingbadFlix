import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from 'semantic-ui-react';

import logo from '~/assets/icons/breakingbad.png';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" height={100} />
          <Link to="/">Episodios</Link>
          <Link to="/Personagens">Personagens</Link>
          <Link to="/Sugestoes">Sugestões</Link>
        </nav>

        <aside>
          <Input icon="search" placeholder="Pesquise os personagens" />
        </aside>
      </Content>
    </Container>
  );
}
