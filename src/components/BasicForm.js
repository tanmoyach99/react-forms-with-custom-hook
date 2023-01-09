import { useState } from "react";

const BasicForm = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errText, setErrText] = useState("");

  const { firstName, lastName, email } = user;

  let formIsValid = false;

  const nameChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const blurInputHandler = (e) => {
    const { name, value } = e.target;

    console.log(e.target.value);
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      console.log(firstName);
      setErrText(`${e.target.name} should not be empty`);
    }
  };

  if (
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    email.trim().includes("@")
  ) {
    formIsValid = true;
  }

  let classes = formIsValid ? "form-control" : "form-control invalid";

  return (
    <form>
      <div className="control-group">
        <div className={classes}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id=" firstName"
            name="firstName"
            onChange={nameChangeInputHandler}
            onBlur={blurInputHandler}
          />
        </div>
        <div className={classes}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            // value={lastName}
            onChange={nameChangeInputHandler}
            onBlur={blurInputHandler}
          />
        </div>
      </div>
      <div className={classes}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          // value={email}
          name="email"
          onChange={nameChangeInputHandler}
          onBlur={blurInputHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
      <p>{errText ? errText : ""}</p>
    </form>
  );
};

export default BasicForm;
