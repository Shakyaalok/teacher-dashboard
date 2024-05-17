import React from 'react'
import NavbarDashBoard from './NavbarDashBoard'
import { Button,Card,Table } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
        <NavbarDashBoard/>
        <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
          
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
               
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Student Details</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" >
                + New Student
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive">
                 <table class="table table-striped table-hover table-bordered">
                    <thead className="table-header">
                        <tr>
                            <th>S.No</th>
                            <th>Name </th>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='border-color'>
                       
                        <tr>
                            <td>1</td>
                            <td>Rual Octo</td>
                            <td>Math</td>
                            <td>98</td>
                            <td>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Demark</td>
                            <td>English</td>
                            <td>90</td>
                            <td>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                        

                  
                    </tbody>
                </table>
            </div>   
        </div>  
        
    </div>
    </div>
    </div>
  )
}

export default Home
