import react, { useEffect, useState } from "react";
import "./Home.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Home() {
   
    const history = useHistory();
    //style={{ height: "300px", backgroundsize: "cover", backgroundposition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url("https://otb.cachefly.net/wp-content/uploads/2018/03/sports-equipment-balls-bat-racquet-glove-512x256.jpg")` }}
    return (
        
        <div className="body">  
            <div className="home">
                <Button variant="primary" onClick={() => history.push("/login")} >Signin</Button>
                <Button variant="primary" onClick={() => history.push("/register")} >signup</Button>
                <Button variant="primary" onClick={() => history.push("/managerlist")}>Manager List</Button>
            </div>
        </div>

    )
}
export default Home