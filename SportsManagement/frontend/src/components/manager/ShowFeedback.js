import React, { useEffect, useState } from "react";
import "./ShowFeedback.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Table } from "react-bootstrap";

function ShowFeedback()
{
    const history = useHistory();

    const[data,setData]=useState([]);
    useEffect(()=>
    {
        axios.get("http://localhost:5555/getfeedback").then(res => {

            setData(res.data.feedback);
            

        });
    },[])
    return(
        <div className="sf">
             <Table striped bordered hover variant="dark">
                 <thead>
                 <tr>
                     <th>Email</th>
                     <th>Feedback</th>
                 </tr>
                 </thead>
                 <tbody>
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
                 </tbody>
             </Table>
             <p></p><Button type="submit" variant="primary" onClick={()=>history.push("/manager")}>Back</Button>
        </div>
    )
}
export default ShowFeedback;
