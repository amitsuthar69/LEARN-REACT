// npm install react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// <--- Components --->
import Home from "./Home";
import About from "./About";
import Vans from "./Vans";
import VanDetails from "./VanDetails";

// <--- Server --->
import "/home/amit/React/learn-routes/server.js";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Link is similar to an <a> tag in html, the difference is, it doesn't makes the refresh */}
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />

          {/* parameterised route; which help to create nested routes, eg: vans/1 where 1 is the :id*/}
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
