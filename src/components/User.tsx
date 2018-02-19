import * as React from 'react';

import './User.css';
import { IUser } from '../types';

interface IUserComponent extends IUser {
    elemIsSelected: boolean;
    onUserSelect: Function;
    onDeleteUser: Function;
}

export const UserComp: React.SFC<IUserComponent> = (props) => {
    return (
    <div className={`user ${props.elemIsSelected ? 'user--selected' : ''}`}  onClick={() => props.onUserSelect(props.id)}>
        <div> {props.id}) {props.username}</div>
        <button  onClick={() => props.onDeleteUser(props.id)} className="user--remove">Remove this user</button>
    </div>
    );
};
