import React from 'react'
import Grandchildpage from './Grandchildpage'

function Childpage(props) {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 bg-info text-white p-5'>
                <h1>this is child components</h1>
                <h2>{props.xyz}</h2>
                <input type='button' value="show message" onClick={props.abc}/>
                <Grandchildpage myfunc={props.abc}></Grandchildpage>
            </div>
        </div>
    </div>
  )
}

export default Childpage