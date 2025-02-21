import React, { useState } from "react";
import "./../../../../components/Styles/global.css";
import "./ComplimentReportNew";
import Base from "../../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const ComplimentReportNew = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
    
      };
  return (
    <Base>
        <div className="main-container">
        <div className="header-container">
            <b>
            <h5><FaUser style={{marginRight: '10px'}}/>Compliment Report</h5>
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
                    htmlFor="doctor"
                    style={{ marginBottom: '5px' }}
                  >
                    Doctor
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
                <div
                    style={{
                      display: 'flex',
                      gap: '15px',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginTop: '10px',
                    }}              
                    >
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="radio" name="paymentMode" value="Cash" id="cash" />
                      <span style={{ marginLeft: '5px' }}>Billed</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="radio" name="paymentMode" value="Cheque / DD" id="cheque" />
                      <span style={{ marginLeft: '5px' }}>Unbilled</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="radio" name="paymentMode" value="Credit Card" id="creditCard" />
                      <span style={{ marginLeft: '5px' }}>All</span>
                    </label>
                  </div>
              </div>
              <div >
                <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>PDF Report</button>  
                <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Excel Report</button>  
                <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Summary Report</button>  
            </div>
            </div>
            
          </form>
        </div>
    </Base>
  );
};

export default ComplimentReportNew;
