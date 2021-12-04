import React, {useState, forwardRef} from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({message,username}, ref)=>{
	const isUser = username === message?.username

	return (
		<div ref={ref} className={`message? ${isUser && 'message_user'}`}>
			<Card className={isUser ? "message_userCard" : "message_guestCard"}>
				<div className="card_content">
					<p>
						{message?.username}: {message?.message}
					</p>
				</div>
			</Card>
		</div>
	)
})

export default Message