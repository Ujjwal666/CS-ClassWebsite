import React from 'react'
import './StudentCard.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {Link} from "react-router-dom";

function StudentCard() {
	return (
		<Link to="/students_profile">
			<div className="student_card">
				<div className="image">
					<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" />
				</div>
				<div className="describe">
					<h1>Mark Zuckerberg</h1>
					<p>I am a sophmore student reading at Howard University</p>
				</div>
				<div className="icons">
					<GitHubIcon />
					<FacebookIcon />
					<LinkedInIcon />
				</div>
			</div>
		</Link>	
	)
}

export default StudentCard