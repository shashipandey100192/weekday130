import React from 'react'
import Childpage from './Childpage';

function Parentspage() {
    const username = "ravi singh";
    const msg = ()=>{
        alert("welcome to propspppppppppppppppppp");
    }
    const mydata = JSON.parse(localStorage.getItem("userinfo"));
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-5 bg-success' >
                <h1>Parents components</h1>

                <Childpage xyz={username} abc={msg}></Childpage>
                <h3>{mydata.username}</h3>
                <h3>{mydata.age}</h3>
                <h3>{mydata.phone}</h3>
                <h3>{mydata.address}</h3>
            </div>
        </div>
    </div>
  )
}

export default Parentspage