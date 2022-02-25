import axios from "axios";
import react, { useState} from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Signup.css"
function Signup() {
     
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

    function register(){
        const {uname,email,password,rePassword}=user;
        if(uname && email && password &&(password === rePassword))
        {
            // alert("success");
            axios.post("http://localhost:5555/register",user).then(res=>{
                alert(res.data.message)
                history.push("/login")
               });
        }
        else
        {
            alert("Ivalied");
        }
       
    }

    return (
        <div className="register">
            <div><h1>Sign-Up</h1></div>
            <input type="text" name="uname" value={user.uname} onChange={handlechange} placeholder="Username" />
            <br />
            <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Email" />
            <br />
            <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Password" />
            <br />
            <input type="password" name="rePassword" value={user.rePassword} onChange={handlechange} placeholder="Re-Password" />
            <br />
            <Button type="submit" variant="primary" onClick={register}>Sign-Up</Button>
            <div>or</div>
            <Button type="submit" variant="primary" onClick={() => history.push("/login") }>Sign-In</Button>
        </div>
    )
}
export default Signup;
