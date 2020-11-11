import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function getAvatar() {
  //var formElem = document.getElementById("avForm");

  var apiUrl = "https://avatars.dicebear.com/api/male/john.svg"; //+ formElem.elements[1].value + "/" + formElem.elements[0].value + ".svg";
  //window.alert(apiUrl);
  var avatarImg = React.createElement("img", { src: apiUrl });

  ReactDOM.render(avatarImg, document.getElementById('avatar'));
}


function App() {
  return (
    <div className="App">
      <div id="user-input">
            <form id="avForm" method="get">
                <label htmlFor="avName">Avatar Name</label>
                <input type="text" id="avName" name="avName"/>

                <label htmlFor="type">Avatar Type:</label>
                <input type="text" id="type" name="type"/>

                <input type="submit" value="Submit" onClick={getAvatar}/>
            </form>
        </div>
        <div id="avatar"></div>
    </div>
  );
}

export default App;
