import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitToken = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 7 });
    navigate("/", { replace: true });
  };
  const jwtToken=Cookies.get("jwt_token")
  if(jwtToken!==undefined){
    return <Navigate to="/"/>
  }

  const onChangename = (event) => {
    setUsername(event.target.value);
  };

  const onChangepassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const inputValues = { username, password };

    const options = {
      method: "POST",
     
      body: JSON.stringify(inputValues),
    };

    try {
      const response = await fetch("https://apis.ccbp.in/login", options);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        submitToken(data.jwt_token);
      } else {
        console.log(data.error_msg);
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" onChange={onChangename} value={username} placeholder="name" />
        <input type="password" onChange={onChangepassword} value={password} placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
