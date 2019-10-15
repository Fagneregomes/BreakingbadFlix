import React, { useEffect, useState } from 'react';

import { Icon } from 'semantic-ui-react';
import { Container, Title, Date, Details } from './styles';

import { Character } from '~/store/modules/characters/types';

interface OwnProps {
  character: Character;
}

export default function Card({ character }: OwnProps) {
  const [state, setState] = useState({ color: '', text: '' });

  useEffect(() => {
    switch (character.status) {
      case 'Alive':
        setState({ color: '#34fe0fbd', text: 'Vivo' });
        break;
      case 'Deceased':
        setState({ color: '#dd0b0bc7', text: 'Morto' });
        break;
      case '?':
        setState({ color: '#fff700c7', text: 'Indefinida' });
        break;
      case 'Presumed dead':
        setState({ color: '#dc73ffc4', text: 'Presumida' });
        break;

      case 'Unknown':
        setState({ color: '#d4d4d5', text: 'Desconhecido' });
        break;
      default:
        break;
    }
  }, [character.status]);

  return (
    <Container>
      <span style={{ background: state.color }}>{state.text}</span>
      <img src={character.img} alt="" width={150} height={217} />
      <Title>{character.name.substring(0, 14)}</Title>

      <Date>
        <Icon size="small" name="star" />
        {character.birthday}
      </Date>
      <Details>{character.occupation.toString().substring(0, 30)}</Details>
    </Container>
  );
}
