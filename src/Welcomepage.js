import React from 'react'
import { Link } from 'react-router-dom'
import { Myapplist } from './appmodules/controls/Appmenu'

function Welcomepage() {
  return (
    <div className="container mt-5 appmenu">
        <div className='row'>
            <div className='col-12 text-center'>
                <h4 className='mb-5'>Application list </h4>
            </div>
        </div>
        <div className='row justify-content-center'>
        {Myapplist.map((m)=>{
            return  <Link to={m.approute} className='col-md-2 mt-3'>
            <div className='card bg-info p-3 shadow'>
                <h5>{m.appname}</h5>
                </div>
            </Link>
        })}


            {/* <Link to="usermanagement" className='col-md-2'>
            <div className='card bg-info p-3 shadow'>
                <h5>users</h5>
                </div>
            </Link>

            <Link to="" className='col-md-2'>
                    <div className='card bg-info p-3 shadow'>
                <h5>Admin</h5>
                </div>
            </Link> */}

        </div>
    </div>
  )
}

export default Welcomepage