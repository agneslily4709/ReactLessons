import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
        <>
                <BrowserRouter>
                <Navbar/>
                        <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/signup" element={<Signup/>}/>
                        </Routes>
                </BrowserRouter>
        </>
  );
}

export default App;
