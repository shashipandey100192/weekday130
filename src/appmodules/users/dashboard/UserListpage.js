import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,valuechange } from '../../redux/Myactionslist';

function UserListpage() {

const user = {username:"rohan",age:40,phone:"99999999999",address:"new delhi"};
  localStorage.setItem("userinfo",JSON.stringify(user));
const myage = useSelector((state)=>state.counter.age);  

const sendaction = useDispatch();

const [a,b]=useState("ravi");
const abc = (x)=>{
  b(x.target.value);
}

  return (
    <div>UserListpage

    <h4>{user.username}</h4>
    <h4>{user.age}</h4>
    <h4>{user.phone}</h4>
    <h1>{myage}</h1>
    <button type='button' className='btn btn-success' onClick={()=>sendaction(increment())}>incre</button>

<input type='text' value={a}/>

<input type='button' value="update" onClick={valuechange}/>

    </div>
  )
}

export default UserListpage