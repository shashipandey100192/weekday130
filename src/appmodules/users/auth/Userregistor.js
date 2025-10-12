import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Userregistor() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8 bg-light shadow p-5'>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 text-center'>
                <p className='cususer'><FaUser /></p>
              </div>
              <div className='col-12 text-center'>
                <p className='h4'>User Registor Page</p>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> <MdOutlineMailOutline /> Email address</label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> <RiLockPasswordLine /> Password</label>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> <RiLockPasswordLine />DOB</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> Gender</label><br />
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="male" />
                    <label class="form-check-label">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="female" />
                    <label class="form-check-label">Female</label>
                  </div>
                </div>
              </div>
            <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">fees</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea className='form-control'></textarea>
                </div>
              </div>

              <div className='col-md-6 text-center'>
                <div className="mb-3">

                  <input type='button' value="Registor now" className='btn btn-success' />
                  <Link to="/usermanagement" className='ms-3'>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userregistor