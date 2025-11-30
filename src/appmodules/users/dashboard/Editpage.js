import React,{useEffect,useState} from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link ,useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {toast,ToastContainer} from 'react-toastify'

function Editpage() {
    const {id} = useParams()

  const mynav = useNavigate();
  const {register,handleSubmit,formState: { errors }} = useForm();

 const [items, setItems] = useState({
    email:"",
    pass:"",
    dob:""
 });


const myapidata = () => {
        axios.get(`http://localhost:8700/students/${id}`).then((d) => {
            console.log(d.data);
            setItems(d.data);
        })
    }

    useEffect(() => {
        myapidata();
    }, []);


const abc =(e)=>{
     const { name, value } = e.target;
    setItems((a) => {
      return {
        ...a,
        [name]: value
      }
    })

}



const myform = (d)=>{
    axios.patch(`http://localhost:8700/students/${id}`,d).then((e)=>{
      console.log(e);
    toast.success("welcome to",{autoClose:1000,position:"top-left",theme:"dark"});

    setTimeout(()=>{
        mynav('/dashboard/jsondata');
    },1000);
    });

}


  return (
    <form onSubmit={handleSubmit(myform)}>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8 bg-light shadow p-5'>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 text-center'>
                <p className='cususer'><FaUser /></p>
              </div>
              <div className='col-12 text-center'>
                <p className='h4'>User Edit Page</p>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> <MdOutlineMailOutline /> Email address</label>
                  <input type="email" className="form-control" {...register("email",{required:true})} value={items.email} name='email' onInput={abc}/>
                  {errors.email && <p className='text-danger'> email is required</p>}
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> <RiLockPasswordLine /> Password</label>
                  <input type="password" className="form-control" {...register("pass",{required:true})} value={items.pass} name='pass' onInput={abc}/>
                  {errors.pass && <p className='text-danger'> password is required</p>}
                </div>
              </div>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label className="form-label"> <RiLockPasswordLine />DOB</label>
                  <input type="date" className="form-control" {...register("dob",{required:true})} value={items.dob} name='dob' onChange={abc}/>
                  {errors.dob && <p className='text-danger'> date of birth is required</p>}
                  <ToastContainer/>
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

                  <input type='submit' value="update" className='btn btn-success' />
                  
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

export default Editpage