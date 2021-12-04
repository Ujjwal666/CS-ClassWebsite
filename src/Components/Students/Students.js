import React, {useState,useEffect} from 'react'
import './Students.css'
import LeftBar from '../LeftBar/LeftBar'
import SearchIcon from '@mui/icons-material/Search';
import StudentCard from '../StudentCard/StudentCard'
import Card from '../Card/Card'
import { auth, db} from '../firebase';
import { useStateValue } from "../StateProvider";
import LogIn from '../LogIn/LogIn'

function Students() {
	const [{user},dispatch] = useStateValue();
	const [info,setInfo] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		db
			.collection('contact-form')
			.onSnapshot(snapshot => (
				setInfo(snapshot.docs.map(doc => ({
					data: doc.data()
				})))
			))
	}, []);
	console.log("i",info)

	return (
		<>
			{user ? (
				<div className="students">
					<div className="left left_stud">
						<LeftBar /> 
					</div>
					<div className="right right_stud">
						<div className="right_header">
							<h1>CSII-Students</h1>
						</div>
						<div className="search_bar">
							<input type="text" onChange = {e => setSearch(e.target.value)} placeholder="Search..." />
							<div className="search_icon">
								<SearchIcon style={{fontSize:'50px',color:'#ff8080'}}/>
							</div>	
						</div>
						<div className="student_cards" >
							{search ? 
								(
									info.map((information)=>
										(information.data.firstName+" "+information.data.lastName).toLowerCase().includes(search.toLowerCase()) ? (
											<StudentCard
												image={information.data.image}
												name={information.data.firstName+" "+information.data.lastName}
												para={information.data.skills}
												address = {information.data.address}
												email={information.data.email}
												github={information.data.github}
												graduation={information.data.graduation}
												linkedln = {information.data.linkedln}
												phone = {information.data.phone}
												university = {information.data.university}
												intro = {information.data.intro}
												title1 = {information.data.title1}
												experience1 = {information.data.experience1}
												date1 = {information.data.date1}
												title2 = {information.data.title2}
												experience2 = {information.data.experience2}
												date2 = {information.data.date2}
												major = {information.data.major}
												gpa = {information.data.gpa}
												project1 = {information.data.project1}
												proDes1 = {information.data.proDes1}
												proDate1 = {information.data.proDate1}
												project2 = {information.data.project2}
												proDes2 = {information.data.proDes2}
												proDate2 = {information.data.proDate2}
											/>
										):(
											<></>
										))	
										
								):(
								info.map((information)=>
									<StudentCard
										image={information.data.image}
										name={information.data.firstName+" "+information.data.lastName}
										para={information.data.skills}
										address = {information.data.address}
										email={information.data.email}
										github={information.data.github}
										graduation={information.data.graduation}
										linkedln = {information.data.linkedln}
										phone = {information.data.phone}
										university = {information.data.university}
										intro = {information.data.intro}
										title1 = {information.data.title1}
										experience1 = {information.data.experience1}
										date1 = {information.data.date1}
										title2 = {information.data.title2}
										experience2 = {information.data.experience2}
										date2 = {information.data.date2}
										major = {information.data.major}
										gpa = {information.data.gpa}
										project1 = {information.data.project1}
										proDes1 = {information.data.proDes1}
										proDate1 = {information.data.proDate1}
										project2 = {information.data.project2}
										proDes2 = {information.data.proDes2}
										proDate2 = {information.data.proDate2}
									/>
								))	
							}	
							
						</div>

					</div>
				</div>	
			):(
				<LogIn />
			)}
		</>
	)
}

export default Students