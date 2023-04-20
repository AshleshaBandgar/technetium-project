 import React from 'react';
 import logo from './logo.svg';
 import './App.css';
 //import MyButton from './components/button';


 function MyButton(){
  return(
    <button>Get started..</button>
  )
  
}

function Reactelements(){
return(
   <>
   1.Component-based architecture<br/>
   2.Virtual DOM for efficient updates<br/>
   3.Rich ecosystem and community<br/>
   4.cross-platform development<br/>
   5.strong community supoort<br/>

   </>
)

}
function Reactlogo(){
  return(

 <img src={logo} className="App-logo" alt="logo" />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Reactlogo/>
      <Reactelements/>
      <MyButton/>

        
      </header>
      </div>
        
  );
}

export default App;

