import React,{useState} from 'react';
import './LogIn.css';
import {Link, useHistory} from 'react-router-dom';

function LogIn() {
	return (
		<div className="login">
		   <Link to="/">
          <p className="login_logo">
            CSII - Python
          </p>
 		   </Link>
 		   <div className="login_container">
 		     <h1>SignIn</h1>
 		     <form>
               <h5>Email</h5>
               <input type="email" placeholder="Enter your Email address"/>
               <h5>Password</h5>
               <input type="password" placeholder="Enter your Password" />
               <button className="login_signInButton">Sign In</button>
             </form>
       <Link to="/signup">      
 		     <button type="submit" className="login_registerButton">Create your Account</button>
 		   </Link>
       </div>
		</div>
	)
}

export default LogIn;