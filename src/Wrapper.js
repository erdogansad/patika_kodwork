import React from 'react';
import {Provider} from 'react-redux';
import {setupStore} from './redux/store';
import Router from './Router';

const store = setupStore();

const Wrapper = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default Wrapper;
