import React, {useState } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddFeedback.css";
import axios from "axios";

function AddFeedback(p)
{
   const history = useHistory();
   const [email,setEmail]=useState(p.email)
   const [feedback,setFeedback]=useState("");


    function feed()
    {
        if(email && feedback)
        {
            const value={email,feedback};
            axios.post("http://localhost:5555/addfeedback",value).then(res => {
    
                alert(res.data.message);
                history.push("/student");
                
            });
        }
        else{
            alert("Invalied");
            history.push("/addfeedback");
        }
       
    }
      return(
          <div className="feedback">
            <h1>Add Feedback</h1>
            <br></br>
            <label>Email:</label>
            <input type="text"  name="email"  value={email} placeholder="Email" />
             <br /><br />
             <textarea type="text"  name="feedback" value={feedback} onChange={(e)=>{setFeedback(e.target.value)}} placeholder="Feedback" />
             <br /><br />
             <Button type="submit" variant="primary" onClick={feed}>Add Feedback</Button><p></p>
             <Button type="submit" variant="primary" onClick={()=>history.push("/student")}>Back</Button>
          </div>
      )
}
export default AddFeedback;