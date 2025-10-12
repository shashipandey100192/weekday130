import React, { Fragment } from 'react'
import Appsidebar from '../../sharecomponents/Appsidebar'
import UserHomepage from './UserHomepage'
import Appheader from '../../sharecomponents/Appheader'

function Usermainpage() {
  return (
    <Fragment>
      <Appheader/>

      <Appsidebar/>
    <div className="container-fluid" style={{marginLeft:70}}>
      <div className='row'>
        <div className='col-md-12'>
          <UserHomepage/>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Usermainpage