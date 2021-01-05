import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
