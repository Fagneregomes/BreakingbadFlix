import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '~/layouts/Default';

export default function RouteWrapper(props: any) {
  const { component: Component, isPrivate, ...rest } = props;

  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
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
