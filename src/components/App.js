import React, { Component } from 'react';

import WishListView from './WishListView'


class App extends Component {
  constructor(props){
    super()

    this.state = {selectedUser:null}
  }


  render() {
    const {group} = this.props
    const selectedUser = group.users.get(this.state.selectedUser)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Whishlist</h1>
        </header>

        <select onChange={this.onSelectUser}>
          <option> - Select User - </option>
          {group.users.values().map(user => 
            <option key={user.id} values={user.id}>
              {user.name}
            </option>
        )}
        </select>
        { selectedUser && 
        <WishListView wishList={selectedUser.wishList} />
        }
}
      </div>
    );
  }

  onSelectUser = event => {
    this.setState({selectedUser:event.target.value})
  }
}

export default App;
