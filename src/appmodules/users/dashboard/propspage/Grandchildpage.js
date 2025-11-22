import React from 'react'

function Grandchildpage(props) {
  return (
    <div className='bg-warning p-5'>Grandchildpage
        <button className='btn btn-danger' onClick={props.myfunc}>click to message</button>
    
    </div>
  )
}

export default Grandchildpage