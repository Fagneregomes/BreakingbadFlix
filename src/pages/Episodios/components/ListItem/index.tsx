import React from 'react';

import { List } from 'semantic-ui-react';

import { Header, Content, Box, BoxFlex } from './styles';
import { Episodes } from '~/store/modules/episodes/types';

interface OwnProps {
  episode: Episodes;
}

export default function ListItem({ episode }: OwnProps) {
  return (
    <List.Item>
      <List.Content>
        <Content>
          <Box>
            <Header>{episode.title}</Header>
            <span>{`Season ${episode.season} - Episodio ${episode.episode}`}</span>
          </Box>
          <Box>
            <span>
              Data da estreia: <br />
              {episode.air_date}
            </span>
          </Box>
          <Box>
            <BoxFlex>
              Personagens:
              {episode.characters.map(nome => (
                <span>{nome}</span>
              ))}
            </BoxFlex>
          </Box>
        </Content>
      </List.Content>
    </List.Item>
  );
}
