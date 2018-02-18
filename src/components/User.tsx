import * as React from 'react';

import './User.css';
import { IUser } from '../types';

interface IUserComponent extends IUser {
    onChange: Function;
}

export const UserComp: React.SFC<IUserComponent> = (props) => {
    return (
    <div className="user" onClick={props.onChange()}>
        {props.username} -- {props.id} -- {props.isAdmin}
    </div>
    );
};
