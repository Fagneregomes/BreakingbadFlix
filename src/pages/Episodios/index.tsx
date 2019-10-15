import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Dimmer, Loader } from 'semantic-ui-react';

import { Container, Subtitle, MenuContent, Content, TextFilter } from './styles';
import Card from '~/components/Card';

import { ApplicationState } from '~/store';
import { characterRequest } from '~/store/modules/characters/actions';

export default function Episodios() {
  const characters = useSelector((state: ApplicationState) => state.characters);
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterRequest(''));
  }, [dispatch]);

  return (
    <Container>
      <MenuContent>
        <Subtitle>Personagens</Subtitle>
        <div>
          <TextFilter>Filtre por: </TextFilter>
          <Button
            active={status === 'Alive'}
            onClick={() => setStatus('Alive')}
            inverted
            color="green"
          >
            Vivo
          </Button>
          <Button
            active={status === 'Deceased'}
            onClick={() => setStatus('Deceased')}
            inverted
            color="red"
          >
            Morto
          </Button>
          <Button active={status === '?'} onClick={() => setStatus('?')} inverted color="olive">
            Indefinida
          </Button>
          <Button
            active={status === 'Presumed dead'}
            onClick={() => setStatus('Presumed dead')}
            inverted
            color="purple"
          >
            Morte Presumida
          </Button>
          <Button active={status === ''} onClick={() => setStatus('')} inverted>
            Todos
          </Button>
        </div>
      </MenuContent>
      {characters.loading && (
        <Content>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Content>
      )}
      <Content>
        {characters.data
          .filter(item => item.status.includes(status))
          .map(element => (
            <Card key={Math.random()} character={element} />
          ))}
      </Content>
    </Container>
  );
}
