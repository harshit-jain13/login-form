import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
export function LoginForm({ handleUser, log }) {
  // Method for handling response from Facebook API
  const responseFacebook = (response) => {
    handleUser(
      response.id,
      response.name,
      response.email,
      response.picture.data.url
    );
    log();
  };

  //Method for handling response from Google API
  const responseGoogle = (response) => {
    response = response.profileObj;
    handleUser(
      response.googleId,
      response.name,
      response.email,
      response.imageUrl
    );
    log();
  };

  const customStyle = {
    backgroundColor: "rgb(219,68,55)",
    borderRadius: "3px",
    padding: "8px 50px 8px 50px",
    border: "none",
    color: "white",
    fontsize: "13px",
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  };

  return (
    <div className="login-form">
      <span>SIGN UP</span>
      <p className="heading">Create your account</p>
      <p>Lorem ipsum dolor sit amet, consectur adspicing edi.</p>
      <div className="sign-in-options">
        <FacebookLogin
          appId="3770414049712227"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="facebook-btn"
          textButton="Sign up with Facebook"
        />
        <GoogleLogin
          clientId="657984433464-14bheca9goraha1brobn9rq77qdmovce.apps.googleusercontent.com"
          render={(renderProps) => (
            <button onClick={renderProps.onClick} style={customStyle}>
              Sign up with Google
            </button>
          )}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="google-btn"
        />
      </div>
      <p>or</p>
      <form className="input-form">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="email" placeholder="Email Address"></input>
        <input type="password" placeholder="Password"></input>
        <p className="disclaimer">
          By clicking Sign Up, you agree to our{" "}
          <a href="www.google.com"> Terms of Use</a> and our{" "}
          <a href="www.google.com">privacy policy</a>.
        </p>
        <button>SIGN UP</button>
      </form>
    </div>
  );
}
