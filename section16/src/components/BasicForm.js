import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    reset: firstnameReset,
    inputBlurHandler: nameInputBlurHandler,
    value: enteredFirstName,
    inputValueHandler: nameInputHandler,
    hasError: firstNameError,
    valueValidation: nameValidation
  } = useInput2((value) => {
    return value.trim() !== "";
  });
  const formSubmission = (event) => {
    event.preventDefault();
    if (!nameValidation) {
      return;
    }
    console.log(enteredFirstName);

    firstnameReset();
  };

  let formValidation = false;
  if (nameValidation) {
    formValidation = true;
  }

  const formClass = `form-control ${firstNameError ? `invalid` : ""}`;
  return (
    <form onSubmit={formSubmission}>
      <div className="control-group">
        <div className={formClass}>
          <label htmlFor="firstname">First Name</label>
          <input
            onBlur={nameInputBlurHandler}
            onChange={nameInputHandler}
            type="text"
            id="firstname"
            value={enteredFirstName}
          />
          {firstNameError && (
            <p className="error-text">first name is required</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" />
      </div>
      <div className="form-actions">
        <button disabled={!formValidation}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
