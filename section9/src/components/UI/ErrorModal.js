import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Layover = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Layover onConfirm={props.onConfirm}></Layover>,
        document.getElementById("layover")
      )}
      {ReactDOM.createPortal(
        <Modal
          header={props.header}
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        ></Modal>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
