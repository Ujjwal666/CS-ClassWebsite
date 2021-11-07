import React from 'react'
import './Project.css'
import LeftBar from '../LeftBar/LeftBar'

function Project() {

	return (
		<div className="project">
			<div className="left">
				<LeftBar />
			</div>
			<div className="right_project right">
				<h1> Project Name</h1>
				<div className="description_project pro">
					<h1>Description of the Project:</h1>
					<p>Theproject is..a.................................................................................................................................................................................................................................................................................................................................................................................................................................................................... </p>
				</div>
				<div className="demo_project pro">
					<h1>Demo of the Project:</h1>
					<p> Here is the demo of what it will look like.............................................................................................................................................................................................................................................................................................................................</p>
				</div>
				<div className="member">
					<h1>Team Members</h1>
					<p>1. AKA AAA <br/> 2.BKE BBB <br/> 3.CKA CCC<br/> 3.CKA CCC</p>
				</div>
				<div className="link">
					<h1>Github:</h1>
					<p>https://projrxct.com</p>
				</div>
			</div>
		
		</div>
	)
}

export default Project