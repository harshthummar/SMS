import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./ManagerList.css";
import { Table } from "react-bootstrap";

function ManagerList()
{
    const history = useHistory();
    const [a, setA] = useState([])
    useEffect(() => {
        
        axios.get("http://localhost:5555/getmanager").then(res => {
            setA(res.data.user)
        });

    }, [])

    return(
        <div className="list">
               <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        a.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.Uname}</td>
                                    <td>{item.Email}</td>
                                </tr>
                                 
                            )

                      })
                    }
                </tbody>
            </Table>
            <p></p><Button type="submit" variant="primary" onClick={()=>history.push("/")}>Back</Button>
        </div>
    )
}
export default ManagerList;