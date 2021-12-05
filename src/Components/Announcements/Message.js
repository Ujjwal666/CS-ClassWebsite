import React, {useState, forwardRef} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './Message.css'
import { Avatar } from "@material-ui/core";

const Message = forwardRef(({message,username}, ref)=>{
	const isUser = username === message?.username

	return (
		<div ref={ref} className={`message? ${isUser && 'message_user'}`}>
			<div className="manager">
				{!isUser && 
					<Avatar className="avatar" style={{backgroundColor:'black'}} alt="src" className="avatar" >{message?.username[0].toUpperCase()} </Avatar>
				}	
				<Card className={isUser ? "message_userCard" : "message_guestCard"}>
					<div className="card_content">
						<p>
							{message?.username}: {message?.message}
						</p>
					</div>
				</Card>
			</div>	
		</div>
	)
})

export default Message