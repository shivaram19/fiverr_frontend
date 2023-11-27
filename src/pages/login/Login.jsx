import React,{ useState } from 'react'
import './Login.scss'
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    console.log("2")
    e.preventDefault();
    console.log("3")
    try {
      console.log("4")
      const res = await axios.post('http://localhost:8800/backend/auth/login',{
        userName,
        password
      })
      console.log("5")
      console.log(res.data)
    } catch (err) {
      setError(err)
      console.log(err)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
