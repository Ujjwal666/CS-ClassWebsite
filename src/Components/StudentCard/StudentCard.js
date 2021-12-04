import React from 'react'
import './StudentCard.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useStateValue } from "../StateProvider";
import {Link} from "react-router-dom";
import { auth, db} from '../firebase';

function StudentCard({image,name,para,address,email,github,graduation,linkedln,phone,university, intro, title1, experience1, date1, title2, experience2, date2, major, gpa, project1, proDes1, proDate1, project2, proDes2, proDate2}) {

	const [{current}, dispatch] = useStateValue()
	const addToCurrent=()=>{
		// console.log("email",email)
		dispatch({
			type: 'ADD_TO_CURRENT',
			item:{
					image: image,
					name: name,
					para: para,
					address: address,
					email: email,
					github: github,
					graduation: graduation,
					linkedln: linkedln,
					phone: phone,
					university: university,
					intro: intro,
					title1: title1,
					experience1: experience1,
					date1: date1,
					title2: title2,
					experience2: experience2,
					date2: date2,
					major: major,
					gpa: gpa,
					project1: project1,
					proDes1: proDes1,
					proDate1: proDate1,
					project2: project2,
					proDes2: proDes2,
					proDate2: proDate2,
			}
		})
		console.log("currr",current)
	}



	return (
		<Link to="/students_profile">
			<div className="student_card" onClick = {addToCurrent}>
				<div className="image">
					<img src={image} />
				</div>
				<div className="describe">
					<h1>{name}</h1>
					<p>{intro}</p>
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