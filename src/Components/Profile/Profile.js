import React,{useEffect,useState} from 'react'
import './Profile.css'
import {Link} from "react-router-dom";
import { auth, db} from '../firebase';
import { useStateValue } from "../StateProvider";


function StudentsProfile() {
  	
  	const [{user},dispatch] = useStateValue();

	const [info,setInfo] = useState([])
	const [matched,setMatched] = useState([])

	useEffect(() => {
		db
			.collection('contact-form')
			.onSnapshot(snapshot => (
				setInfo(snapshot.docs.map(doc => ({
					data: doc.data()
				})))
			))

	}, []);

	// console.log("info",info[1]?.data.email,user)
	// console.log("matched",matched[0]?.data.email)
	// console.log("matched",matched)

	return (
		<div className="students_profile">
			{info.map((information)=>
				information.data.email == (user.email) ? (
					<>
						<div className="head">
							{console.log("information",information.data.email)}
							<img src={information?.data.image} />
							<div className="top">
								<h1>{information?.data.firstName} {information?.data.lastName}</h1>
								<p>{information?.data.intro}</p>
							</div>	
						</div>
						<div className="bunch">
							<div className = "edu_info">
								<div className="education">
									<h1> Education </h1>
									<p>Major: {information?.data.major}</p>
									<p> GPA : {information?.data.gpa} </p>
									<p> Expected Graduation: {information?.data.graduation}</p>	
								</div>
								<div className = "experience">
									<h1>Experiences</h1>
									<div className="experience_list pro">
										<h1>➊ {information?.data.title1}</h1>
										<p>{information?.data.experience1}</p>
										<p>Date: {information?.data.date1}</p>
									</div>	
									<div className="experience_list pro">
										<h1>➋ {information?.data.title2}</h1>
										<p>{information?.data.experience2}</p>
										<p>Date: {information?.data.date2}</p>
									</div>	
								</div>
								<div className="skills">
									<h1>Skills</h1>
									<div className="skills_list"> 
										<button>{information?.data.skills}</button>
									</div>	
								</div>	
								
							</div>	
							<div className="bunc">
								<div className="info">
									<h1>Personal Info </h1>
									<p>Address: {information?.data.address} </p>
									<p>Phone: {information?.data.phone}</p>
									<p>Email: {information?.data.email}</p>
									<p>GitHub : {information?.data.github}</p>
									<p>Linkedin: {information?.data.linkedln}</p>
								</div>
								<div className = "projects">
									<h1>Projects</h1>
									<div className="projects_list pro">
										<h1>➊ {information?.data.project1}</h1>
										<p>{information?.data.proDes1}</p>
										<p>Date: {information?.data.proDate1}</p>
									</div>
									<div className="projects_list pro">
										<h1>➋ {information?.data.project2}</h1>
										<p>{information?.data.proDes2}</p>
										<p>Date: {information?.data.proDate2}</p>
									</div>
								</div>
							</div>
						</div>
					</>	
				):(
					<>
						
					</>
				)
				
			)}
			
			

		</div>
	)
}

export default StudentsProfile