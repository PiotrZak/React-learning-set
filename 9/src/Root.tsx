import React from 'react';
import { Provider } from 'react-redux';
import store from 'duck/store';

const Root: React.FC = props => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
