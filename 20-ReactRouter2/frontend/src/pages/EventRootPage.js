import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const EventRootPage = () => {
  return (
    <>
      <header>
        <ul style={{ display: "flex" }}>
          <li style={{ marginRight: "10px" }}>
            <NavLink to="/events">All Events</NavLink>
          </li>
          <li>
            <NavLink to="new">New Events</NavLink>
          </li>
        </ul>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default EventRootPage;
