import React, { useState } from "react";
import "./HomeSearch.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import logo from './logo2.png';
import Particles from 'react-particles-js'
import {Link} from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
// import { actionTypes } from "./reducer";
import {auth} from '../firebase'

function HomeSearch() {
  const [{user,current},dispatch] = useStateValue();

  var randomColor = require('randomcolor'); // import the script
  var color = randomColor(); // a hex code for an attractive color

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }
  }
  console.log("cur",user)
  return (
    <div className="main">
      <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
        params={{
          particles: {
            color: {
              value: "ffffff"
            },
            line_linked: {
              color: {
                value: "#ffffff"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />
      <div className="homes">
        <div className="home__header">
          <div className="home__headerLeft">
            <Link to={!user && "/login"}>
              <Button onClick={handleAuthentication} className="search__buttonsHidde" >{user ? 'Sign Out' : 'Sign In'}</Button>
            </Link>  
          </div>
          <div className="home__headerRight">
            {user && 
              <Avatar style={{backgroundColor:color}} alt="src" className="avatar" >{user?.email[0].toUpperCase()} </Avatar>
            }
            <p style={{color:'black'}}>Hello {user ? user?.email : 'Guest'}</p>
          </div>
        </div>

        <div className="home__body">
          <img
            src={logo}
            alt=""
          />
          <div className="home__inputContainer">
            <form className="search">
              <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input  />
                <MicIcon style={{color:"white"}}/>
              </div>

              <div className="search__buttons">
                <Link to="/home_projects">
                  <Button className="search__buttonsHidden btn btn1" type="submit"  variant="outlined">
                    Search Projects
                  </Button>
                </Link>  
                <Link to = "/students">
                  <Button className="search__buttonsHidden btn btn2" variant="outlined">Search Students</Button>
                </Link>
              </div>

            </form>
          </div>
        </div>
        
      </div>
    </div>  
    
  );
}

export default HomeSearch;