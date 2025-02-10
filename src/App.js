import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import PatientRegistration from "./pages/PatientResgistration/PatientRegistration";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/patientRegistration" element={<PatientRegistration />} /> 
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
