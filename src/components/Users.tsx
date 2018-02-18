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
interface ILocalState {
    selected: number;
}

class Users extends React.Component<any, ILocalState> {
    constructor(props: IUsers) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selected: 0
        };
    }

    handleClick (id: number) {
        this.setState({selected: id});
    }

    render () {
        return (
                <div>
                    <button onClick={this.props.onAddUser}>Add user</button>
                    <button onClick={this.props.onDeleteUser}>Delete</button>
                    <div>Selected: {this.state.selected}</div>
                    {this.props.users.map((userInfo: IUser, index: number) => (
                        <UserComp elemIsSelected={this.state.selected === index} {...userInfo} key={userInfo.id} onChange={(id: number) => this.handleClick(id)} />
                    ))}
                </div>
        );
    }
}
export { Users };