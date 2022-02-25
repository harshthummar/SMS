import './App.css';
import Home from './components/home/Home';
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup';
import Admin from './components/admin/Admin';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import AddAdmin from './components/admin/AddAdmin';
import AddManager from './components/admin/AddManager';
import Manager from './components/manager/Manager';
import AddWinner from './components/manager/AddWinner';
import AddTournament from './components/manager/AddTournament';
import Student from './components/student/Student';
import Request from './components/student/Request';
import Approve  from './components/manager/Approve';
import EditTournament from './components/manager/EditTournament';
import ShowWinner from './components/student/ShowWinner';
import AddFeedback from './components/student/AddFeedback';
import ShowFeedback from './components/manager/ShowFeedback';
import Status from './components/student/Status';
import ManagerList from './components/manager/ManagerList';
//import SportDetail from './components/student/SportDetail';
function App() {

  const [user,setLoginUser]=useState()
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin"> 
             <Admin email={user}/>
          </Route>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/login"> <Signin setLoginUser={setLoginUser}/></Route>
          <Route path="/register"> <Signup/></Route>
          <Route path="/manager"> <Manager email={user}/></Route>
          <Route path="/addadmin"> <AddAdmin/></Route>
          <Route path="/addmanager"> <AddManager/></Route>
          <Route path="/addtournament"> <AddTournament/></Route>
          <Route path="/edittournament"> <EditTournament/></Route>
          <Route path="/addwinner"> <AddWinner/></Route>
          <Route path="/student"> <Student setLoginUser={setLoginUser}/></Route>
          <Route path="/request"> <Request/></Route>
          <Route path="/approve"><Approve/></Route>
          <Route path="/showwinner"><ShowWinner/></Route>
          <Route path="/addfeedback"><AddFeedback email={user}/></Route>
          <Route path="/showfeedback"><ShowFeedback/></Route>
          <Route path="/status"><Status/></Route>
          <Route path="/managerlist"><ManagerList/></Route>
        </Switch>
      </Router>
     {/* <SportDetail/> */}
    </div>
  );
}

export default App;
