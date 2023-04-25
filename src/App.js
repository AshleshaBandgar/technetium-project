import React from 'react';
import './App.css';
import Button from './button';
import './button.css'
function App() {

  const headingStyle = {
    color : 'black',

  }

  const ButtonStyle = {
    color : 'white' ,
    border : 'none' ,
    height : '50px' ,
    width : '50px' ,
    marginRight : '20px' ,
    borderRadius : '50%' ,
    fontWeight : '700' ,
    backgroundColor : 'blue'
  } 

  function Card2(){
    alert("Madhuri bandgar")
  }

  function Card3 () {
    alert('Shreeram bandgar')

  }
return (
    <div className="App">
    <div style={{ margin: '100px' }}>
      <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '400px', }}/>
    </div>
     
      <h2 style={{color : 'black'}}>Learner at FunctionUP</h2>
      <h1 style = {headingStyle}>Ashlesha Chandrakant BAndgar</h1>
      <h4 className='headingFour'>FunctionUp helping me to buils career in Web development.<br/>
      Until now I have learned HTML, CSS, Javascript and now I am learning ReactJs.<br/>
      I am looking forward more to learn new things at FunctionUp.</h4>

      <Button/>

      <Button
        buttonText = 'Card2'
        onClickFunction = {Card2}
        buttonStyle = {ButtonStyle}/>
    
      <Button 
         buttonText = 'Card3'
         onClickFunction = {Card3}
         buttonStyle = {ButtonStyle}
        externalClassName = 'externalStyleBtn'
      />
      </div>
  );
}
export default App
