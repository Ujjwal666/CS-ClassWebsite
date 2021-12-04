import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import { auth, db} from '../firebase';

import { useStateValue } from "../StateProvider";

function UpdateProject() {
	const history = useHistory()
	const [groupNumber,setGroupNumber] = useState('')
	const [projectName,setProjectName] = useState('')
	const [projectDescription,setProjectDescription] = useState('')
	const [projectDemo,setProjectDemo] = useState('')
	const [teamMembers,setTeamMembers] = useState('')
	const [github,setGithub] = useState('')



	const [{current}, dispatch] = useStateValue()

	console.log(current[0].title)

	const register = e =>{
	    e.preventDefault();

	    db.collection("project-form")
	    	.doc(current[0].title)
	    	.update({
	    		groupNumber: groupNumber,
	    		projectName: projectName,
	    		projectDescription: projectDescription,
	    		projectDemo: projectDemo,
	    		teamMembers: teamMembers,
	    		github: github,
	    	})
	    	.then(()=>{
	    		setProjectName('')
	    		setProjectDescription('')
	    		setProjectDemo('')
	    		setTeamMembers('')
	    		setGithub('')
	    	})
	    history.push('/home_projects')
	}


	return (
		<div className="signup">
			<h1>Edit/Update Project</h1>
			<div className="div_sign create">
				<p>Project Name</p>
				<input type="text" value={projectName} onChange={e=>setProjectName(e.target.value)} placeholder="Enter your Project Name" />
			</div>
			<div className="div_sign create">
				<p>Group Number</p>
				<input type="text" value={groupNumber} onChange={e=>setGroupNumber(e.target.value)} placeholder="Enter your Project Name" />
			</div>
			<div className="div_sign create">
				<p>Project Description</p>
				<input type="text" value={projectDescription} onChange={e=>setProjectDescription(e.target.value)} placeholder="Enter your Project Description" />
			</div>
			<div className="div_sign create">
				<p>Project Demo</p>
				<input type="text" value={projectDemo} onChange={e=>setProjectDemo(e.target.value)} placeholder="Enter your Project Demo" />
			</div>
			<div className="div_sign create">
				<p>Team Members</p>
				<input type="text" value={teamMembers} onChange={e=>setTeamMembers(e.target.value)} placeholder="Enter your First Name" />
			</div>
			<div className="div_sign create" >
				<p>Github</p>
				<input type="text" value={github} onChange={e=>setGithub(e.target.value)} placeholder="Enter your Github" />
			</div>
			<div className="submit">     
	 		     <button type="submit" onClick={register}>Submit</button>
			</div>
		</div>	
	)
}

export default UpdateProject