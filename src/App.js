import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register"  element = {<Register/>}/>
          <Route path="/product/:id" />        
          <Route path="/products" />    
        </Routes>
    </Router>
    </>
  );
}

export default App;
