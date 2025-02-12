import React, { useState } from "react";
import "./PatientRegistration.css";
import Base from "../../../components/Base";

const testOptions = [
  "CBC21 - COMPLETE BLOOD COUNT",
  "LFT - LIVER FUNCTION TEST",
  "Hemoglobin - BLOOD TEST",
  "KFT - KIDNEY FUNCTION TEST",
];

const PatientRegistration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTests, setSelectedTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = testOptions.filter((test) =>
        test.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredTests(filtered);
    } else {
      setFilteredTests([]);
    }
  };

  const handleSelectTest = (test) => {
    if (!selectedTests.includes(test)) {
      setSelectedTests([...selectedTests, test]);
    }
    setSearchTerm(""); // Clear input after selection
    setFilteredTests([]); // Hide dropdown
  };

  return (
    <Base>
    <div className="patient-registration">
      {/* Header Section */}
      <div className="header1">
        <h2>TEST REGISTRATION</h2>
        <span>Today's Patient count: 3 | Current month patient count: 25 | Patient count per month allowed: 1500</span>
      </div>

      {/* Patient Details */}
      <div className="form-container">
        <div className="form-row">
          <label>Select Client</label>
          <select>
            <option>DHANASHREE HOSPITAL DIAGNOSTICS</option>
          </select>
          <label>Available Bal.</label>
          <input type="text" value="0" readOnly />
        </div>

        <div className="form-row">
          <label>Initial</label>
          <select>
            <option>Mr</option>
          </select>
          <label>Patient Name</label>
          <input type="text" placeholder="Enter Name" />
        </div>

        <div className="form-row">
          <label>Gender</label>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label>Age</label>
          <input type="text" placeholder="Year" />
          <label>Date of Birth</label>
          <input type="text" placeholder="DD/MM/YYYY" />
        </div>

        <div className="form-row">
          <label>Code</label>
          <select>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>

          <label>Mobile No</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-row">
          <label>Reg Date/Time</label>
          <input type="text" placeholder="03/02/2025 13:55:58" readOnly />
          <label>Sample Drawn Date/Time</label>
          <input type="text" placeholder="03/02/2025 13:55:58" readOnly />
          <label>Send Email/SMS</label>
          <input type="checkbox" /> Email
          <input type="checkbox" /> SMS
        </div>

        {/* Address & History Section */}
        <div className="form-row bordered-box">
  <div className="form-group">
    <label>Clinical History</label>
    <textarea></textarea>
  </div>
  <div className="form-group">
    <label>Remark</label>
    <textarea></textarea>
  </div>
  <div className="form-group">
    <label>Address</label>
    <textarea></textarea>
  </div>
  <div className="form-group">
    <label>Ref Doctor</label>
    <input type="text" />
    <input type="text" />
  </div>
</div>


        <div className="form-row">
          <label>Source / TPA</label>
          <select>
            <option>Select</option>
          </select>
          <label>ID Type</label>
          <select>
            <option>Select</option>
          </select>
          <label>ID Number</label>
          <input type="text" />
          <label>ID Number</label>
        </div>
        <div style={{ textAlign: "center", fontSize: "18px", color: "red", fontWeight: "bold", marginTop: "10px" }}>
  <label>Total Amount = {selectedTests.length * 250}</label>
</div>

        {/* Test/Profile Search Bar */}
        <div className="form-row">
          <label>Select Test / Profile</label>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Test/Profile"
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            {filteredTests.length > 0 && (
              <ul className="dropdown-list">
                {filteredTests.map((test, index) => (
                  <li key={index} onClick={() => handleSelectTest(test)}>
                    {test}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* <div style={{ textAlign: "center", fontSize: "18px", color: "red", fontWeight: "bold", marginTop: "10px" }}>
  <label>Total Amount = {selectedTests.length * 250}</label>
</div> */}


        {/* Show Table Only When Tests are Selected */}
        {selectedTests.length > 0 && (
          <>
            {/* Billing Info */}
            <div className="total-amount">
              <strong>Total Amount = {selectedTests.length * 250}</strong>
            </div>

            {/* Test Table */}
            <table>
              <thead>
                <tr>
                  <th>Test/Profile Code</th>
                  <th>Test/Profile Name</th>
                  <th>Profile/Test</th>
                  <th>Test Rate</th>
                </tr>
              </thead>
              <tbody>
                {selectedTests.map((test, index) => (
                  <tr key={index}>
                    <td>{test.split(" - ")[0]}</td>
                    <td>{test.split(" - ")[1]}</td>
                    <td>Test</td>
                    <td>250</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Sample Type Table */}
            <table>
              <thead>
                <tr>
                  <th>Sample Type</th>
                  <th>Test Codes</th>
                  <th>Test Names</th>
                  <th>Vial ID</th>
                </tr>
              </thead>
              <tbody>
                {selectedTests.map((test, index) => (
                  <tr key={index}>
                    <td>WHOLE BLOOD EDTA</td>
                    <td>{test.split(" - ")[0]}</td>
                    <td>{test.split(" - ")[1]}</td>
                    <td><input type="text" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* Buttons */}
        <div className="form-footer">
          <button className="btn-secondary">ADD NEW</button>
          <button className="btn-primary">SUBMIT</button>
          <button className="btn-primary">SUBMIT AND BILL</button>
          <button className="btn-primary">SUBMIT AND LAB FORM</button>
          <button className="btn-primary">SUBMIT AND BILL, SOURCE RATE</button>
          <button className="btn-secondary">CONSENT FORM</button>
          <button className="btn-secondary">ESTIMATED BILL</button>
          <button className="btn-secondary">WORKSHEET</button>
        </div>
      </div>
    </div>
    </Base>
  );
};

export default PatientRegistration;
