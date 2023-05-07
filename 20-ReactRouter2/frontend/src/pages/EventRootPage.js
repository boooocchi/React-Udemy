import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventRootPage = () => {
  return (
    <>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </>
  );
};

export default EventRootPage;
