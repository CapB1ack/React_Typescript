import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Users from './containers/Users';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducerUsers } from './reducers/index';
import { IStoreState } from './types/index';

import './index.css';

const store = createStore<IStoreState>(reducerUsers, {
  users: [
    {username: 'xx1', id: 0, isAdmin: false},
    {username: 'xx2', id: 1, isAdmin: false},
    {username: 'xx3', id: 2, isAdmin: false}, 
    {username: 'xx4', id: 3, isAdmin: false},
    {username: 'xx5', id: 4, isAdmin: true}
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Users />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
