import React, { useEffect, useState } from "react";
import "./ShowWinner.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Table } from "react-bootstrap";

function ShowWinner()
{
    const history = useHistory();
    
    const[data,setData]=useState([]);
    useEffect(()=>
    {
        axios.get("http://localhost:5555/getwinner").then(res => {

            setData(res.data.winner);
           
        });
    },[])
    return(
        <div className="sw">
             <Table striped bordered hover variant="dark">
                 <thead>
                 <tr>
                     <th>Level</th>
                     <th>Tournament</th>
                     <th>Category</th>
                     <th>Date</th>
                     <th>Venue</th>
                     <th>GoldMedal</th>
                     <th>SilverMedal</th>
                     <th>BronzeMedal</th>
                 </tr>
                 </thead>
                 <tbody>
                 {
                     data.map((item)=>{
                      return(   
                    <tr>
                        <td>{item.Level}</td>
                        <td>{item.Tournament}</td>
                        <td>{item.Category}</td>
                        <td>{item.Date}</td>
                        <td>{item.Venue}</td>
                        <td>{item.GoldMedal}</td>
                        <td>{item.SilverMedal}</td>
                        <td>{item.BronzeMedal}</td>
                    </tr>
                      )
                     })
                 }
                 </tbody>
             </Table>
             <p/><Button type="submit" variant="primary" onClick={()=>history.push("/student")}>Back</Button>
        </div>
    )
}
export default ShowWinner;
