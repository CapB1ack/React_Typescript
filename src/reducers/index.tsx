import { UserAction } from '../actions';
import { IStoreState } from '../types/index';
import { ADD_USER, DELETE_USER } from '../constants/index';

export const reducerUsers = (state: IStoreState, action: UserAction): IStoreState => {
  switch (action.type) {
    case ADD_USER:
      const nextIndex = Math.max(...[...state.users].map(el => el.id));
      const users = [...state.users, {username: 'newUser', id: nextIndex + 1, isAdmin: false}];
      return { ...state, users };
    case DELETE_USER:
      return { ...state, users: state.users.filter(el => el.id !== action.id) };
    default:
      return state;
  }
};