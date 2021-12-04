import React, {useState,useEffect} from 'react'
import './Home.css'
import Card from '../Card/Card'
import LeftBar from '../LeftBar/LeftBar'
import {Link, useHistory} from 'react-router-dom';
import { auth, db} from '../firebase';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useStateValue } from "../StateProvider";
import LogIn from '../LogIn/LogIn'

function Home() {

    const [{user},dispatch] = useStateValue();
	const [search, setSearch] = useState('')
	const [projectInfo, setProjectInfo] = useState([])

	useEffect(() => {
		db
			.collection('project-form')
			.onSnapshot(snapshot => (
				setProjectInfo(snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
			))
	}, []);

	return (
		<>
			{user ? (
				<div className="home">
					<div className="left">
						<LeftBar />
					</div>
					<div className="right">
						<div className="right_header">
							<h1>CSII-Projects</h1>
						</div>
						<div className="search_bar">
							<input type="text" onChange = {e => setSearch(e.target.value)} placeholder="Search..." />
							<div className="search_icon">
								<SearchIcon style={{fontSize:'50px',color:'#8ed460'}}/>
							</div>	
						</div>
						<div className="cards">
							{search ? 
								(
									projectInfo.map((project)=>
										project.data.projectName.toLowerCase().includes(search.toLowerCase()) ? (
											<Card 
												group = {project.data.groupNumber}
												title = {project.data.projectName}
												description = {project.data.projectDescription}
												demo = {project.data.projectDemo}
												members = {project.data.teamMembers}
												github = {project.data.github}
											/>
										):(
											<></>
										))	
										
								):(
								projectInfo.map((project)=>
									<Card 
										group = {project.data.groupNumber}
										title = {project.data.projectName}
										description = {project.data.projectDescription}
										demo = {project.data.projectDemo}
										members = {project.data.teamMembers}
										github = {project.data.github}
									/>
								))	
							}	
							
						</div>
						<div className="right_bottoms">
							<Link to="/create_project">
								<AddCircleIcon style={{fontSize:'50px',color:'80b3ff'}} />
							</Link>
						</div>
					</div>
				</div>
			):(
				<LogIn />
			)}
		</>
	)
}

export default Home