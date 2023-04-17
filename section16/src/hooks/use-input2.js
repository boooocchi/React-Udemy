import { useState } from "react";
const useInput2 = (method) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueValidation = method(enteredValue);
  const hasError = !valueValidation && isTouched;

  const inputValueHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };
  const inputBlurHandler = () => {
    console.log("hi");
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    reset,
    inputBlurHandler,
    value: enteredValue,
    inputValueHandler,
    hasError,
    valueValidation
  };
};

export default useInput2;
