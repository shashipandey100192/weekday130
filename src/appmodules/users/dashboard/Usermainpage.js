import React, { Fragment } from 'react'
import Appsidebar from '../../sharecomponents/Appsidebar'
import UserHomepage from './UserHomepage'
import Appheader from '../../sharecomponents/Appheader'
import { Outlet } from 'react-router-dom'

function Usermainpage() {
  return (
    <Fragment>
      <Appheader/>

      <Appsidebar/>
    <div className="container-fluid" style={{width:"93%"}}>
      <div className='row'>
        <div className='col-md-12'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Usermainpage