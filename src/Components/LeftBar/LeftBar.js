import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  {Link} from "react-router-dom"

export default function LeftBar() {
	return (
		<div>
			<div className="left">
				<h1>CSII-Python</h1>
				<div className="nav">
					<Link to='/'>
						<p>Home</p>
					</Link>
					<Link to='/announcement'>
						<p>Announcements</p>
					</Link>
					<Link to='/students'>
						<p>Students</p>
					</Link>	
				</div>
				<div className="left_bottoms">
					<div className="left_bottom">
						<AccountCircleIcon />
						<p>Username</p>
					</div>
					<div className="log">
						<Link to="/login">
							<p>Log In </p>
						</Link>		
					</div>	
				</div>
			</div>
		</div>
	)
}