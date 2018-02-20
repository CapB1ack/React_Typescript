import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { Users } from '../components/Users';
import * as actions from '../actions/';
import { IUser } from '../types';
import { IStoreState } from '../types/index';

export function mapStateToProps({ users }: IStoreState) {
  return {
    users
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.UserAction>) {
  return {
    onAddUser: (username: string) => dispatch(actions.addUser(username)),
    onDeleteUser: (id: number) => dispatch(actions.deleteUser(id)),
    onToggleAdmin: (id: number) => dispatch(actions.toggleAdmin(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);