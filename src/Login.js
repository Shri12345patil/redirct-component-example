import { useHistory } from "react-router-dom";
function Login() {
    const history = useHistory();
    
    const handleRoute = () =>{ 
      history.push("/");
    }
    return (
      <div>
        <h2>Login page</h2>
        <button onClick={handleRoute}>Login</button>
      </div>
    );
  }
  export default Login;