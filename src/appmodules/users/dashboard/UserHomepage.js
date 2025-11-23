import React,{useRef} from 'react'
import html2pdf from 'html2pdf.js'
import Graphpage from './Graphpage';
import Apipage from './Apipage';

function UserHomepage() {
   const printRef = useRef();

const handleConvert = () => {
    const element = printRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: 'my-document.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .save();
  };


  return (
    <div ref={printRef}>
    <div className='container-fluid mt-2'>
      <div className='row'>
        <div className='col-md-3'>
          <div class="card bg-info text-white shadow">
            <div class="card-body">
              <h5 class="card-title">Total Emp</h5>
              <h1>4500</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card bg-primary text-white shadow">
            <div class="card-body">
              <h5 class="card-title">Total Emp</h5>
              <h1>4500</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card bg-warning text-white shadow">
            <div class="card-body">
              <h5 class="card-title">Total Emp</h5>
              <h1>4500</h1>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div class="card bg-danger text-white shadow">
            <div class="card-body">
              <h5 class="card-title">Total Emp</h5>
              <h1>4500</h1>
            </div>
          </div>
        </div>

        <div className='col-md-8 mt-3'>
          <div class="card bg-light shadow">
            <div class="card-body">
                <Graphpage/>
              <input type='button' className="btn btn-success" value="download" onClick={handleConvert}/>
            
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div class="card bg-light shadow">
            <div class="card-body">
              <h1>graph</h1>
              <Graphpage/>
            </div>
          </div>
        </div>

        <div className='col-md-12 mt-3'>
          <div class="card bg-light shadow">
            <div class="card-body">
                <Apipage></Apipage>
            </div>
          </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default UserHomepage