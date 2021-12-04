import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  {Link} from "react-router-dom"
import { useStateValue } from "../StateProvider";
import {auth} from '../firebase'

export default function LeftBar() {
	const [{user},dispatch] = useStateValue();
	
	return (
		<div>
			<div className="left">
				<Link to="/">
					<h1>CSII-Python</h1>
				</Link>	
				<div className="nav">
					<Link to='/home_projects'>
						<p>Projects</p>
					</Link>
					<Link to='/announcement'>
						<p>Announcements</p>
					</Link>
					<Link to='/students'>
						<p>Students</p>
					</Link>	
				</div>
				<div className="left_bottoms">
					<Link to="/profile">
						<div className="left_bottom">
							<AccountCircleIcon />
							<p style={{fontSize:'14px'}}>{user ? user?.email : 'Guest'}</p>
						</div>
					</Link>	
				</div>
			</div>
		</div>
	)
}