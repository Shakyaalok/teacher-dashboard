import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import AddNew from './components/AddNew';
import { useState } from 'react';
import EditOne from './components/EditOne';
import StudentProvider from './store/StudentProvider';
import RouteProtection from './routeProtection/RouteProtection';
import AuthRoute from './middlewares/auth';

function App() {

  const [showForm,setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editData,setEditData] = useState('');
  const [isFetched,setIsFetched] = useState('')
  
  const showAddHandler = (data) =>{
     
     setShowForm(data.isAdd);
     setIsFetched(()=>data.fetchedSutudents);
  }

  const HideAddHandler = (data)=>{
    setShowForm(data);
  }

  const editOneHandler = (data)=>{
    
    const updatedData = {
      name:data.name,
      subject:data.subject,
      marks:data.marks
    }
    setEditData(updatedData);
    setShowEdit(data.isEdit);
    setIsFetched(()=>data.fetchedSutudents);
  }

  const HideEditOne = (data)=>{
    setShowEdit(data)
  }




  return (
    
    <Router>
    <StudentProvider>
     { showForm && <AddNew onCloseAdd={HideAddHandler} fetchedSutudents={isFetched}/>}
     {showEdit && <EditOne onCloseEdit={HideEditOne} data={editData} fetchedSutudents={isFetched}/>}
    <Routes>
      <Route path='/' element={<AuthRoute element={<RegistrationForm/>}/>}/>
      <Route exact path='/login'   element={<AuthRoute element={<LoginForm/>}/>}/>
      <Route exact path='/dashboard'  element={<RouteProtection element={<DashBoard/>}/>} />
      < Route exact path='/dashboard/home' element={<RouteProtection element={<Home onAdd={showAddHandler} onEdit={editOneHandler} />}/>}/>
    </Routes>
    </StudentProvider>
    </Router>
  );
}

export default App;
