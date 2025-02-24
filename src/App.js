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
import UpdateCharges from "./pages/Account/AccountReport/UpdateCharges/UpdateCharges";
import ComplimentReportNew from "./pages/Account/AccountReport/ComplimentReportNew/ComplimentReportNew";
import ComprehensiveReportNew from "./pages/Account/AccountReport/ComprehensiveReportNew/ComprehensiveReportNew";
import ComprehensiveReport from "./pages/Account/AccountReport/ComprehensiveReport/ComprehensiveReport";
import DoctorWiseSales from "./pages/Account/AccountReport/DoctorWiseSales/DoctorWiseSales";
import AuthorizedList from "./pages/Account/AccountReport/AuthorizedList/AuthorizedList";
import GenerarateInvoiceCc from "./pages/Account/AccountReport/GenerarateInvoiceCc/GenerarateInvoiceCc";
import GenerateInvoiceSource from "./pages/Account/AccountReport/GenerateInvoiceSource/GenerateInvoiceSource";
import ComplimentReport from "./pages/Account/AccountReport/ComplimentReport/ComplimentReport";

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
      <Route path="/patientRegistrationList" element={<PatientRegistrationList />} />      

      <Route path="/makePayment" element={<MakePayment />} />      
      <Route path="/ledgerOfClient" element={<LedgerOfClient />} />      
      <Route path="/searchPayment" element={<SearchPayment />} />      
      <Route path="/centerWiseSale" element={<CenterWiseSale />} />      
      <Route path="/verificationOfPayment" element={<VerificationOfPayment />} />      
      <Route path="/incomeDetails" element={<IncomeDetails />} />     

      <Route path="/recalculateCompliment" element={<RecalculateCompliment />} />      
      <Route path="/updateCharges" element={<UpdateCharges />} />      
      <Route path="/complimentReportNew" element={<ComplimentReportNew />} />      
      <Route path="/comprehensiveReportNew" element={<ComprehensiveReportNew />} />
      <Route path="/complimentReport" element={<ComplimentReport />} />
      <Route path="/comprehensiveReport" element={<ComprehensiveReport />} />            
      <Route path="/doctorWiseSales" element={<DoctorWiseSales />} />      
      <Route path="/authorizedList" element={<AuthorizedList />} />      
      <Route path="/generarateInvoiceCc" element={<GenerarateInvoiceCc />} />      
      <Route path="/generateInvoiceSource" element={<GenerateInvoiceSource />} />      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
