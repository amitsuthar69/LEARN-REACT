import { NavLink } from "react-router-dom";

/*
we're using NavLink here to make our nav links have some styling when it's active 
or say when we're on a route being dispalyed when we click on a nav link.

NavLink works fine with both style and className but, if we want some additional styles such as hover effects, 
we can use NavLink functions in a style prop and our additional css in className.

we destructure the "isActive" property of NavLink in side a function passed into any of the style or className.

*/

const Header = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "cyan",
  };

  return (
    <header className="bg-gray-500 p-4 text-white">
      {/* Link is similar to an <a> tag in html, the difference is, it doesn't makes the refresh */}
      <nav className="flex items-center gap-8 ">
        <NavLink
          className="hover:text-cyan-400"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/">
          Home
        </NavLink>
        <NavLink
          className="hover:text-cyan-400"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about">
          About
        </NavLink>
        <NavLink
          className="hover:text-cyan-400"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/hosts">
          Hosts
        </NavLink>
        <NavLink
          className="hover:text-cyan-400"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans">
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
