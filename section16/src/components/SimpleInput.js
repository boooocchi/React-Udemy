import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
    inputBlurHandler: nameBlurHandler
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
    inputBlurHandler: emailBlurHandler
  } = useInput((value) =>
    value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  );

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log({ name: enteredName, email: enteredEmail });
    // const enteredValue = nameInputRef.current.value;

    resetNameInput();
    resetEmailInput();
  };

  const formStyle = `form-control ${!nameInputHasError ? "" : "invalid"}`;

  const formStyle2 = `form-control ${!emailInputHasError ? "" : "invalid"}`;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formStyle}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasError && (
        <div className="error-text">Name must not be empty</div>
      )}
      <div className={formStyle2}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
      {emailInputHasError && <div className="error-text">Invalid Email</div>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
