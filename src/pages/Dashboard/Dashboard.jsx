import React from "react";
import "./Dashboard.css";
import { 
  MdDashboard, MdAssignment, MdPayments, MdList, MdEvent, MdScience, MdLocalHospital, MdPeople 
} from "react-icons/md";
import Base from "../../components/Base";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

  const dashboardItems = [
    { id: 1, name: "Dashboard", icon: <MdDashboard /> },
    { id: 2, name: "Register", icon: <MdAssignment />, path: "/patientRegistration" },
    { id: 3, name: "Billing", icon: <MdPayments /> },
    { id: 4, name: "Order List", icon: <MdList /> },
    { id: 5, name: "Queue", icon: <MdPeople /> },
    { id: 6, name: "Future Appointment", icon: <MdEvent /> },

  ];


  return (
    <Base>
        <div className="main-container">
        <div className="header-container">
            <b>
            <h5>Dashboard</h5>
            </b>      
          </div>
          <div className="dashboard-grid">
            {dashboardItems.map((item) => (
              <div key={item.id} className="dashboard-card"  onClick={() => navigate(item.path)} 
              style={{ cursor: "pointer" }}>
                <div className="dashboard-icon">{item.icon}</div>
                <p className="dashboard-text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
    </Base>
  );
};

export default Dashboard;
