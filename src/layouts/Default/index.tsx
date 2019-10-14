import React from 'react';

import { Header } from '~/components';

import { Wrapper } from './styles';

export default function DefaultLayout(props: any) {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
