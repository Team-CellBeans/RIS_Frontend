import React, { useState } from "react";
import "./../../../components/Styles/global.css";
import "./IncomeDetails.css";
import Base from "../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const IncomeDetails = () => {
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
            <h5><FaUser style={{marginRight: '10px'}}/>Income Details</h5>
            </b>      
        </div>
        <form onSubmit={handleSubmit}>
            <div className="sub-container">
                <div style={{ paddingTop: '10px' }}>
                  {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                  {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
                </div>
                
            </div>
            <div style={{paddingTop: '10px'}}>
            <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginBottom: '10px',
                }}              
            >
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="radio" name="paymentMode" value="Cash" id="cash" />
                  <span style={{ marginLeft: '5px' }}>Date Range</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="radio" name="paymentMode" value="Cheque / DD" id="cheque" />
                  <span style={{ marginLeft: '5px' }}>Month</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="radio" name="paymentMode" value="Credit Card" id="creditCard" />
                  <span style={{ marginLeft: '5px' }}>Year</span>
                </label>
            </div>  
            <hr />
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
                    htmlFor="selectClientName"
                    style={{ marginBottom: '5px' }}
                  >
                    Select Client Name
                  </label>
                  <select
                    id="clientName"
                    name="clientName"
                    required
                    // value={clientName}
                    // onChange={(e) => setClientName(e.target.value)}
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
                <div style={{ flex: 1, marginRight: '25px' }}>
                  <label
                    htmlFor="modeOfPayment"
                    style={{ marginBottom: '5px' }}
                  >
                    Mode of Payment
                  </label>
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
                      <span style={{ marginLeft: '5px' }}>Cash</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="radio" name="paymentMode" value="Cheque / DD" id="cheque" />
                      <span style={{ marginLeft: '5px' }}>Cheque / DD</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="radio" name="paymentMode" value="Credit Card" id="creditCard" />
                      <span style={{ marginLeft: '5px' }}>Credit Card</span>
                    </label>
                  </div>
                </div>
            </div>
            <hr />
            <div>
                <div className="header-text">
                    <span><b>Excel Report</b></span>
                </div>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <button type="submit" className="btn-income-details">CENTER-WISE INCOME DETAILS(B2C)</button>         
                  </div>
                  <div style={{ flex: 1}}>
                    <button type="submit" className="btn-income-details">CENTER-WISE INCOME SUMMARY(B2C)</button> 
                  </div>
                  <div style={{ flex: 1}}>
                    <button type="submit" className="btn-income-details">INCOME SUMMARY(B2B)</button> 
                  </div>
                  <div style={{ flex: 1}}>
                  </div>  
                </div>     
            </div>
            <hr />
            <div >
                <div className="header-text">
                    <span><b>PDF Report</b></span>
                </div>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <button type="submit" className="btn-income-details">PRE.OUTSTANDING REC. (B2C)</button>         
                  </div>
                  <div style={{ flex: 1 }}>
                    <button type="submit" className="btn-income-details">CENTER-WISE INCOME(B2C)</button> 
                  </div>
                  <div style={{ flex: 1}}>
                    <button type="submit" className="btn-income-details">DEPT WISE REPORT(B2C)</button> 
                  </div>
                  <div style={{ flex: 1}}>
                    <button type="submit" className="btn-income-details">OUTSTANDING PAID</button> 
                  </div>  
                </div>     
            </div>
           </div>
          </form>
        </div>
    </Base>
  );
};

export default IncomeDetails;
