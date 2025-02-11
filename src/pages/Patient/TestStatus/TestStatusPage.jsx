import React, { useState } from "react";
import "./TestStatusPage.css"; // Importing the external CSS file
import Base from "../../../components/Base";


const TestStatusPage = () => {
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true); // Show the table when the "LIST" button is clicked
  };
  
  const data = [
    {
      regNo: "250232300045",
      patientName: "Mr NILESH KUMAR SHRIVASTAV",
      sex: "Male",
      age: 37,
      mdy: "Year",
      refDoctorName: "DHANASHREE HOSPITAL MOSHI",
      centerName: "DHANASHREE HOSPITAL DIAGNOSTICS",
      testName: "LIVER FUNCTION TEST",
      status: "Tested",
      outstandingAmount: 0,
      dateOfEntry: "06/02/2025",
    },
    {
      regNo: "250232300044",
      patientName: "Mrs SWAPNALI AWALE",
      sex: "Female",
      age: 50,
      mdy: "Year",
      refDoctorName: "DHANASHREE HOSPITAL MOSHI",
      centerName: "DHANASHREE HOSPITAL DIAGNOSTICS",
      testName: "HbA1c (GLYCOSYLATED HAEMOGLOBIN) BLOOD",
      status: "Registered",
      outstandingAmount: 0,
      dateOfEntry: "06/02/2025",
    },
    {
      regNo: "250232300043",
      patientName: "Mr DADU JADHAV",
      sex: "Male",
      age: 28,
      mdy: "Year",
      refDoctorName: "DHANASHREE HOSPITAL MOSHI",
      centerName: "DHANASHREE HOSPITAL",
      testName: "SERUM ELECTROLYTES",
      status: "Registered",
      outstandingAmount: 0,
      dateOfEntry: "06/02/2025",
    },
    {
      regNo: "250232300042",
      patientName: "Mrs ASHWINI PAWAR",
      sex: "Female",
      age: 23,
      mdy: "Year",
      refDoctorName: "DHANASHREE HOSPITAL",
      centerName: "DHANASHREE HOSPITAL",
      testName: "THYROID FUNCTION TEST",
      status: "Tested",
      outstandingAmount: 1750,
      dateOfEntry: "05/02/2025",
    },
  ];


  return (
    <Base>
    <div className="container">
      <div className="title">
        <span>⚙️ SAMPLE STATUS</span>
      </div>

      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Client</label>
          <select className="select">
            <option value="all">All</option>
          </select>
        </div>

        <div className="form-group">
          <label>From Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>To Date</label>
          <input type="date" className="input" />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select className="select">
            <option value="all">All</option>
          </select>
        </div>

        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Patient Name"
          />
        </div>

        <div className="form-group">
          <label>Reg. No.</label>
          <input type="text" className="input" placeholder="Enter Reg. No." />
        </div>

        <div className="form-group">
          <label>Select Department</label>
          <select className="select">
            <option value="all">All Department</option>
          </select>
        </div>

        <div className="form-group">
          <label>F. Year</label>
          <select className="select">
            <option value="2024-2025">01/04/2024 to 31/03/2025</option>
          </select>
        </div>

        <div className="form-group">
          <label>Barcode</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Barcode"
          />
        </div>

        <div className="form-group">
          <label>Total Patient</label>
          <input type="text" className="input"  />
        </div>

        <button type="submit" className="button">
          LIST
        </button>
      </form>

      {/* Table */}
      {showTable && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>RegNo</th>
                <th>Patient Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>MDY</th>
                <th>Ref.Doctor Name</th>
                <th>Center Name</th>
                <th>Test Name</th>
                <th>Status</th>
                <th>Outstanding Amount</th>
                <th>Date Of Entry</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.regNo}</td>
                  <td>{item.patientName}</td>
                  <td>{item.sex}</td>
                  <td>{item.age}</td>
                  <td>{item.mdy}</td>
                  <td>{item.refDoctorName}</td>
                  <td>{item.centerName}</td>
                  <td>{item.testName}</td>
                  <td>{item.status}</td>
                  <td>{item.outstandingAmount}</td>
                  <td>{item.dateOfEntry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </Base>
  );
};
export default TestStatusPage;
