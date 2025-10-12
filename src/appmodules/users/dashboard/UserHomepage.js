import React from 'react'

function UserHomepage() {
  return (
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
              <h1>graph</h1>
            </div>
          </div>
        </div>

        <div className='col-md-4 mt-3'>
          <div class="card bg-light shadow">
            <div class="card-body">
              <h1>graph</h1>
            </div>
          </div>
        </div>

        <div className='col-md-12 mt-3'>
          <div class="card bg-light shadow">
            <div class="card-body">
              <h1>graph</h1>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default UserHomepage