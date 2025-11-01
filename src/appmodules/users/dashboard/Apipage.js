import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Apipage() {

  const [items, setItems] = useState([])

  const myapidata = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      console.log(d.data.products);
      setItems(d.data.products);
    })
  }

  useEffect(() => {
    myapidata();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        {items.map((e) => {
          return (
            <div className='col-md-3 mt-2'>
              <div className='card p-2 shadow'>
                <img src={e.thumbnail} alt={e.id}/>
                <h1>Id:{e.id}</h1>
                <h3>title:{e.category}</h3>
                <p>Description:{e.description}</p>
                <Link to={"detailspage/"+e.id} className='btn btn-primary btn-sm'> show details</Link>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Apipage