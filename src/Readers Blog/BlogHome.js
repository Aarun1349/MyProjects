import React from "react";
// import { FacebookLogin } from "react-facebook-login";
import GoogleLogin from "react-google-login";

function BlogHome() {
    const login=(response)=>{
        console.log(response)

    }
  return (
    <div className="home__page">
      <div className="login__message">
          <h1>📖</h1>
        <h2>Readers Favourite place!</h2>
        <p>
          We provide high quality online resource for reading blog. Just sign up
          with google or facebook and start reading some quality blogs.
        </p>
        <GoogleLogin
          clientId="333876444280-1ml20tbct0fc53710j1u8h4po41tkpun.apps.googleusercontent.com"
          render={(renderProps) => (
          <button onClick = { renderProps.onClick } 
          disabled={renderProps.disabled} 
          className="login__button">
        GOOGLE</button>)}
        onSuccess={login}
        onFailure={login}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
            
        />
    
        {/* <FacebookLogin 
        clientId="" 
        render={(renderProps)=>(
        <button onClick={renderProps.onClick}
        disabled={renderProps.disabled} className="login__button">
        Facebook</button>)}
        
        /> */}
      </div>
    </div>
  );
}

export default BlogHome;
