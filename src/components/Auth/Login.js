import React from 'react';
import './auth.scss';

const  Login = (
    {
        handleSubmit,
        handlePasswordChange,
        handleUsernameChange,
        username,
        password,
        errors,

    }
) =>  {
    return (
      
        <div className="card card-container">
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={ handleSubmit }>
                <span id="reauth-email" className="reauth-email"></span>
                <input 
                    type="text" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Enter Username"
                    name="username"
                    onChange={ handleUsernameChange }
                    value={ username }
                    required autoFocus 
                />
                <br/>
                <input 
                    type="password" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Enter Password"
                    value={ password }
                    onChange={ handlePasswordChange }
                    name="password"
                    required 
                 />                
                <button 
                    className="btn btn-lg btn-primary btn-block btn-signin login-btn" 
                    type="submit">
                    Sign in
                </button>
            </form>
            <a href="#" className="forgot-password">
                Forgot the password?
            </a>
        </div>
  
    )
}

export default Login;

