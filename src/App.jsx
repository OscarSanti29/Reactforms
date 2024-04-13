import { useState } from "react";
import Signupform from "./components/signupform";
import Authenticate from "./components/authenticate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Signupform token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
