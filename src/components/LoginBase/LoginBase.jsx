import React from 'react'
import CustomNavbar from '../CustomNavbar';
import Footer from '../Footer/Footer';

const LoginBase = ({title="welcome", children}) => {
  return (
    <div>
        <CustomNavbar />
        {children}

        <Footer />

    </div>
  )
}

export default LoginBase;
