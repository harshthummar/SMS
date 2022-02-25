import React,{useState } from "react";
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Admin(p)
{
    const history=useHistory();
    const [email,setEmail]=useState(p.email)
    // console.log(email)
   
    return(
           <div className="admin">   
              <Button variant="primary" onClick={()=>{history.push('/addadmin')}}>AddAdmin</Button>
              <Button variant="primary" onClick={()=>{history.push('/addmanager')}}>AddManager</Button>
              <Button variant="primary" onClick={()=>{setEmail(null);history.push('/');}}>Logout</Button>
              {/* <Button type="submit" variant="primary" onClick={()=>history.push("/")}>Back</Button> */}
               {/* <Button variant="primary" onClick={()=>{setLoginUser({});history.push('/');}}>Logout</Button> */}
           </div>
    )
}
export default Admin;