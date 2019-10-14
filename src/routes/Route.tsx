import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '~/layouts/Default';

import { store } from '~/store';

export default function RouteWrapper(props: any) {
  const { component: Component, isPrivate, ...rest } = props;

  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = DefaultLayout;
  return (
    <Route
      {...rest}
      render={(propsComp: any) => (
        <Layout>
          <Component {...propsComp} />
        </Layout>
      )}
    />
  );
}
