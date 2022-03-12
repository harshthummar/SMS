import react, { useEffect, useState } from "react";
import "./Home.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Home() {
   
    const history = useHistory();
    
    return (
            <div className="home">
                <Button variant="primary" onClick={() => history.push("/")} >Home</Button>
                <Button variant="primary" onClick={() => history.push("/login")} >Signin</Button>
                <Button variant="primary" onClick={() => history.push("/register")} >signup</Button>
                <Button variant="primary" onClick={() => history.push("/managerlist")}>ManagerList</Button>
            </div>
    )
    
}
export default Home