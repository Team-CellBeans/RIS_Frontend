import React from 'react'
import CustomNavbar from './CustomNavbar';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

const Base = ({title="welcome", children}) => {
  return (
    <div className='container-fluid m-0 p-0'>
      <CustomNavbar />
      <Sidebar />
      <div style={{ paddingTop: '60px', paddingLeft: '50px' }}>
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default Base;
