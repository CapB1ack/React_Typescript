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
    onAddUser: () => dispatch(actions.addUser()),
    onDeleteUser: () => dispatch(actions.deleteUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);