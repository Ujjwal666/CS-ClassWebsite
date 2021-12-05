import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";
import { useStateValue } from "../StateProvider";


function Card({group,title,description,demo,members,github}) {

	const [{current}, dispatch] = useStateValue()

	const addToCurrent=()=>{
		// console.log("email",email)
		dispatch({
			type: 'ADD_TO_CURRENT',
			item:{
					group: group,
					title: title,
					description: description,
					demo: demo,
					members: members,
					github: github,
			}
		})
	}

	return (
		<Link to="/project">
			<div className="card" onClick={addToCurrent}>
				<div className="group" style={{backgroundColor:'black',color:'white',height:'30px',width:'90px'}}>
					<p>Group {group} </p>
				</div>
				<h1>{title}</h1>
				<div className="description">
					<p>{description}</p>
				</div>
			
			</div>
		</Link>	
	)
}

export default Card