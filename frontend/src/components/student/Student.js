import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Student.css";
function Student(p)
{
    const [email,setEmail]=useState(p.email)
    const history = useHistory();
    return(
        <div>
            <Button variant="primary" onClick={()=>history.push('/request')}>SportsRegistration</Button>
            <Button variant="primary" onClick={()=>history.push('/status')}>CheckStatus</Button>
            <Button variant="primary" onClick={()=>history.push('/showwinner')}>ShowWinner</Button>
            <Button variant="primary" onClick={()=>history.push('/addfeedback')}>AddFeedback</Button><p></p>
            <Button variant="primary" onClick={()=>{setEmail(null);history.push('/');}}>Logout</Button>
        </div>
    )
}
export default Student;