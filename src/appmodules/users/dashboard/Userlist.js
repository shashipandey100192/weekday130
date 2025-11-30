import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Userlist() {


    const [items, setItems] = useState([])

    const myapidata = () => {
        axios.get('http://localhost:8700/students').then((d) => {
            console.log(d.data);
            setItems(d.data);
        })
    }

    useEffect(() => {
        myapidata();
    }, []);


const deletedata = (id)=>{
  axios.delete(`http://localhost:8700/students/${id}`).then((r)=>{
    console.log(r);
     myapidata();
  })  

}



    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-12'>

                    <h1>Json data list</h1>
                    <div className='card p-3'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">sno</th>
                                    <th scope="col">id</th>
                                    <th scope="col">email</th>
                                    <th scope="col">dob</th>
                                    <th scope="col">pass</th>
                                    <th scope='col'>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((d,a) => {
                                    return (
                                        <tr>
                                            <th scope="row">{++a}</th>
                                            <th scope="row">{d.id}</th>
                                            <td>{d.email}</td>
                                            <td>{d.dob}</td>
                                            <td>{d.pass}</td>
                                            <td align='right'>
                                                <Link to="" className='btn btn-primary btn-sm ms-2'>view</Link>
                                                <Link to={"edit/"+d.id} className='btn btn-warning btn-sm ms-2'>Edit</Link>
                                                <button type='button' className='btn btn-danger btn-sm ms-2' onClick={()=>deletedata(d.id)}>Del</button>
                                            </td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userlist