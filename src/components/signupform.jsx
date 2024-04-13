import { useState } from "react";
import validateForm from "./inputs";

export default function Signupform({ setToken }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      seterror(error.message);
    }

    seterror([]);
    const formErrors = validateForm(username, password);
    if (formErrors.length > 0) {
      seterror(formErrors);
      return;
    }
  }
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handlesubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
}
