import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Users from './containers/Users';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducerUsers } from './reducers/index';
import { IStoreState } from './types/index';

import './index.css';

interface IWindowWithRedux extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const store = createStore<IStoreState>(reducerUsers, {
  users: [
    {username: 'xx1', id: 0, isAdmin: true},
    {username: 'xx2', id: 1, isAdmin: false},
    {username: 'xx3', id: 2, isAdmin: false}, 
    {username: 'xx4', id: 3, isAdmin: false},
    {username: 'xx5', id: 4, isAdmin: true}
  ]
// tslint:disable-next-line:align
}, (window as IWindowWithRedux).__REDUX_DEVTOOLS_EXTENSION__ && (window as IWindowWithRedux).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Users />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
