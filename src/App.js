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
import MakePayment from "./pages/Account/MakePayment/MakePayment";
import LedgerOfClient from "./pages/Account/LedgerOfClient/LedgerOfClient";
import SearchPayment from "./pages/Account/SearchPayment/SearchPayment";
import CenterWiseSale from "./pages/Account/CenterwiseSale/CenterWiseSale";
import VerificationOfPayment from "./pages/Account/VerificationOfPayment/VerificationOfPayment";
import IncomeDetails from "./pages/Account/IncomeDetails/IncomeDetails";
import RecalculateCompliment from "./pages/Account/AccountReport/Recalculate/RecalculateCompliment";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/dashboard" element={<Dashboard />} />      

      <Route path="/patientRegistration" element={<PatientRegistration />} /> 
      <Route path="/testStatus" element={<TestStatusPage />} />      
      <Route path="/patientRegistarionList" element={<PatientRegistrationList />} />      

      <Route path="/makePayment" element={<MakePayment />} />      
      <Route path="/ledgerOfClient" element={<LedgerOfClient />} />      
      <Route path="/searchPayment" element={<SearchPayment />} />      
      <Route path="/centerWiseSale" element={<CenterWiseSale />} />      
      <Route path="/verificationOfPayment" element={<VerificationOfPayment />} />      
      <Route path="/incomeDetails" element={<IncomeDetails />} />     

      <Route path="/recalculateCompliment" element={<RecalculateCompliment />} />      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
