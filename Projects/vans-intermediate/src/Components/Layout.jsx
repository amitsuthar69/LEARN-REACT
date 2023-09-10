/* 
1. The <Outlet /> component in React Router is a placeholder that renders 
the content of the currently matched route.

2. It is typically used in parent routes to render the content of their child routes. 

3. The <Outlet /> component can also be used to render the content of a nested route.
*/

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
