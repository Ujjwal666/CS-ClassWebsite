import './App.css';
import Home from './Components/Home/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Announcements from './Components/Announcements/Announcements'
import Students from './Components/Students/Students'
import LogIn from './Components/LogIn/LogIn'
import SignUp from './Components/SignUp/SignUp'
import Project from './Components/Project/Project'
import StudentsProfile from './Components/StudentsProfile/StudentsProfile'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
