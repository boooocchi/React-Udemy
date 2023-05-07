import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
const Error = () => {
  const error = useRouteError();
  let title = "Error occured!!";
  let message = "something went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not Found!!";
    message = "Could not find the page";
  }

  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
