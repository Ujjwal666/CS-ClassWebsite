import React from 'react'
import './StudentsProfile.css'
import {Link} from "react-router-dom";


function StudentsProfile() {

	return (
		<div className="students_profile">
			<div className="head">
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" />
				<div className="top">
					<h1>Ujjwal Adhikari</h1>
					<p>Software Developer</p>
				</div>	
			</div>
			<div className="bunch">
				<div className = "edu_info">
					<div className="education">
						<h1> Education </h1>
						<p> Bachelor's in Computer Science </p>
						<p> GPA : 3.67 </p>
						<p> Expected Graduation: May, 2024</p>	
					</div>
					<div className = "experience">
						<div className="experience_list">
							<h1>Experience Title</h1>
							<p>Experience Description goes continuing.......</p>
							<p>Date: 09-2020 to 10-2021 </p>
						</div>	
						<div className="experience_list">
							<h1>Experience Title</h1>
							<p>Experience Description goes continuing.......</p>
							<p>Date: 09-2020 to 10-2021 </p>
						</div>	
					</div>
					<div className="skills">
						<h1>Skills</h1>
						<div className="skills_list"> 
							<button>ReactJS</button>
							<button>Python</button>
							<button> HTML/CSS </button>
						</div>	
					</div>	
					
				</div>	
				<div className="bunc">
					<div className="info">
						<h1>Personal Info </h1>
						<p>Address: Sherman Ave NW, Washington, DC </p>
						<p>Phone: (+1)111-111-1111</p>
						<p>Email: aaa@bison.howard.edu</p>
						<p>GitHub : https://github/uaa/ </p>
						<p>Linkedin: https://linkedin/uaaa/</p>
					</div>
					<div className = "projects">
						<div className="projects_list">
							<h1>Project Title</h1>
							<p>Project Description goes continuing.......</p>
							<p>Date: 09-2020 to 10-2021 </p>
						</div>
						<div className="projects_list">
							<h1>Project Title</h1>
							<p>Project Description goes continuing.......</p>
							<p>Date: 09-2020 to 10-2021 </p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default StudentsProfile