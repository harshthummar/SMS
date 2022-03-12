import React from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import react, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddManager.css";
function AddManager()
{
    const history=useHistory();
    const [user, setuser] = useState({
        uname:"",
        email: "",
        password: ""
    })

    function handlechange(e) {
        const { name, value } = e.target;
        setuser(
            {
                ...user,
                [name]: value
            }
        )
    } 

    function addmanager(){
        const {uname,email,password}=user;
        if(uname && email && password)
        {
            // alert("success");
            axios.post("http://localhost:5555/addmanager",user).then(res=>{
                alert(res.data.message)
                if(res.data.message==="Successfully Added Manager")
                {
                    history.push("/admin");
                }
                else{
                    history.push("/addmanager");
                }
                
               });
        }
        else
        {
            alert("ivalied");
        }
       
    }
    return(
        <div className="addmanager">
            <div><h1>Add-Manager</h1></div>
            <input type="text" name="uname" value={user.uname} onChange={handlechange} placeholder="Username" />
            <br />
            <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Email" />
            <br />
            <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Password" />
            <br />
            <Button type="submit" variant="primary" onClick={addmanager}>AddManager</Button>
            <br/><br/>
            <Button type="submit" variant="primary" onClick={()=>history.push("/admin")}>Back</Button>
        </div>
    )
}
export default AddManager;