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
    onToggleAdmin: () => void;
}
interface ILocalState {
    selected: number;
    inputValue: string;
}

class Users extends React.Component<any, ILocalState> {
    state = {
        selected: 0,
        inputValue: ''
    };
    textInput: HTMLInputElement | null;

    handleUserSelect (id: number) {
        this.setState({selected: id});
    }
    handleUserDelete (id: number) {
        this.props.onDeleteUser(id);
    }
    handleInputChange(event: any) {
        this.setState({inputValue: event.target.value});
    }
    handleToggleAdmin(id: number) {
        this.props.onToggleAdmin(id);
    }
    componentDidMount () {
        if (this.textInput) { this.textInput.focus(); }
    }

    render () {
        return (
                <div>
                    <button onClick={() => this.props.onAddUser(this.state.inputValue)}>Add user</button>
                    <input 
                        type="text"
                        onChange={e => this.handleInputChange(e)}
                        value={this.state.inputValue}
                        ref={inp => this.textInput = inp}
                    />
                    <div>Selected: {this.state.selected}</div>
                    {this.props.users.map((userInfo: IUser) => (
                        <UserComp 
                            elemIsSelected={this.state.selected === userInfo.id}
                            {...userInfo}
                            key={userInfo.id}
                            onDeleteUser={(id: number) => this.handleUserDelete(id)}
                            toggleIsAdmin={(id: number) => this.handleToggleAdmin(id)}
                            onUserSelect={(id: number) => this.handleUserSelect(id)} 
                        />
                    ))}
                </div>
        );
    }
}
export { Users };