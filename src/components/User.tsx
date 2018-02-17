import * as React from 'react';

import { User } from '../containers/Users';
import './User.css';

interface UserComponent extends User {
    onChange: Function;
}

export const UserComp: React.SFC<UserComponent> = (props) => {
    return (
    <div className="user" onClick={props.onChange()}>
        {props.username} -- {props.id} -- {props.isAdmin}
    </div>
    );
};
