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
				<input type="text" required="required" value={first_name} onChange={e=>setFirstName(e.target.value)} placeholder="Enter your First Name" />
				<span className="line"></span>
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={last_name} onChange={e=>setLastName(e.target.value)} placeholder="Enter your Last Name" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={intro} onChange={e=>setIntro(e.target.value)} placeholder="Short Description about who you are" />
			</div>
			<div className="div_sign">
				<input type="email" required="required" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email address" />
			</div>
			<div className="div_sign">
				<input type="password" required="required" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" />
			</div>
			<div className="div_sign" >
				<input type="text" required="required" value={address} onChange={e=>setAddress(e.target.value)} placeholder="Enter your Full Address" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter your Phone Number" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={university} onChange={e=>setUniversity(e.target.value)} placeholder="Name of the University Attending" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={graduation} onChange={e=>setGraduation(e.target.value)} placeholder="Expected Graduation" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={skills} onChange={e=>setSkills(e.target.value)} placeholder="Enter your Skills" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={linkedln} onChange={e=>setLinkedin(e.target.value)} placeholder="Enter your Linkedln URL" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={github} onChange={e=>setGithub(e.target.value)} placeholder="Enter your GitHub URL" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={image} onChange={e=>setImage(e.target.value)} placeholder="Enter your URL for your profile image" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={major} onChange={e=>setMajor(e.target.value)} placeholder="Enter your Major" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={gpa} onChange={e=>setGpa(e.target.value)} placeholder="Enter your current GPA" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={title1} onChange={e=>setTitle1(e.target.value)} placeholder="Enter the title for one of your experience" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={experience1} onChange={e=>setExperience1(e.target.value)} placeholder="Describe about that experience" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={date1} onChange={e=>setDate1(e.target.value)} placeholder="Enter the date of that experience" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={title2} onChange={e=>setTitle2(e.target.value)} placeholder="Enter the title for one of your experience" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={experience2} onChange={e=>setExperience2(e.target.value)} placeholder="Describe about that experience" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={date2} onChange={e=>setDate2(e.target.value)} placeholder="Enter the date of that experience" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={project1} onChange={e=>setProject1(e.target.value)} placeholder="Enter the title for one of your project" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={proDes1} onChange={e=>setProDes1(e.target.value)} placeholder="Describe that project" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={proDate1} onChange={e=>setProDate1(e.target.value)} placeholder="Enter the date for that project" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={project2} onChange={e=>setProject2(e.target.value)} placeholder="Enter the title for one of your project" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={proDes2} onChange={e=>setProDes2(e.target.value)} placeholder="Describe that project" />
			</div>
			<div className="div_sign">
				<input type="text" required="required" value={proDate2} onChange={e=>setProDate2(e.target.value)} placeholder="Enter the date for that project" />
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