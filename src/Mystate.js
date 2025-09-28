import React, { useState } from 'react'
import pic1 from './images/MjEnvk.jpg';
import { BiAlarm, BiLogoAndroid } from "react-icons/bi";
import { RiFindReplaceLine } from "react-icons/ri";
import Button from '@mui/material/Button';
import { Menubar } from './Mydatabase';
import {Link} from 'react-router-dom';
const a = "5454";

function Mystate() {

    const user = "kumar";
    const [a, b] = useState(900);

    const myfun = () => {
        b(1000);

    }
    const mypic = "https://wallpapers.com/images/hd/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg";


    return (

        <div>

            <div>Mystate {user} {a}</div>
            <input type='button' value="change" onClick={myfun} />
            <img src='https://5.imimg.com/data5/SELLER/Default/2023/7/330483018/UU/FJ/LO/6461830/nature-wallpaper.jpg' width="200" alt="sldhfjshd" />
            <img src={mypic} alt='sjfkjsd' width="300" />
            <img src={pic1} alt='jsdhfjsghfhgsd' width="300" />
            <BiAlarm />
            <h2><BiLogoAndroid /></h2>
            <RiFindReplaceLine />
            <div className='code-page'></div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 bg-danger p-3 text-white'>
                        <h1>heading one</h1>
                        <Button variant="text">Text</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    {Menubar.map((m)=>{
                                        return(
                                            <Link className="nav-link" to={m.menulink}>{m.menu}</Link>
                                        )
                                    })}
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Mystate