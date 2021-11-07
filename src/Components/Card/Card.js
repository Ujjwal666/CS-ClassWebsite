import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";


function Card() {
	var randomColor = require('randomcolor'); // import the script
	var color = randomColor(); // a hex code for an attractive color

	return (
		<Link to="/project">
			<div className="card">
				<div className="group" style={{backgroundColor:color,color:'white',height:'30px',width:'70px'}}>
					<p>Group 1 </p>
				</div>
				<h1> Project Title</h1>
				<div className="description">
					<p>Thr project is about how to learn a coding language using ML.</p>
				</div>
			
			</div>
		</Link>	
	)
}

export default Card