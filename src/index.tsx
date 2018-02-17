import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import Users from './containers/Users';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Users />
      <Hello />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
