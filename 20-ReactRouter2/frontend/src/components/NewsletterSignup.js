import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import React, { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.meddage) {
      window.alert("sign up successful!!");
    }
  }, [data, state]);
  return (
    <fetcher.Form
      action="./newsletter"
      method="post"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
