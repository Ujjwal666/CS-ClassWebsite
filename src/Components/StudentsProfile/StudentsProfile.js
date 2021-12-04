import React,{useEffect,useState} from 'react'
import './StudentsProfile.css'
import {Link} from "react-router-dom";
import { auth, db} from '../firebase';
import { useStateValue } from "../StateProvider";

function StudentsProfile() {
	const [{current}, dispatch] = useStateValue()	
	const [info,setInfo] = useState('')

	useEffect(() => {
		db
			.collection('contact-form')
			.onSnapshot(snapshot => (
				setInfo(snapshot.docs.map(doc => ({
					data: doc.data()
				})))
			))
	}, [])
	console.log("currrrr",current)

	return (
		<div className="students_profile">
			{current.map(item=>(
				<>
					<div className="head">
						<img src={item?.image} />
						<div className="top">
							<h1>{item?.name}</h1>
							<p>{item?.intro}</p>
						</div>	
					</div>
					<div className="bunch">
						<div className = "edu_info">
							<div className="education">
								<h1> Education </h1>
								<p>University: {item?.university}</p>
								<p>Major: {item?.major}</p>
								<p>GPA: {item?.gpa} </p>
								<p> Expected Graduation: {item?.graduation}</p>	
							</div>
							<div className = "experience">
								<h1>Experiences</h1>
								<div className="experience_list pro">
									<h1>➊ {item?.title1}</h1>
									<p>{item?.experience1}</p>
									<p>Date: {item?.data1}</p>
								</div>	
								<div className="experience_list pro">
									<h1>➋ {item?.title2}</h1>
									<p>{item?.experience2}</p>
									<p>Date: {item?.data1} </p>
								</div>	
							</div>
							<div className="skills">
								<h1>Skills</h1>
								<div className="skills_list"> 
									<button>{item?.para}</button>
								</div>	
							</div>	
							
						</div>	
						<div className="bunc">
							<div className="info">
								<h1>Personal Info </h1>
								<p>Address: {item?.address}</p>
								<p>Phone: {item?.phone}</p>
								<p>Email: {item?.email}</p>
								<p>GitHub : {item?.github}</p>
								<p>Linkedin: {item?.linkedln}</p>
							</div>
							<div className = "projects">
								<h1>Projects</h1>
								<div className="projects_list pro">
									<h1>➊ {item?.project1}</h1>
									<p>{item?.proDes1}</p>
									<p>Date: {item?.proDate1}</p>
								</div>
								<div className="projects_list pro">
									<h1>➋ {item?.project2}</h1>
									<p>{item?.proDes2}</p>
									<p>Date: {item?.proDate2}</p>
								</div>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	)
}

export default StudentsProfile