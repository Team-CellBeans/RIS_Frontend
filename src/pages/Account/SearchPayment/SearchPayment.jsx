import React, { useState } from "react";
import "./../../../components/Styles/global.css";
import "./SearchPayment.css";
import Base from "../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const SearchPayment = () => {
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
            <h5><FaUser style={{marginRight: '10px'}}/>Search Payment</h5>
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
                    Client
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
                  
                  <button className="btn-list" >LIST</button>
                </div>
              </div>

            </div>
            
          </form>
        </div>
    </Base>
  );
};

export default SearchPayment;
