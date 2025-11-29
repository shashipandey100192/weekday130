import React from 'react'




function UserListpage() {

const user = {username:"rohan",age:40,phone:"99999999999",address:"new delhi"};
  localStorage.setItem("userinfo",JSON.stringify(user));

  return (
    <div>UserListpage

    <h4>{user.username}</h4>
    <h4>{user.age}</h4>
    <h4>{user.phone}</h4>

    </div>
  )
}

export default UserListpage