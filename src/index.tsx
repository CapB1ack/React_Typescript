import * as React from 'react';
import * as ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import Users from './containers/Users';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducerUsers } from './reducers/index';
import { IStoreState } from './types/index';
import { fetchData } from './actions';

import './index.css';

interface IWindowWithRedux extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const store = createStore<any>(reducerUsers, {
  users: []
// tslint:disable-next-line:align
}, compose(
    applyMiddleware(thunkMiddleware),
    (window as IWindowWithRedux).__REDUX_DEVTOOLS_EXTENSION__ && (window as IWindowWithRedux).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch(fetchData('users'));
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Users />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
