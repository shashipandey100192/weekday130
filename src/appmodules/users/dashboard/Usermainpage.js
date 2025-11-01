import React, { Fragment } from 'react'
import Appsidebar from '../../sharecomponents/Appsidebar'
import UserHomepage from './UserHomepage'
import Appheader from '../../sharecomponents/Appheader'
import { Outlet } from 'react-router-dom'
import ChatBot from "react-chatbotify";
import { customchange } from './Chatbotsetting'

function Usermainpage() {
  return (
    <Fragment>
      <Appheader/>

      <Appsidebar/>
    <div className="container-fluid" style={{width:"93%"}}>
      <div className='row'>
        <div className='col-md-12'>
          <Outlet></Outlet>
          <ChatBot settings={customchange}/>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Usermainpage