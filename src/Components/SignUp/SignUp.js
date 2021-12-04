import React,{useState} from 'react'
import './SignUp.css'
import {Link, useHistory} from 'react-router-dom';
import { auth, db} from '../firebase';


function SignUp() {
	const history = useHistory()
	const [first_name,setFirstName] = useState('')
	const [last_name,setLastName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [address,setAddress] = useState('')
	const [phone,setPhone] = useState('')
	const [university,setUniversity] = useState('')
	const [graduation,setGraduation] = useState('')
	const [skills,setSkills] = useState('')
	const [linkedln,setLinkedin] = useState('')
	const [github,setGithub] = useState('')
	const [image,setImage] = useState('')
	const [title1,setTitle1 ] = useState('')
	const [experience1,setExperience1 ] = useState('')
	const [date1, setDate1 ] = useState('')
	const [title2, setTitle2 ] = useState('')
	const [experience2, setExperience2 ] = useState('')
	const [date2, setDate2 ] = useState('')
	const [major, setMajor ] = useState('')
	const [gpa, setGpa ] = useState('')
	const [project1, setProject1] = useState('')
	const [proDes1, setProDes1] = useState('')
	const [proDate1, setProDate1] = useState('')
	const [project2, setProject2] = useState('')
	const [proDes2, setProDes2] = useState('')
	const [proDate2, setProDate2] = useState('')
	const [intro, setIntro] = useState('')

	const register = e =>{
	    e.preventDefault();

	    auth
	    	.createUserWithEmailAndPassword(email,password)
	    	.then((auth)=>{
	    		console.log(auth)
	    		if (auth){
	    			history.push('/')
	    		}
	    	})
	    	.catch(error => alert(error.message))

	    db.collection("contact-form")
	    	.doc()
	    	.set({
	    		firstName: first_name,
	    		lastName: last_name,
	    		email: email,
	    		address: address,
	    		phone: phone,
	    		university: university,
	    		graduation: graduation,
	    		skills: skills,
	    		linkedln: linkedln,
	    		github: github,
	    		image: image,
	    		title1: title1,
	    		experience1: experience1,
	    		date1: date1,
	    		title2: title2,
	    		experience2: experience2,
	    		date2: date2,
	    		major: major,
	    		gpa: gpa,
	    		project1: project1,
	    		proDes1: proDes1,
	    		proDate1: proDate1,
	    		project2: project2,
	    		proDes2: proDes2,
	    		proDate2: proDate2,
	    		intro: intro,
	    	})
	    	.then(()=>{
	    		setFirstName('')
	    		setLastName('')
	    		setEmail('')
	    		setPhone('')
	    		setUniversity('')
	    		setGraduation('')
	    		setSkills('')
	    		setLinkedin('')
	    		setGithub('')
	    		setImage('')
	    		setTitle1('')
	    		setExperience1('')
	    		setDate1('')
	    		setTitle2('')
	    		setExperience2('')
	    		setDate2('')
	    		setMajor('')
	    		setGpa('')
	    		setProject1('')
	    		setProDes1('')
	    		setProDate1('')
	    		setProject2('')
	    		setProDes2('')
	    		setProDate2('')
	    		setIntro('')
	    	})
	}


	return (
		<div className="signup">
			<h1>Create Account</h1>
			<div className="div_sign">
				<p>First Name</p>
				<input type="text" value={first_name} onChange={e=>setFirstName(e.target.value)} placeholder="Enter your First Name" />
			</div>
			<div className="div_sign">
				<p>Last Name</p>
				<input type="text" value={last_name} onChange={e=>setLastName(e.target.value)} placeholder="Enter your Last Name" />
			</div>
			<div className="div_sign">
				<p>Short Description about who you are</p>
				<input type="text" value={intro} onChange={e=>setIntro(e.target.value)} placeholder="Enter the description" />
			</div>
			<div className="div_sign">
				<p>Email address</p>
				<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email address" />
			</div>
			<div className="div_sign">
				<p>Password</p>
				<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" />
			</div>
			<div className="div_sign" >
				<p>Address</p>
				<input type="text" value={address} onChange={e=>setAddress(e.target.value)} placeholder="Enter your Full Address" />
			</div>
			<div className="div_sign">
				<p>Phone No.</p>
				<input type="text" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter your Phone Number" />
			</div>
			<div className="div_sign">
				<p>University Attending</p>
				<input type="text" value={university} onChange={e=>setUniversity(e.target.value)} placeholder="Name of the University" />
			</div>
			<div className="div_sign">
				<p>Expected Graduation</p>
				<input type="text" value={graduation} onChange={e=>setGraduation(e.target.value)} placeholder="Month-Year" />
			</div>
			<div className="div_sign">
				<p>Skills</p>
				<input type="text" value={skills} onChange={e=>setSkills(e.target.value)} placeholder="Enter your Skills" />
			</div>
			<div className="div_sign">
				<p>Linkedln URL</p>
				<input type="text" value={linkedln} onChange={e=>setLinkedin(e.target.value)} placeholder="Enter your Linkedln URL" />
			</div>
			<div className="div_sign">
				<p>GitHub URL</p>
				<input type="text" value={github} onChange={e=>setGithub(e.target.value)} placeholder="Enter your GitHub URL" />
			</div>
			<div className="div_sign">
				<p>Upload a link of your image</p>
				<input type="text" value={image} onChange={e=>setImage(e.target.value)} placeholder="Enter your URL for the image" />
			</div>
			<div className="div_sign">
				<p>Major</p>
				<input type="text" value={major} onChange={e=>setMajor(e.target.value)} placeholder="Bachelors in Computer Science..." />
			</div>
			<div className="div_sign">
				<p>GPA</p>
				<input type="text" value={gpa} onChange={e=>setGpa(e.target.value)} placeholder="Enter your current GPA" />
			</div>
			<div className="div_sign">
				<p>Enter the title of the experience</p>
				<input type="text" value={title1} onChange={e=>setTitle1(e.target.value)} placeholder="Enter the title" />
			</div>
			<div className="div_sign">
				<p>Enter the latest experience you had</p>
				<input type="text" value={experience1} onChange={e=>setExperience1(e.target.value)} placeholder="Enter your experience" />
			</div>
			<div className="div_sign">
				<p>Enter the date of that experience</p>
				<input type="text" value={date1} onChange={e=>setDate1(e.target.value)} placeholder="Enter the date" />
			</div>
			<div className="div_sign">
				<p>Enter the title of the experience</p>
				<input type="text" value={title2} onChange={e=>setTitle2(e.target.value)} placeholder="Enter the title" />
			</div>
			<div className="div_sign">
				<p>Enter the latest experience you had</p>
				<input type="text" value={experience2} onChange={e=>setExperience2(e.target.value)} placeholder="Enter your experience" />
			</div>
			<div className="div_sign">
				<p>Enter the date of that experience</p>
				<input type="text" value={date2} onChange={e=>setDate2(e.target.value)} placeholder="Enter the date" />
			</div>
			<div className="div_sign">
				<p>Enter the title of the project</p>
				<input type="text" value={project1} onChange={e=>setProject1(e.target.value)} placeholder="Enter the title of the project" />
			</div>
			<div className="div_sign">
				<p>Enter the project description</p>
				<input type="text" value={proDes1} onChange={e=>setProDes1(e.target.value)} placeholder="Enter your project description" />
			</div>
			<div className="div_sign">
				<p>Enter the date of that project</p>
				<input type="text" value={proDate1} onChange={e=>setProDate1(e.target.value)} placeholder="Enter the date" />
			</div>
			<div className="div_sign">
				<p>Enter the title of the project</p>
				<input type="text" value={project2} onChange={e=>setProject2(e.target.value)} placeholder="Enter the title of the project" />
			</div>
			<div className="div_sign">
				<p>Enter the project description</p>
				<input type="text" value={proDes2} onChange={e=>setProDes2(e.target.value)} placeholder="Enter your project description" />
			</div>
			<div className="div_sign">
				<p>Enter the date of that project</p>
				<input type="text" value={proDate2} onChange={e=>setProDate2(e.target.value)} placeholder="Enter the date" />
			</div>
			<div className="submit">
				<Link to="/">      
	 		     <button type="submit" onClick={register}>Submit</button>
	 		   </Link>
			</div>
		</div>	
	)
}

export default SignUp