import React from 'react'
import './Students.css'
import LeftBar from '../LeftBar/LeftBar'
import SearchIcon from '@mui/icons-material/Search';
import StudentCard from '../StudentCard/StudentCard'
import Card from '../Card/Card'

function Students() {
	return (
		<div className="students">
			<div className="left left_stud">
				<LeftBar /> 
			</div>
			<div className="right right_stud">
				<div className="right_header">
					<h1>CSII-Students</h1>
				</div>
				<div className="search_bar">
					<input type="text" placeholder="Search..." />
					<div className="search_icon">
						<SearchIcon style={{fontSize:'50px',color:'#ff8080'}}/>
					</div>	
				</div>
				<div className="student_cards">
					<StudentCard />
					<StudentCard />
					<StudentCard />
					<StudentCard />
					<StudentCard />
					<StudentCard />
					<StudentCard />
				</div>

			</div>
		</div>
	)
}

export default Students