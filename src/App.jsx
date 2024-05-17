import './App.css';
import {Button} from 'react-bootstrap'
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import AddNew from './components/AddNew';
import { useState } from 'react';

function App() {

  const [showForm,setShowForm] = useState(false);
  
  const showAddHandler = (data) =>{
     setShowForm(data)
  }

  const HideAddHandler = (data)=>{
    console.log('data',data)
    setShowForm(data);
  }
  return (
    
    <Router>
     { showForm && <AddNew onCloseAdd={HideAddHandler}/>}
    <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      <Route exact path='/dashboard' element={<DashBoard/>}/>
      <Route exact path='/dashboard/home' element={<Home onAdd = {showAddHandler} />}/>
    </Routes>
    </Router>
  );
}

export default App;
