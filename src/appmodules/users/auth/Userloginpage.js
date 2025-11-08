import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"


function Userloginpage() {

const {register,handleSubmit,formState: { errors }} = useForm();

const myform = (d)=>{
    console.log(d);
}


  return (
    <form onSubmit={handleSubmit(myform)}>
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-5'>
                   
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='cususer'><FaUser/></p>
                            </div>
                             <div className='col-12 text-center'>
                                <p className='h4 pb-5'>App Login Page</p>
                            </div>
                            <div className='col-md-12'>
                                <div className="mb-3">
                                    <label className="form-label"> <MdOutlineMailOutline/> Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'> email is required</p>}
                                </div>
                            </div>
                             <div className='col-md-12'>
                                <div className="mb-3">
                                    <label className="form-label"> <RiLockPasswordLine/> Password</label>
                                    <input type="password" className="form-control" {...register("pass",{required:true})}/>
                                     {errors.pass && <p className='text-danger'> password is required</p>}
                                </div>
                            </div>
                             <div className='col-md-12 text-center'>
                                <div className="mb-3">
                                   
                                    <input type='submit' value="login" className='btn btn-success'/>
                                    <Link to="registor" className='ms-3'>new registor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  )
}

export default Userloginpage