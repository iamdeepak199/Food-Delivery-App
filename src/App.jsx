import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/service" element={<service />}/>
        <Route path="/contact" element={<contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
