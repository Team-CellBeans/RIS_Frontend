import React, { useEffect, useState } from "react";
import "./Login.css";
import img1 from './../../assets/welcome_section_img_1.png';
import img2 from './../../assets/welcome_section_img_2.png';
import img3 from './../../assets/welcome_section_img_3.png';
import img4 from './../../assets/welcome_section_img_4.png';
import img5 from './../../assets/welcome_section_img_5.png';
import LoginBase from "../../components/LoginBase/LoginBase";


const Login = () => {
  const [captcha, setCaptcha] = useState("S$Ud86");
  const [captchaInput, setCaptchaInput] = useState("");

  const images = [img1, img2, img3, img4, img5];

  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); 

  return (
    <LoginBase>
    <div class="base-container">
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" placeholder="Enter username" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <label>Unit</label>
        <select>
          <option>Select unit</option>
        </select>

        <label>Enter Captcha</label>
        <div className="captcha-container">
            <span className="captcha-text">{captcha}</span>
            <button className="refresh-captcha">&#x21bb;</button>
          <input 
            type="text" 
            placeholder="Enter Captcha text" 
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
          </div>
          <button className="sign-in">Sign in</button>
        </div>
      <div className="welcome-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Welcome</h1>
        <p>Enter your personal details and start your journey with us</p>
      </div>
    </div>
    </div>
    </LoginBase>
  );
};

export default Login;