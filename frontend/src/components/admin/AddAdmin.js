import React from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import react, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddAdmin.css";
function AddAdmin() {
     
    const history=useHistory();
    const [user, setuser] = useState({
        uname:"",
        email: "",
        password: "",
        rePassword:""
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

    function addadmin(){
        const {uname,email,password,rePassword}=user;
        if(uname && email && password &&(password === rePassword))
        {
            // alert("success");
            axios.post("http://localhost:5555/addadmin",user).then(res=>{
                alert(res.data.message)
                if(res.data.message==="Successfully Added Admin")
                {
                    history.push("/admin");
                }
                else{
                    history.push("/addadmin");
                }
        
               });
        }
        else
        {
            alert("ivalied");
        }
       
    }
    return (
        <div className="addadmin">
            <div><h1>Add-Admin</h1></div>
            <input type="text" name="uname" value={user.uname} onChange={handlechange} placeholder="Username" />
            <br />
            <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Email" />
            <br />
            <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Password" />
            <br />
            <input type="password" name="rePassword" value={user.rePassword} onChange={handlechange} placeholder="Re-Password" />
            <br />
            <Button type="submit" variant="primary" onClick={addadmin}>AddAdmin</Button>
            <br/><br/>
            <Button type="submit" variant="primary" onClick={()=>history.push("/admin")}>Back</Button>
        </div>
    )
}
export default AddAdmin;