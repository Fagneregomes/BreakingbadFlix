import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Dimmer, Loader, Input, Pagination, PaginationProps } from 'semantic-ui-react';

import { isNumber } from 'util';
import { Container, Subtitle, MenuContent, Content, TextFilter, NoSearch } from './styles';
import Card from '~/components/Card';

// Redux
import { ApplicationState } from '~/store';
import { characterRequest } from '~/store/modules/characters/actions';
import { Character } from '~/store/modules/characters/types';

export default function Personagens() {
  const characters = useSelector((state: ApplicationState) => state.characters);
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Character[]>();
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();

  const totalPage = data ? Math.ceil(characters.totalPage / 10) : 0;

  useEffect(() => {
    dispatch(characterRequest('', 10, offset));
  }, [dispatch, offset]);

  useEffect(() => {
    const temp = characters.data
      .filter(
        item =>
          item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
          item.status.includes(status)
      )
      .map(element => element);

    setData(temp);
  }, [characters, characters.data, search, setData, status]);

  function handlePageChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    datapage: PaginationProps
  ) {
    const currentPage = isNumber(datapage.activePage) ? datapage.activePage : 0;
    setActivePage(currentPage);

    if (currentPage <= totalPage && activePage < currentPage) {
      setOffset(currentPage * 10 - 10);
      dispatch(characterRequest('', 10, currentPage * 10 - 10));
    }

    if (currentPage > 0 && activePage > currentPage) {
      setOffset(currentPage * 10 - 10);
      dispatch(characterRequest('', 10, currentPage * 10 - 10));
    }
  }

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
      {data && data.length === 0 && !characters.loading && (
        <Content>
          <NoSearch>Não resultado para "{search}"</NoSearch>
        </Content>
      )}
      <Content>{data && data.map(item => <Card key={item.char_id} character={item} />)}</Content>
      <Content>
        {data && data.length > 0 && (
          <Pagination
            activePage={activePage}
            onPageChange={handlePageChange}
            totalPages={totalPage}
          />
        )}
      </Content>
    </Container>
  );
}
