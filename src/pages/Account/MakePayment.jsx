import React, { useState } from "react";
import "./../../components/Styles/mainPages.css";
import "./MakePayment.css";
import Base from "../../components/Base";
import { useNavigate } from "react-router-dom";

const MakePayment = () => {
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
            <h5>Make Payment</h5>
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
                    htmlFor="selectClientName"
                    style={{ marginBottom: '5px' }}
                  >
                    Select Client Name
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
                                borderRadius: '10px',
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
                    htmlFor="transactionDate"
                    style={{ marginBottom: '5px' }}
                  >
                    Transaction Date
                  </label>
                  <input
                    type="date"
                    id="transactionDate"
                    name="transactionDate"
                    // value={formData.scanDescription}
                    // onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '10px',
                      fontSize: '14px',
                      resize: 'vertical',
                      height: '40px',
                      boxSizing: 'border-box',
                    }}
                  ></input>
                </div>
                <div style={{ flex: 1, marginRight: '25px' }}>
                  <label
                    htmlFor="amount"
                    style={{ marginBottom: '5px' }}
                  >
                    Amount
                  </label>
                  <input
                    id="amount"
                    name="amount"
                   
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ccc',
                      borderRadius: '10px',
                      fontSize: '14px',
                      resize: 'vertical',
                      height: '40px',
                      boxSizing: 'border-box',
                    }}
                  ></input>
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
      justifyContent: 'flex-start'
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

            </div>
            <div >
                <button type="submit" className="btn-submit">PROCEED</button>  
            </div>
          </form>
        </div>
    </Base>
  );
};

export default MakePayment;
