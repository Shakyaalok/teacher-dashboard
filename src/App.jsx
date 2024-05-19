import './App.css';
import {Button} from 'react-bootstrap'
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from './components/DashBoard';
import NavbarDashBoard from './components/NavbarDashBoard';
import Home from './components/Home';
import AddNew from './components/AddNew';
import { useState } from 'react';
import EditOne from './components/EditOne';
import StudentProvider from './store/StudentProvider';

function App() {

  const [showForm,setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editData,setEditData] = useState('')
  
  const showAddHandler = (data) =>{
     setShowForm(data)
  }

  const HideAddHandler = (data)=>{
    console.log('data',data)
    setShowForm(data);
  }

  const EditOneHandler = (data)=>{
    
    const updatedData = {
      name:data.name,
      subject:data.subject,
      marks:data.marks
    }
    setEditData(updatedData)
    setShowEdit(data.isEdit)
  }

  const HideEditOne = (data)=>{
    setShowEdit(data)
  }




  return (
    
    <Router>
    <StudentProvider>
     { showForm && <AddNew onCloseAdd={HideAddHandler}/>}
     {showEdit && <EditOne onCloseEdit={HideEditOne} data={editData}/>}
    <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      <Route exact path='/dashboard' element={
            <DashBoard/>
        }/>
      <Route exact path='/dashboard/home' element={ <Home onAdd = {showAddHandler}  onEdit={EditOneHandler}/>}/>
    </Routes>
    </StudentProvider>
    </Router>
  );
}

export default App;
