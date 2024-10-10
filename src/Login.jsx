import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
    
    
        const response = await axios.get("https://670777aca0e04071d22a6be1.mockapi.io/login");
        const user = response.data.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            localStorage.setItem("user" , JSON.stringify(user));
            navigate("/home")
        } 
        // else {}
     };

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="username" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Signup