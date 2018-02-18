import * as React from 'react';
import { Dispatch } from 'react-redux';

import './User.css';
import { IUser } from '../types';
import { UserComp } from './User';
import * as actions from '../actions/';

interface IUsers {
    users: IUser[];
    onAddUser: () => void;
    onDeleteUser: () => void;
}

const handleClick = () => {
    console.log('zzz');
};

export const Users = ({users, onAddUser, onDeleteUser}: IUsers) => {
    return (
        <div>
            <button onClick={onAddUser}>Add user</button>
            <button onClick={onDeleteUser}>Delete</button>
            {users.map((userInfo: IUser) => (
                <UserComp {...userInfo}  key={userInfo.id} onChange={() => handleClick}/>
            ))}
        </div>
    );
};
