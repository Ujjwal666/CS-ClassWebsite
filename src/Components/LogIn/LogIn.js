import React,{useState} from 'react';
import './LogIn.css';
import {Link, useHistory} from 'react-router-dom';
import { auth } from '../firebase';

function LogIn() {
  const history = useHistory()
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signIn = e =>{
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error => alert(error.message))
  }

	return (
		<div className="login">
 		   <div className="login_container">
 		     <h1>SignIn</h1>
 		     <form>
               <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email address"/>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your Password" />
               <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
             </form>
       <Link to="/signup">      
 		     <button className="login_registerButton">Create your Account</button>
 		   </Link>
       </div>
		</div>
	)
}

export default LogIn;