import React from 'react'
import Header from './Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

const Base = ({title="welcome", children}) => {
  return (
    <div className='container-fluid m-0 p-0'>
      <Header />
      <Sidebar />
      <div style={{ paddingTop: '60px', paddingLeft: '50px' }}>
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default Base;
