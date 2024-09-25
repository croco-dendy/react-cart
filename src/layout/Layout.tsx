import {ErrorBoundary} from 'react-error-boundary';
import {Outlet} from 'react-router-dom';
import {Header} from './header';
import {Footer} from './footer';
import classes from './layout.module.scss';
import {baseTheme, Container} from '@chakra-ui/react';

const Layout = () => {
  return (
    <ErrorBoundary fallbackRender={() => null}>
      <Header />
      <Container p={0} maxW={baseTheme.breakpoints.lg} className={classes.main}>
        <div className={classes.scrollable}>
          <Outlet />
        </div>
        <Footer />
      </Container>
    </ErrorBoundary>
  );
};

export default Layout;
