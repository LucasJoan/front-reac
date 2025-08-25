import Message from './components/Message';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Registration from './components/Registration';
import Profile from './components/Profile';

const App = () => {
  return (
      <Router>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route 
            path='/homepage' 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />

          <Route path='/register' element={<Registration/>}/>
          <Route path='/profile' element={<Profile/>}/>

        </Routes>
      </Router>

    
  );
};


export default App;
