import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import PatientRegistration from "./pages/Patient/PatientRegistration/PatientRegistration";
import TestStatusPage from "./pages/Patient/TestStatus/TestStatusPage";
import PatientRegistrationList from "./pages/Patient/PatientRegistrationList/PatientRegistrationList";
import MakePayment from "./pages/Account/MakePayment";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/patientRegistration" element={<PatientRegistration />} /> 
      <Route path="/dashboard" element={<Dashboard />} />      
      <Route path="/testStatus" element={<TestStatusPage />} />      
      <Route path="/patientRegistarionList" element={<PatientRegistrationList />} />      
      <Route path="/makePayment" element={<MakePayment />} />      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
