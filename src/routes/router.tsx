import {Layout} from '@layout';
import {Cart, Home} from '@routes';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
  </Route>,
);

export default createBrowserRouter(router);
