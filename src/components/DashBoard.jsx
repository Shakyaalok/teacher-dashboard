import React from 'react'
import {Button} from 'react-bootstrap'
import NavbarDashBoard from './NavbarDashBoard'
import {Link} from 'react-router-dom'
import './Dashboard.css'


const DashBoard = () => {
  return (
    <div>
      
        <NavbarDashBoard/>
        <div className='container dashboard'>
          <img src="https://images.unsplash.com/photo-1620679860338-aa1053541b5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{height:'100vh',width:'100%'}} />
          
          <div className='img_text'> 
            <h3>Work is in Progress</h3>
            <Button className='explore_button' as={Link} to='/dashboard/home'>Explore</Button>
          </div>
        </div>

   
    </div>
  )
}

export default DashBoard
