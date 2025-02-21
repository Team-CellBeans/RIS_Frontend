import React, { useState } from "react";
import "./../../../../components/Styles/global.css";
import "./DoctorWiseSales.css";
import Base from "../../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const DoctorWiseSales = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const data = [
        {
          doctorName: "DHANASHREE HOSPITAL DIAGNOSTICS",
          regNo: "250232300025",
          patientName: "Rama Sharma",
          testCode: "CBC21",
          testCharges: "250",
          registrationDate: "03/02/2025  10:12:08",
        },
        {
            doctorName: "DHANASHREE HOSPITAL DIAGNOSTICS",
            regNo: "250232300023",
            patientName: "Devki Khedekar",
            testCode: "SLBLG",
            testCharges: "150",
            registrationDate: "03/02/2025  10:11:43",
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
                <h5><FaUser style={{marginRight: '10px'}}/>Doctor Sales Report</h5>
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
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1, marginRight: '25px' }}>
                                  <label
                                    htmlFor="doctor"
                                  >
                                    Doctor Name
                                  </label>
                                  <select
                                     id="doctor"
                                     name="doctor"
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
                                              <option value="">Select Doctor</option>
                                              <option value="Client A">Dr. John</option>
                                              <option value="Client B">Dr. Thomus</option>
                                    </select>          
                            </div>
                            <div style={{ flex: 1, marginRight: '25px' }}></div>
                            <div style={{ flex: 1, marginRight: '25px' }}></div>
                            <div style={{ flex: 1, marginRight: '25px' }}></div>
                        </div>
                        <div >
                            <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Search</button>  
                            <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Report</button>  
                            <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Excel Report</button>  
                        </div>
                        <div className="table-container">
                            <table className="custom-table">
                              <thead>
                                <tr>
                                  <th>Doctor Name</th>
                                  <th>Reg No</th>
                                  <th>Patient Name</th>
                                  <th>Test Code</th>
                                  <th>Test Charges</th>
                                  <th>Registration Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((row, index) => (
                                  <tr key={index}>
                                    <td>{row.doctorName}</td>
                                    <td>{row.regNo}</td>
                                    <td>{row.patientName}</td>
                                    <td>{row.testCode}</td>
                                    <td>{row.testCharges}</td>
                                    <td>{row.registrationDate}</td>                
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
    
export default DoctorWiseSales;
