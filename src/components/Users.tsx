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
    inputValue: string;
}

class Users extends React.Component<any, ILocalState> {
    state = {
        selected: 0,
        inputValue: ''
    };

    handleUserSelect (id: number) {
        this.setState({selected: id});
    }
    handleUserDelete (id: number) {
        this.props.onDeleteUser(id);
    }
    handleInputChange(event: any) {
        console.log(event.target.value);
        this.setState({inputValue: event.target.value});
    }

    render () {
        return (
                <div>
                    <button onClick={this.props.onAddUser}>Add user</button>
                    <input type="text" onChange={this.handleInputChange} value={this.state.inputValue}/>
                    <div>Selected: {this.state.selected}</div>
                    {this.props.users.map((userInfo: IUser) => (
                        <UserComp 
                            elemIsSelected={this.state.selected === userInfo.id}
                            {...userInfo}
                            key={userInfo.id}
                            onDeleteUser={(id: number) => this.handleUserDelete(id)}
                            onUserSelect={(id: number) => this.handleUserSelect(id)} 
                        />
                    ))}
                </div>
        );
    }
}
export { Users };