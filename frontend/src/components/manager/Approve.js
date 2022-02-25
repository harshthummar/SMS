import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./Approve.css";

function Approve() {
    const history = useHistory();

    const [a, setA] = useState([])
   // const [status, setStatus] = useState("")
    

    useEffect(() => {
        
        axios.get("http://localhost:5555/getapprove").then(res => {

            setA(res.data.request)

        });

    }, [])

    function updateY(id) {
        //const{e,s}=value
        
            const v={id:id,value:"accept"};
            axios.post("http://localhost:5555/updaterequest",v).then(res => 
            {
                alert(res.data.message)
                setA(res.data.b)
            });
        
        // console.log(e);
        // console.log(s);
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
        <div>
            <table>
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
                                        {/* <Button type="submit" onClick={() => setStatus("accept")}>Approve</Button> */}
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
                                    {/* {update(item.TeamName,status)} */}
                                </tr>
                                 
                                
                            )

                      })
                    }
                </tbody>
            </table>
            <Button type="submit" variant="primary" onClick={()=>history.push("/manager")}>Back</Button>
        </div>
    )
}
export default Approve;