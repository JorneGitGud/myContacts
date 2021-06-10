import react, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //variables
  const [registerUsername, setRegisterUsername] = useState("Jorne");
  const [registerPassword, setRegisterPassword] = useState("password");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  //methods
  const register = () => {
    axios({
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://Localhost:4000/register",
    }).then((res) => console.log(res));
  };

  const login = () => {
    axios({
      method: "post",
      data: {
        password: loginPassword,
        username: loginUsername,
      },
      withCredentials: true,
      url: "http://Localhost:4000/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://Localhost:4000/user",
    }).then((res) => setData(res.data));
  };

  //template
  return (
    <div className="App">
      <div>
        <h1>register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        ></input>
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get user</h1>
        <button onClick={getUser}>Submit</button>
        {
          data ? <h1>welcome back {data.username}</h1> : null
          //<h2>login please</h2>
        }
      </div>
    </div>
  );
}

export default App;
