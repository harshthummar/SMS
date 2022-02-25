import react, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Signin.css"
function Signin({ setLoginUser }) {

    const history = useHistory();

    const [user, setuser] = useState({
        email: "",
        password: "",
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

    function login() {
        const { email, password } = user;
        if (email && password) {
            // alert("success");
            axios.post("http://localhost:5555/login", user).then(res => {
                //console.warn(res.data.c)
                alert(res.data.message)
                
                if (res.data.d === "1") {
                    setLoginUser(res.data.user1)
                    history.push("/admin");
                }
                else if(res.data.d === "2")
                {
                    setLoginUser(res.data.user2)
                    history.push("/student");
                }
                else if(res.data.d === "3"){
                    setLoginUser(res.data.user3)
                    history.push("/manager");
                }
               

            });
        }
        else {
            alert("Ivalied");
        }
    }

    return (
        <div className="login">
            <div><h1>Sign-In</h1></div>
            <input type="text" name="email" value={user.email} onChange={handlechange} placeholder="Email" />
            <br />
            <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Password" />
            <br />
            <Button type="submit" variant="primary" onClick={login}>Sign-In</Button>
            <div>or</div>
            <Button type="submit" variant="primary" onClick={() => history.push("/register")}>Sign-Up</Button>
        </div>
    )
}
export default Signin;