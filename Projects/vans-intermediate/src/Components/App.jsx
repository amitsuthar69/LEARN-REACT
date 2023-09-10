// npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// <--- Components --->
import Home from "./Home";
import About from "./About";
import Vans from "./Vans/Vans";
import VanDetails from "./Vans/VanDetails";
import Dashboard from "./Host/Dashboard";
import Reviews from "./Host/Reviews";
import Layout from "./Layout";
import HostLayout from "./HostLayout";
import Income from "./Host/Income";
import HostVans from "./Host/HostVans";
import HostVanDetail from "./Host/HostVanDetail";

// <--- Server --->
import "/home/amit/React/learn-routes/server.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*A layout is a Shared UI and Only component inside this parent Route have 
            access to the Components rendered in Layout.*/}
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About />} /> /about is an absolute path */}
            <Route path="about" element={<About />} />{" "}
            {/* about is a relative path */}
            <Route path="vans" element={<Vans />} />
            {/* parameterised route; which help to create nested routes, eg: vans/1 where 1 is the :id*/}
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="hosts" element={<HostLayout />}>
              {/* This hostLayout should exist on every route starting with /hosts */}
              {/* "index" prop allows any other component to render along with the Parent layout, 
              means /hosts will not only render HostLayout but will also render Dashboard */}
              <Route index element={<Dashboard />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
