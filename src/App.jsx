import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {

  const isLoggedIn = false

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to={isLoggedIn ? "/home" : "/login"}  replace/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/home' element={<Home/>}  />
      </Routes>
    </div>
  );
}

export default App;
