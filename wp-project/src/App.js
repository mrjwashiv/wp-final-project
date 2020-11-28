import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      avatarSrc: logo
    }
  }

  getAvatar(e){
    e.preventDefault();
    var formElem = document.getElementById("avForm"); 
    this.setState( state => {
      let newSrc = "https://avatars.dicebear.com/api/" + formElem.elements[1].value +
                   "/" + formElem.elements[0].value + ".svg?options[mood][]=" + formElem.elements[2].value;
      return {avatarSrc: newSrc}
    }); 
  }

  render(){  
    return (
      <div className="App">
        <div id="user-input">
              <form id="avForm" method="get">
                  <label htmlFor="avName"><h3>Avatar Name:</h3></label>
                  <input type="text" id="avName" name="avName"/>

                  <label htmlFor="type"><h3>Avatar Type:</h3></label>
                  <select id="mood" name="mood">
                    <option value="human">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="human">Random</option>
                  </select>

                  

                  <label htmlFor="mood"><h3>Avatar Mood:</h3></label>
                  <select id="mood" name="mood">
                    <option value="happy">Please Select</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="surprised">Surprised</option>
                  </select>

                  <input type="submit" value="Submit" onClick={this.getAvatar.bind(this)}/>
              </form>
          </div>
          <div id="avatar"><img src={this.state.avatarSrc} height="100" width="100"/></div>
      </div>
    );
  }
}

export default App;
