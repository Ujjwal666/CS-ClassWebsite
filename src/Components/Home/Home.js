import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import LeftBar from '../LeftBar/LeftBar'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home() {
	return (
		<div className="home">
			<div className="left">
				<LeftBar />
			</div>
			<div className="right">
				<div className="right_header">
					<h1>CSII-Projects</h1>
				</div>
				<div className="search_bar">
					<input type="text" placeholder="Search..." />
					<div className="search_icon">
						<SearchIcon style={{fontSize:'50px',color:'#8ed460'}}/>
					</div>	
				</div>
				<div className="cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default Home