import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./Status.css";

function Status()
{
    const history = useHistory();
    const [a, setA] = useState([])
    useEffect(() => {
        
        axios.get("http://localhost:5555/getstatus").then(res => {
            setA(res.data.request)
        });

    }, [])

    return(
        <div>
               <table>
                <thead>
                    <tr>
                        <th>TeamName</th>
                        <th>Level</th>
                        <th>Tournament</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Venue</th>
                        <th>Accept</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        a.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.TeamName}</td>
                                    <td>{item.Level}</td>
                                    <td>{item.Tournament}</td>
                                    <td>{item.Gender}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Venue}</td>
                                    <td>{item.Request}</td>
                                </tr>
                                 
                                
                            )

                      })
                    }
                </tbody>
            </table>
            <Button type="submit" variant="primary" onClick={()=>history.push("/student")}>Back</Button>
        </div>
    )
}
export default Status;