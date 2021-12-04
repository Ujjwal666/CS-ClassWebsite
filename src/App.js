import React,{useEffect} from "react";
import './App.css';
import Home from './Components/Home/Home'
import HomeSearch from './Components/HomeSearch/HomeSearch'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Announcements from './Components/Announcements/Announcements'
import Students from './Components/Students/Students'
import LogIn from './Components/LogIn/LogIn'
import SignUp from './Components/SignUp/SignUp'
import Project from './Components/Project/Project'
import UpdateProject from './Components/Project/UpdateProject'
import StudentsProfile from './Components/StudentsProfile/StudentsProfile'
import Profile from './Components/Profile/Profile'
import CreateProject from './Components/CreateProject/CreateProject'
import {auth} from "./Components/firebase"
import {useStateValue} from './Components/StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      // console.log('FUCK',authUser.email)
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/update_project">
          <UpdateProject />
        </Route>
        <Route path="/create_project">
          <CreateProject />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/students_profile">
          <StudentsProfile />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/announcement">
          <Announcements />
        </Route>
        <Route path="/home_projects">
          <Home />
        </Route>
        <Route path="/">
          <HomeSearch />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
