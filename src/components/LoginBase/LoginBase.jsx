import React from 'react'
import Header from '../Header';
import Footer from '../Footer/Footer';

const LoginBase = ({title="welcome", children}) => {
  return (
    <div>
        <Header />
        {children}

        <Footer />

    </div>
  )
}

export default LoginBase;
