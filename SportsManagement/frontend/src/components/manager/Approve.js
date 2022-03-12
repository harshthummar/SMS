import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./Approve.css";
import { Table } from "react-bootstrap";

function Approve() {
    const history = useHistory();

    const [a, setA] = useState([])
  
    

    useEffect(() => {
        
        axios.get("http://localhost:5555/getapprove").then(res => {

            setA(res.data.request)

        });

    }, [])

    function updateY(id) {
        
            const v={id:id,value:"accept"};
            axios.post("http://localhost:5555/updaterequest",v).then(res => 
            {
                alert(res.data.message)
                setA(res.data.b)
            });
    
        }
    function updateN(id) {

            const v={id:id,value:"cancle"};
            axios.post("http://localhost:5555/updaterequest",v).then(res => 
            {
                alert(res.data.message)
                setA(res.data.b)
            });
       }
    
    return (
        <div className="ap">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Approve</th>
                        <th>Level</th>
                        <th>Tournament</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Venue</th>
                        <th>TeamName</th>
                        <th>Accept or Cancle</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        a.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>
                                        <Button type="submit" variant="primary" onClick={()=>updateY(item._id)}>Accept</Button>
                                        <Button type="submit" variant="primary" onClick={()=>updateN(item._id)}>Cancle</Button>
                                    </td>
                                    <td>{item.Level}</td>
                                    <td>{item.Tournament}</td>
                                    <td>{item.Gender}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Venue}</td>
                                    <td>{item.TeamName}</td>
                                    <td>{item.Request}</td>
                                    
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
export default Approve;