import * as React from 'react';

class Users extends React.Component<{}, {}> {
    state = {
        p1: 'xx',
        p2 : 'yy'
    };
    render() {
      return (
        <div>
          UsersConpinents!! {this.state.p1}
          UsersConpinents!! {this.state.p2}
        </div>
      );
    }
  }
export default Users;