import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '~/sass/main.sass';
import Layout from '~/layout/Layout';
import Routes from '~/pages/Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
