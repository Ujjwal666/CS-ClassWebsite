import React from 'react'
import './Announcements.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeftBar from '../LeftBar/LeftBar'

function Announcements() {
	return (
		<div className="announcements left">
			<div className="left">
				<LeftBar /> 
			</div>
			<div className="right">
				<div className="right_header">
					<h1>CSII-Announcements</h1>
				</div>
				<div className="posts">
					<p>AAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
				</div>
				<div className="announcements_bottom">
					<form className="post_commentBox">
			           <input
			             className="post_input"
			             type="text"
			             placeholder="Add a comment..."
			             
			           />
			           <button 
			             className="post_button"
			             type="submit"
			           >
			            Post
			           </button>
				 	</form>
				</div>
			</div>
		</div>	
	)
}

export default Announcements