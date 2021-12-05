import React, {useState,useEffect} from 'react'
import './Announcements.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeftBar from '../LeftBar/LeftBar'
import { auth, db} from '../firebase';
import { useStateValue } from "../StateProvider";
import firebase from 'firebase'
import Message from './Message'
import FlipMove from 'react-flip-move'

function Announcements() {
	const [input,setInput] = useState('')
	const [messages,setMessages] = useState([])
	const [{user},dispatch] = useStateValue();

	useEffect(()=>{
		db
			.collection('messages')
			.orderBy('timestamp','desc')
			.onSnapshot(snapshot => (
				setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
			))
	},[])
	const sendMessage = (event)=>{
		event.preventDefault()

		db
			.collection('messages')
			.add({
				message: input,
				username: user?.email,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
		// console.log(user.email,input)

		setMessages([...messages, {username:user.email,text:input}])
		setInput('')
	}
	console.log(messages)
	return (
		<div className="announcements">
			<div className="lefts">
				<LeftBar /> 
			</div>
			<div className="right">
				<div className="right_header">
					<h1>CSII-Announcements</h1>
				</div>
				<div className= "messages_div">
					<FlipMove>
						{messages.map(({id, message}) =>(
							<Message key= {id} username={user?.email} message={message} />
						))
						}
					</FlipMove>
				</div>	
				<div className="announcements_bottom">
					<form className="post_commentBox">
			           <input
			             className="post_input"
			             type="text"
			             placeholder="Add a comment..."
			             value = {input}
			             onChange = {e=>setInput(e.target.value)}
			           />
			           <button 
			             className="post_button"
			             type="submit"
			             onClick = {sendMessage}
			             disabled = {!input}
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