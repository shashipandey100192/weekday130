import React from 'react'
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Errorpage from './pages/Errorpage';

function About() {

const name = "kumar";
const age=20;
const menu = "consdftact";
const bg="orange";
let fs = 80;
const b=10;


  return (
    <div className='first'>
        <h1>heading one {name}</h1>
        <h1>heading one {"this is mytext"}</h1>
        <h1>user age {age>=30? "true":"false"}</h1>
        <h1>user age {age>=30? <span>over age</span> : <span>under age</span>}</h1>
         <h1>{800+90}</h1>

        <p>heading text</p>

      <div> {menu==="home"? <Homepage/> : menu==="contact" ? <Contactpage/> : <Errorpage/>}</div>
      <div style={{color:'red',backgroundColor:bg,fontSize:`${fs}px`,border:`${b}px solid red`}}>inline css </div>
    
    <input type="text" value="username" placeholder={"userinput"}/>
    <input type='password' value="5454"/>



    </div>
  )
}

export default About


export function Mypage()
{
  return(
    <h1>this is my another componment</h1>
  )
}


