import React, { useState } from "react";
import "./../../../components/Styles/global.css";
import "./VerificationOfPayment.css";
import Base from "../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const VerificationOfPayment = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("2025-02-03");
    const [client, setClient] = useState("");
  
    const data = [
      {
        client: "DHANASHREE HOSPITAL DIAGNOSTICS",
        billNo: "98465132",
        regNo: "",
        patientName: "XXXXX",
        billDate: "02/02/2025",
        amount: "150",
        payMode: "Cash",
        chequeNo: "",
        verify: true,
      },
      {
        client: "DHANASHREE HOSPITAL DIAGNOSTICS",
        billNo: "98465132",
        regNo: "",
        patientName: "",
        billDate: "",
        amount: "",
        payMode: "",
        chequeNo: "",
        verify: true,
      },
    ];


    const handleSubmit = async e => {
        e.preventDefault();
    
      };
    

  return (
    <Base>
        <div className="main-container">
        <div className="header-container">
            <b>
            <h5><FaUser style={{marginRight: '10px'}}/>Verification Of Payment</h5>
            </b>      
        </div>
        <form onSubmit={handleSubmit}>
            <div className="sub-container">
                <div style={{ paddingTop: '20px' }}>
                  {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                  {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
                </div>
                
            </div>
            <div style={{paddingTop: '10px'}}>

              <div style={{ display: 'flex', marginBottom: '16px' }}>
                <div style={{ flex: 1, marginRight: '25px' }}>
                <label
                    htmlFor="fromDate"
                    style={{ marginBottom: '5px' }}
                  >
                    From Date
                  </label>
                  <input
                    type="date"
                    id="fromDate"
                    name="fromDate"
                    // value={formData.scanDescription}
                    // onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontSize: '14px',
                      resize: 'vertical',
                      height: '40px',
                      boxSizing: 'border-box',
                    }}
                  ></input>
                  
                </div>
                <div style={{ flex: 1, marginRight: '25px' }}>
                  <label
                    htmlFor="toDate"
                    style={{ marginBottom: '5px' }}
                  >
                    To Date
                  </label>
                  <input
                    type="date"
                    id="toDate"
                    name="toDate"
                    // value={formData.scanDescription}
                    // onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontSize: '14px',
                      resize: 'vertical',
                      height: '40px',
                      boxSizing: 'border-box',
                    }}
                  ></input>
                </div>
                <div style={{ flex: 1, marginRight: '25px' }}>
                  <label
                    htmlFor="client"
                    style={{ marginBottom: '5px' }}
                  >
                    Select Client
                  </label>
                  <select
                     id="clientName"
                     name="clientName"
                     required
                            //   value={clientName}
                            //   onChange={(e) => setClientName(e.target.value)}
                              style={{
                                padding: '5px',
                                width: '100%',
                                height: '40px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                              }}
                            >
                              <option value="">Select Client Name</option>
                              <option value="Client A">Client A</option>
                              <option value="Client B">Client B</option>
                            </select>
                  
                </div>
                <div style={{ flex: 1, marginRight: '25px', display: 'flex', alignItems: 'center', marginTop: '25px' }}> 
                  <button className="btn-list" >SHOW</button>
                </div>
              </div>

            </div>
            <div className="table-container">
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Bill No</th>
                    <th>Reg. No</th>
                    <th>Patient Name</th>
                    <th>Bill Date</th>
                    <th>Amount</th>
                    <th>Pay Mode</th>
                    <th>Cheque No</th>
                    <th>Verify</th>
                    <th>Details</th>
                    <th>Delete</th>
                    <th>Print</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.client}</td>
                      <td>{row.billNo}</td>
                      <td>{row.regNo}</td>
                      <td>{row.patientName}</td>
                      <td>{row.billDate}</td>
                      <td>{row.amount}</td>
                      <td>{row.payMode}</td>
                      <td>{row.chequeNo}</td>
                      <td><input type="checkbox" checked={row.verify} readOnly /></td>
                      <td><a href="#">Payment Details</a></td>
                      <td><button className="btn-delete">Delete</button></td>
                      <td><button className="btn-print">Print</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="button-container">
              <button className="btn-print">PRINT</button>
              <button className="btn">VERIFY</button>
            </div>
          </form>
        </div>
    </Base>
  );
};

export default VerificationOfPayment;
