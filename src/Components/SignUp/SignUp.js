import React from 'react'
import './SignUp.css'
import {Link, useHistory} from 'react-router-dom';

function SignUp() {
	return (
		<div className="signup">
			<h1>Create Account</h1>
			<div className="div_sign">
				<p>First Name</p>
				<input type="text" placeholder="Enter your First Name" />
			</div>
			<div className="div_sign">
				<p>Last Name</p>
				<input type="text" placeholder="Enter your Last Name" />
			</div>
			<div className="div_sign">
				<p>Email address</p>
				<input type="email" placeholder="Enter your Email address" />
			</div>
			<div className="div_sign" >
				<p>Address</p>
				<input type="text" placeholder="Enter your Full Address" />
			</div>
			<div className="div_sign">
				<p>Phone No.</p>
				<input type="text" placeholder="Enter your Phone Number" />
			</div>
			<div className="div_sign">
				<p>University Attending</p>
				<input type="text" placeholder="Name of the University" />
			</div>
			<div className="div_sign">
				<p>Expected Graduation</p>
				<input type="text" placeholder="Month-Year" />
			</div>
			<div className="div_sign">
				<p>Skills</p>
				<input type="text" placeholder="Enter your Skills" />
			</div>
			<div className="div_sign">
				<p>Linkedln URL</p>
				<input type="text" placeholder="Enter your Linkedln URL" />
			</div>
			<div className="div_sign">
				<p>GitHub URL</p>
				<input type="text" placeholder="Enter your GitHub URL" />
			</div>
			<div className="choose">
				<p>Upload your CV</p>
				<form>
				  <input type="file" id="myFile" name="filename" />
				</form>
			</div>
			<div className="submit">
				<Link to="/">      
	 		     <button type="submit">Submit</button>
	 		   </Link>
			</div>
		</div>	
	)
}

export default SignUp