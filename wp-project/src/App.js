import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      avatarSrc: 'default.png'
    }
  }

  getAvatar(e){
    e.preventDefault(); 
    this.setState( state => {
      let newSrc = "https://avatars.dicebear.com/api/male/john.svg";
      return {avatarSrc: newSrc}
    }); 
  }

  render(){  
    return (
      <div className="App">
        <div id="user-input">
              <form id="avForm" method="get">
                  <label htmlFor="avName">Avatar Name</label>
                  <input type="text" id="avName" name="avName"/>

                  <label htmlFor="type">Avatar Type:</label>
                  <input type="text" id="type" name="type"/>

                  <input type="submit" value="Submit" onClick={this.getAvatar.bind(this)}/>
              </form>
          </div>
          <div id="avatar"><img src={this.state.avatarSrc} height="100" width="100"/></div>
      </div>
    );
  }
}

export default App;
