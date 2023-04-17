import { useState } from "react";
const useInput = (validationMethod) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueValidation = validationMethod(enteredValue);
  const hasError = !valueValidation && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueValidation,
    reset
  };
};

export default useInput;
