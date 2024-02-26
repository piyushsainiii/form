import "./LoginForm.css";
import { useState } from "react";

function LoginForm(): any {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state,setState] = useState(false);

  function onSubmit() {
    alert(`welcome ${email}!`);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <h4>Hi,Welcome Back !</h4>
        {state &&
        <div style={{display:"flex",justifyContent:"spaceBetween",flexDirection:"row",alignItems:"center"}}>
        <div style={{"width":"112px","height":"47px","borderBottom":"1px solid black"}}></div>
        <div>Hi There</div>
        <div style={{"width":"112px","height":"47px","borderBottom":"1px solid black"}}></div>

        </div>}
        <div>
          
          
        <button type="submit" className="login" style={{display:"flex",alignItems:"center",gap:"5px",justifyContent:"center"}}>
        <div style={{marginTop:"3px"}}>
          <img src="src/assets/images/googlelogo.png" />
          </div>
          <div>
          Login with Google
          </div>
        </button>
        </div>
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            //value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      
        <a href="#">Forgot Password?</a>
        

        <button type="submit" onClick={() => setState(!state)}>LOGIN</button>
        <p>
          Not registered yet? <a href="#">Create an account</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
