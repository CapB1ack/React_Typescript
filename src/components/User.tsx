import * as React from 'react';

import './User.css';
import { IUser } from '../types';

interface IUserComponent extends IUser {
    elemIsSelected: boolean;
    onChange: Function;
}

export const UserComp: React.SFC<IUserComponent> = (props) => {
    return (
    <div className={`user ${props.elemIsSelected ? 'user--selected' : ''}`}  onClick={() => props.onChange(props.id)}>
        {props.username} -- {props.id} -- {props.isAdmin}
    </div>
    );
};
