import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  // states for signup

  const [username, setUsername] = useState("");
  // const username = ""
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("username", username)
  console.log("email", email)
  console.log("password", password)

  // function for signup

  const signup = async(e) => {
    
    // prevent form's default behavior
    e.preventDefault()

    try{
      const response = await axios.post("http://localhost:5001/api/auth/signup",
      // req.body  
      {
         username, email, password
      })

      console.log(response.data)
    }catch(err){
        console.log("err", err)
    }
  }

  return (
    <div>
      <form onSubmit={signup}>
        <h1>Sign up form</h1>

        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />

        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;

// rafce -> react arrow functional component
// rfce -> react functional component
