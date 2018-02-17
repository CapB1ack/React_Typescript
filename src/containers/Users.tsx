import * as React from 'react';
import { UserComp } from '../components/User';

export interface User {
  username: string;
  id: number;
  isAdmin: boolean;
}

interface LocalState {
  usersList: User[];
}

class Users extends React.Component<{}, LocalState> {
    state = {
        usersList: [
          {username: 'xx1', id: 1, isAdmin: false},
          {username: 'xx2', id: 2, isAdmin: false},
          {username: 'xx3', id: 3, isAdmin: false}, 
          {username: 'xx4', id: 4, isAdmin: false},
          {username: 'xx5', id: 5, isAdmin: true}
        ]
    };
    handleClick (ev: Event) {
      console.log('handleClick', ev);
    }
    render() {
      return (
        <div>
          {this.state.usersList.map((userInfo: User) => (
            <UserComp {...userInfo}  key={userInfo.id} onChange={() => this.handleClick}/>
          ))}
        </div>
      );
    }
  }
export default Users;