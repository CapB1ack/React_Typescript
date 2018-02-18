import { UserAction } from '../actions';
import { IStoreState } from '../types/index';
import { ADD_USER, DELETE_USER } from '../constants/index';

export const reducerUsers = (state: IStoreState, action: UserAction): IStoreState => {
  switch (action.type) {
    case ADD_USER:
      const users = [...state.users, {username: 'xx10', id: 10, isAdmin: false}];
      return { ...state, users };
    case DELETE_USER:
      return { ...state, users: [] };
    default:
      return state;
  }
};