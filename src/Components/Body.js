import React from 'react'
import AdminView from './Admin/AdminView'
import UserView from './User/UserView'
import Sprint from './Admin/Sprint'
import Po from './Admin/Po'
import Projects from './Admin/Projects'
import {Route,Routes} from "react-router-dom"

const Body = () => {
  return (
    <div>
{/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard v1</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        <section class="content">
        <Routes>
          <Route path='/' element={<UserView/> }  />
          <Route path='/Admin/AdminView' element={<AdminView/> } />
          <Route path='/Admin/Sprint' element={<Sprint/> } />
          <Route path='/Admin/Projects' element={<Projects/> } />
          <Route path='/Admin/Po' element={<Po/> } />
        </Routes>
        </section>

      </div>
    </div>
  
  )
}

export default Body