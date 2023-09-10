/*
Here when we try to use the NavLink isActive property, we can find a bug that it get applies
to both dashboard and any other link you clicked on, but doesn't shows similar behaviour when
clicked on dashboard.

This is because what route NavLink takes into account is a complete absolute path say /hosts/reviews.
So the styles get applied to content of both "/hosts" elements and "/hosts/reviews" element.

To fix this, NavLink provides us with the "end" prop, which somewhat,
breaks the route for the Link where it's limited to.

So adding "end" prop to dashboard will tell NavLink, not to consider this route,
when talking about other nested routes ahead.
*/

import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const layoutStyles = {
    color: "red",
    textDecoration: "underline",
  };

  return (
    <>
      <nav className="flex gap-4">
        <NavLink
          end // end here when not assigned something acts as a boolean.
          style={({ isActive }) => (isActive ? layoutStyles : null)}
          className="hover:underline"
          to=".">
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? layoutStyles : null)}
          className="hover:underline"
          to="income">
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? layoutStyles : null)}
          className="hover:underline"
          to="vans">
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? layoutStyles : null)}
          className="hover:underline"
          to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
