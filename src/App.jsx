import './App.css';
import {Button} from 'react-bootstrap'
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from './components/DashBoard';
import Home from './components/Home';

function App() {
  return (
    
    <Router>
    <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
      <Route exact path='/dashboard' element={<DashBoard/>}/>
      <Route exact path='/dashboard/home' element={<Home/>}/>
    </Routes>
    </Router>
  );
}

export default App;
