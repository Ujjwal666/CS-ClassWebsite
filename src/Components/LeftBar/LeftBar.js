import React from 'react'
import { Avatar } from "@material-ui/core";
import  {Link} from "react-router-dom"
import { useStateValue } from "../StateProvider";
import {auth} from '../firebase'
import './LeftBar.css'

export default function LeftBar() {
	const [{user},dispatch] = useStateValue();
	var randomColor = require('randomcolor'); // import the script
	var color = randomColor(); // a hex code for an attractive color
	return (
		<div className="lee">
			<div className="left">
				<div className="loader">
					<Link to="/">
						<h1>CSII-Python</h1>
					</Link>	
				</div>	
				<div className="nav">
					<Link to='/home_projects'>
						<h3>Projects</h3>
					</Link>
					<Link to='/announcement'>
						<h3>Announcements</h3>
					</Link>
					<Link to='/students'>
						<h3>Students</h3>
					</Link>	
				</div>
				<div className="left_bottoms">
					<Link to="/profile">
						<div className="left_bottom">
							<Avatar style={{backgroundColor:color,height:'25px',width:'25px'}} alt="src" className="avatar" >{user?.email[0].toUpperCase()} </Avatar>
							<p style={{fontSize:'14px'}}>{user ? user?.email : 'Guest'}</p>
						</div>
					</Link>	
				</div>
			</div>
		</div>
	)
}