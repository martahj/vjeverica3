// @flow
import React from 'react';
import Header from './Header';

type Test = {
  a: string,
};

const layoutStyle: Test = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
