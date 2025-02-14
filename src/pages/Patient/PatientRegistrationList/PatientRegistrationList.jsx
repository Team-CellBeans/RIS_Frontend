import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientRegistrationList.css";
import Base from "../../../components/Base";

const PatientRegistrationList = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("patientData"));
    setPatientData(storedData);
  }, []);

  return (
    <>
    <Base>
      <div className="list-container">
        <h2>Patient Registration List</h2>
        {patientData ? (
          <div className="patient-card">
            <p><strong>MR No:</strong> {patientData.mrNo}</p>
            <p><strong>Name:</strong> {patientData.nameTitle} {patientData.firstName} {patientData.middleName} {patientData.lastName}</p>
            <p><strong>Citizen ID:</strong> {patientData.citizenId} ({patientData.citizenIdNumber})</p>
            <p><strong>Mobile No:</strong> {patientData.mobileNo}</p>
            <button onClick={() => navigate("/")}>Register New</button>
          </div>
        ) : (
          <p>No patient registered yet.</p>
        )}
      </div>
      </Base>
    </>
  );
};

export default PatientRegistrationList;
