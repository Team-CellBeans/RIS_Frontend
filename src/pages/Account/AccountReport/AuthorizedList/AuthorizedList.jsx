import React, { useState } from "react";
import "./../../../../components/Styles/global.css";
import Base from "../../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const AuthorizedList = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const data = [
        {
          regNo: "250232300025",
          patientName: "Rama Sharma",
          refDoctor:"Vicky Roy",
          testName: "COMPLETE BLOOD COUNT",
          username: "Prasad",
        },
        {
            regNo: "240210000123",
            patientName: "Mrs Choure Poonam	",
            refDoctor:"Snehal Shende",
            testName: "SPL Gold Full Body check up	",
            username: "Prasad",
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
                <h5><FaUser style={{marginRight: '10px'}}/>Authorized List</h5>
                </b>      
            </div>
            <form onSubmit={handleSubmit}>
                <div className="sub-container">
                    <div style={{ paddingTop: '10px' }}>
                      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
                    </div>  
                    <div style={{paddingTop: '10px'}}>
                        <div style={{ display: 'flex'}}>
                            <div style={{ flex: 1, marginRight: '25px' }}>
                                <label
                                  htmlFor="selectAsc"
                                >
                                  Select ASC
                                </label>
                                <select
                                   id="selectAsc"
                                   name="selectAsc"
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
                                    <option value="">Select ASC</option>
                                    <option value="Client A">All Center</option>
                                </select>
                                        
                            </div>
                            <div style={{ flex: 1, marginRight: '25px' }}>
                                <label
                                    htmlFor="fromDate"
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
                            <div style={{ flex: 1, marginRight: '25px' }}></div>
                        </div>
                        
                        <div >
                            <button type="submit" className="btn-submit" style={{ width: '170px', padding: 0}}>List</button>  
                            <button type="submit" className="btn-submit" style={{ width: '170px', padding: 0}}>Save And Print</button>  
                        </div>
                        <div className="table-container">
                            <table className="custom-table">
                              <thead>
                                <tr>
                                  <th>Reg. No</th>
                                  <th>Patient Name</th>
                                  <th>Ref Doctor</th>
                                  <th>Test Name</th>
                                  <th>Username</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((row, index) => (
                                  <tr key={index}>
                                    <td>{row.regNo}</td>
                                    <td>{row.patientName}</td>
                                    <td>{row.refDoctor}</td>
                                    <td>{row.testName}</td>
                                    <td>{row.username}</td>   
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                        </div>
                    </div>              
                </div>
            </form>
        </div>
    </Base>
  );    
};  
    
export default AuthorizedList;
