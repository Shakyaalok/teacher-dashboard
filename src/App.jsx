import './App.css';
import {Button} from 'react-bootstrap'
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
      <Route exact path='/login' element={<LoginForm/>}/>
    </Routes>
    </Router>
  );
}

export default App;
