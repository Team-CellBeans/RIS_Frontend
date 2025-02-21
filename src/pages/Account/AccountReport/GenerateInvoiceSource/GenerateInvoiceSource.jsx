import React, { useState } from "react";
import "./../../../../components/Styles/global.css";
import Base from "../../../../components/Base";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const GenerateInvoiceSource = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showTable, setShowTable] = useState(false);

    const data = [
        {
          invoiceNo: "20250132301",
          centerCode: "Cellbeans1	",
          centerName:"Cellbeans Hospital",
          monthOfInvoice: "01",
          yearOfInvoice: "2025",
        },
        {
            invoiceNo: "250232300025",
            centerCode: "Cellbeans3",
            centerName:"Cellbeans Hospital",
            monthOfInvoice: "02",
            yearOfInvoice: "2025",
          },
      ];

      const handleListClick = (e) => {
        e.preventDefault();
        setShowTable(true); // Show table when "List" button is clicked
    };

    const handleSubmit = async e => {
        e.preventDefault();
    
      };
  return (
    <Base>
        <div className="main-container">
            <div className="header-container">
                <b>
                <h5><FaUser style={{marginRight: '10px'}}/>Bill Report CC</h5>
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
                                    htmlFor="fromDate"
                                  >
                                    Select Month
                                  </label>
                                  <select
                                   id="selectMonth"
                                   name="selectMonth"
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
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="Novemeber">Novemeber</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                            <div style={{ flex: 1, marginRight: '25px' }}>
                                <label
                                  htmlFor="selectAsc"
                                >
                                  Select Client
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
                                    <option value="">Select Client</option>
                                    <option value="Client A">DH Hospital</option>
                                </select>
                                        
                            </div>
                            <div style={{ flex: 1, marginRight: '25px' }}>
                            </div>
                            <div style={{ flex: 1, marginRight: '25px' }}></div>
                        </div>
                        
                        <div >
                            <button type="submit" className="btn-submit" onClick={handleListClick} style={{ width: '150px', padding: 0}}>Search</button>  
                            <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Excel</button>  
                            <button type="submit" className="btn-submit" style={{ width: '150px', padding: 0}}>Report</button>  
                        </div>
                        {showTable && (
                            <div className="table-container">
                                <table className="custom-table">
                                  <thead>
                                    <tr>
                                      <th>Invoice No</th>
                                      <th>Center Code</th>
                                      <th>Center Name</th>
                                      <th>Month of Invoice</th>
                                      <th>Year of Invoice</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data.map((row, index) => (
                                      <tr key={index}>
                                        <td>{row.invoiceNo}</td>
                                        <td>{row.centerCode}</td>
                                        <td>{row.centerName}</td>
                                        <td>{row.monthOfInvoice}</td>
                                        <td>{row.yearOfInvoice}</td>   
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                            </div>
                         )}    
                    </div>              
                </div>
            </form>
        </div>
    </Base>
  );    
};  
    
export default GenerateInvoiceSource;
