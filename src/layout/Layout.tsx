import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="scrollable">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
