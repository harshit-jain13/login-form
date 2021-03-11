import React from "react";

export function LoginForm(props) {
  return (
    <div className="login-form">
      <span>SIGN UP</span>
      <p className="heading">Create your account</p>
      <p>Lorem ipsum dolor sit amet, consectur adspicing edi.</p>
      <div className="sign-in-options">
        <button>Sign up with Google</button>
        <button>Sign up with Facebook</button>
      </div>
      <p>or</p>
      <form className="input-form">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="email" placeholder="Email Address"></input>
        <input type="password" placeholder="Password"></input>
        <p className="disclaimer">
          By clicking Sign Up, you agree to our Terms of use and our privacy
          policy.
        </p>
        <button>SIGN UP</button>
      </form>
    </div>
  );
}
