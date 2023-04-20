 import React from 'react';
 import logo from './logo.svg';
 import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Benifits of using react...
        </h1>
        <div
          className="App-link">
            
           1.Component-based architecture <br/>
           2.Virual DOM for efficient updates<br/>
           3.Rich ecosystem and community<br/>
          4.cross-platform development<br/>
          5.strong community support
        </div><br/>
        <MyButton/>
      </header>
    </div>
  );
}

export default App;

function MyButton(){
  return(
    <button>Get started..</button>
  )
  
}
