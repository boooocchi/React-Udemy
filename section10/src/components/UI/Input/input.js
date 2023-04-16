import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const input = React.forwardRef(
  ({ type, id, value, onChange, onBlur, state, label }, ref) => {
    const inputRef = useRef();
    const activate = () => {
      inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
      return {
        focus: activate
      };
    });
    return (
      <div
        className={`${classes.control} ${
          state.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={type}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
      </div>
    );
  }
);

export default input;
