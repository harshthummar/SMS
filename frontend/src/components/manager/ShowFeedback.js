import React, { useEffect, useState } from "react";
import "./ShowFeedback.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

function ShowFeedback()
{
    const history = useHistory();

    const[data,setData]=useState([]);
    useEffect(()=>
    {
        axios.get("http://localhost:5555/getfeedback").then(res => {

            setData(res.data.feedback);
            //setS(res.data.schedule)
            //console.log(s)

        });
    },[])
    return(
        <div>
             <table border="1">
                 <tr>
                     <th>Email</th>
                     <th>Feedback</th>
                 </tr>
                 {
                     data.map((item)=>{
                      return(   
                    <tr>
                        <td>{item.Email}</td>
                        <td>{item.Feedback}</td>
                    </tr>
                      )
                     })
                 }
             </table>
             <Button type="submit" variant="primary" onClick={()=>history.push("/manager")}>Back</Button>
        </div>
    )
}
export default ShowFeedback;
