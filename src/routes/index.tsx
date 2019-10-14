import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Pages components
import Episodios from '~/pages/Episodios';
import Personagens from '~/pages/Personagens';
import Sugestoes from '~/pages/Sugestoes';

export default function Routes() {
  return (
    <Switch>
      {/* Routes publics */}
      <Route path="/" exact component={Episodios} />
      <Route path="/Personagens" exact component={Personagens} />
      <Route path="/Sugestoes" exact component={Sugestoes} />
    </Switch>
  );
}
