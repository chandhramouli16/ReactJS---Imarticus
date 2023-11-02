import './App.css';
import Login from './Login';
import Register from './Register';
import Feedback from './Feedback';
import {Route, Routes, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Feedback">Feedback</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Feedback' element={<Feedback />}/>
      </Routes>
    </div>
  );
}

export default App;