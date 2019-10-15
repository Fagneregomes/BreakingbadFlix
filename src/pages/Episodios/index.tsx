import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Dimmer, Loader, Input } from 'semantic-ui-react';

import { Container, Subtitle, MenuContent, Content, TextFilter } from './styles';
import Card from '~/components/Card';

import { ApplicationState } from '~/store';
import { characterRequest } from '~/store/modules/characters/actions';
import { Character } from '~/store/modules/characters/types';

export default function Episodios() {
  const characters = useSelector((state: ApplicationState) => state.characters);
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');
  const [dataSearch, setData] = useState<Character[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterRequest(''));
  }, [dispatch]);

  useEffect(() => {
    const temp = characters.data
      .filter(
        item =>
          item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
          item.status.includes(status)
      )
      .map(element => element);

    setData(temp);
  }, [characters.data, search, setData, status]);

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
          <Input
            onChange={e => setSearch(e.target.value)}
            icon="search"
            placeholder="Pesquise os personagens"
            value={search}
          />
          &nbsp;
          {search.length > 0 && <Button onClick={() => setSearch('')} icon="close" color="red" />}
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
        {dataSearch && dataSearch.map(item => <Card key={Math.random()} character={item} />)}
      </Content>
    </Container>
  );
}
