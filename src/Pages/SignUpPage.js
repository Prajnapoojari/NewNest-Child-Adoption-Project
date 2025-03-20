import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    navigate("/LoginPage");
  };

  return (
    <div className="login-container">
      <style>
        {`
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('../Images/Cause4.jpg') no-repeat center center/cover;
            position: relative;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
          }
          .login-form-container {
            position: relative;
            background: rgba(255, 140, 0, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 350px;
            text-align: center;
            color: white;
          }
          .form-title {
            font-size: 24px;
            margin-bottom: 10px;
            color: white;
          }
          .form-subtitle {
            font-size: 14px;
            color: #fdd;
            margin-bottom: 20px;
          }
          .form-group {
            margin-bottom: 15px;
            text-align: left;
          }
          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }
          .form-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ff8c00;
            border-radius: 5px;
          }
          .login-button {
            width: 100%;
            padding: 10px;
            background: #ff8c00;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
          }
          .login-button:hover {
            background: #e07b00;
          }
          .signup-link {
            margin-top: 10px;
          }
          .signup-link a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }
          .signup-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="overlay"></div>
      <div className="login-form-container">
        <h2 className="form-title">Create An Account</h2>
        <p className="form-subtitle">
          Join us today and start managing your projects efficiently!
        </p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" className="form-input" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Example@email.com" className="form-input" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="At least 8 characters" className="form-input" required />
          </div>
          <button type="submit" className="login-button">Sign Up</button>
          <p className="signup-link">
            Already have an account? <a href="/LoginPage">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
