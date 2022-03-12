import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Manager.css";
function Manager(p)
{
    const history = useHistory();
    const [email,setEmail]=useState(p.email)
    return(
        
        <div className="manager">
             <Button variant="primary" onClick={()=>history.push('/addtournament')}>AddTournament</Button>
             <Button variant="primary" onClick={()=>history.push('/edittournament')}>EditTournament</Button>
             <Button variant="primary" onClick={()=>history.push('/addwinner')}>AddWinner</Button>
             <Button variant="primary" onClick={()=>history.push('/approve')}>Approve</Button>
             <Button variant="primary" onClick={()=>history.push('/showfeedback')}>ShowFeedback</Button>
             <Button variant="primary" onClick={()=>{setEmail(null);history.push('/');}}>Logout</Button>
        </div>
    
    )
}
export default Manager;