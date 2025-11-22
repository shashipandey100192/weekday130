import React from 'react'
import Childpage from './Childpage';

function Parentspage() {
    const username = "ravi singh";
    const msg = ()=>{
        alert("welcome to propspppppppppppppppppp");
    }

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-5 bg-success' >
                <h1>Parents components</h1>

                <Childpage xyz={username} abc={msg}></Childpage>
            </div>
        </div>
    </div>
  )
}

export default Parentspage