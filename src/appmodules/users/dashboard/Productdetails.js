import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Productdetails() {
    const {id} = useParams()
    const [items, setItems] = useState({})

    const myapidata = () => {
        

        axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
            console.log(d.data);
            setItems(d.data);
        })
    }

    useEffect(() => {
        myapidata();
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={items.thumbnail} alt={items.id}/>
                </div>
                <div className='col-md-9 border'>
                    <h1>Id: {items.id}</h1>
                    <h3>Category: category</h3>
                    <p>Description: description</p>
                </div>
                
            </div>
        </div>
    )
}

export default Productdetails