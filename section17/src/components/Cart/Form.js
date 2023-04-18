import React from "react";
import Modal from "../UI/Modal";
import styles from "./Form.module.css";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Form = (props) => {
  const nameInput = useRef();
  const emailInput = useRef();
  const addressInput = useRef();
  const cartCtx = useContext(CartContext);

  const confirmHandler = (event) => {
    event.preventDefault();
    const data = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      address: addressInput.current.value
    };

    fetch("https://udemy-24192-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: data,
        orderedItems: cartCtx.items
      })
    });
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={confirmHandler}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={nameInput} />
        <label htmlFor="email">email</label>
        <input type="email" id="email" ref={emailInput} />
        <label htmlFor="address">address</label>
        <input type="address" id="address" ref={addressInput} />
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Confirm</button>
      </form>
    </Modal>
  );
};

export default Form;
