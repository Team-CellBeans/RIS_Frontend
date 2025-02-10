import React, { useState } from 'react';
import "./PatientRegistration.css";
import Base from '../../components/Base';

const PatientRegistration = () => {
    const [formData, setFormData] = useState({
        mrNo: "",
        citizenID: "",
        uploadedID: "",
        mobileNo: "",
        phoneNo: "",
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        ageYear: "",
        ageMonth: "",
        ageDay: "",
        gender: "",
        email: "",
        address: "",
        city: "",
        district: "",
        state: "",
        pinCode: "",
        landmark: "",
        bloodGroup: "",
        occupation: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Base>
        <div className="patient-registration">
        <div
            style={{
              height: '40px',
              backgroundColor: '#34B3F1',
              color: 'white',
              padding: '7px',
              borderRadius: '10px',
            }}
          >
            <b>
            <h5>New Patient Registration (Patient Profile Information)</h5>
            </b>
            
          </div>
            
            <div className="form-section">
                <div className="form-group">
                    <label>MR No:</label>
                    <input type="text" name="mrNo" value={formData.mrNo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Citizen ID:</label>
                    <select name="citizenID" value={formData.citizenID} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Aadhar Card">Aadhar Card</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Upload ID:</label>
                    <input type="file" name="uploadedID" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Mobile No:</label>
                    <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Phone No:</label>
                    <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>DOB:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email ID:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Current Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Pin Code:</label>
                    <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Select Blood Group:</label>
                    <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                    </select>
                </div>
                <div className="button-group">
                    <button className="save-btn">Save</button>
                    <button className="next-btn">Next</button>
                </div>
            </div>
        </div>
        </Base>
    );
};

export default PatientRegistration;
