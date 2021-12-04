import React, {useState,useEffect} from 'react'
import './Project.css'
import LeftBar from '../LeftBar/LeftBar'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useStateValue } from "../StateProvider";
import EditIcon from '@mui/icons-material/Edit';
import {Link, useHistory} from 'react-router-dom';
import { auth, db} from '../firebase';
// #current ma recent project hunca --> on click edit direct to form page --> on submit redirect to project page --> filter the current title with the database


function Project() {
	const [{current}, dispatch] = useStateValue()	
	var count = 0
	const [info,setInfo] = useState([])

	useEffect(() => {
		db
			.collection('contact-form')
			.onSnapshot(snapshot => (
				setInfo(snapshot.docs.map(doc => ({
					data: doc.data()
				})))
			))
	}, []);

	return (
		<div className="project">
			{current.map(item=>(
				<>
					<div className="left">
						<LeftBar />
					</div>
					<div className="right_project right">
						<h1>{item?.title}</h1>
						<div className="description_project pro">
							<h1>Description of the Project:</h1>
							<p>{item?.description}</p>
						</div>
						<div className="demo_project pro">
							<h1>Demo of the Project:</h1>
							<p>{item?.demo}</p>
						</div>
						<div className="member pro">
							<h1>Team Members</h1>
							<p>⦿ {item?.members}</p>
						</div>
						<div className="link pro">
							<h1>Github:</h1>
							<p>{item?.github}</p>
						</div>
						{info.map((information)=>
							item?.members.includes(information.data.firstName+" "+information.data.lastName)? (
								<>
								    <p style={{color:"transparent"}}>{count += 1}</p>
									{count == 1 ? (
										<Link to="/update_project">
											<div className="edit" >
												<EditIcon />
												<p>Edit/ Update the Project</p>
											</div>
										</Link>
									):(
										<></>
									)}
									
								</>
							):(
								<>
								</>
							)
						)}
					</div>
				</>
			))}
		</div>
	)
}

export default Project