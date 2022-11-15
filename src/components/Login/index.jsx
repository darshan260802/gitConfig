import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <div className="login-form-center">
            <h1>DHP VPN</h1>
            <span>Sign In To DHP</span>
            <div className="login-form-div">
              <label htmlFor="">
                <h4>Username</h4>
                <input type="text" required name="" id="" />
              </label>
              <label htmlFor="">
                <h4>Password</h4>
                <input type="password" required name="" id="" />
              </label>
              <h4>Forgot Password?</h4>
              <button>Log In</button>
              <h4>Don't have an account? <a href="#">Sign Up</a></h4>
            </div>
          </div>
        </div>
        <div className="login-card">
          <span></span>

          <div>
            <h1>DHPVPN Solution</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              accusamus nesciunt doloremque architecto consequuntur nam!
            </p>
          </div>

          <span>Copyright &copy; Hello World</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
