import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddTournament.css"
import axios from "axios";
function AddTournament() {
    const history = useHistory();

    const [schedule, setSchedule] = useState({
        level: "",
        tournament: "",
        gender: "",
        date: "",
        venue: ""
    })
    function handlechange(e) {
        const { name, value } = e.target;
        setSchedule(
            {
                ...schedule,
                [name]: value
            }
        )
    }

    function addtournament() {
        const { level,tournament,gender,date,venue } = schedule;
        if (level && tournament && gender && date && venue) {
            // alert("success");
            axios.post("http://localhost:5555/addtournament", schedule).then(res => {
                //console.warn(res.data.c)
                alert(res.data.message)
                history.push("/manager");
               });
        }
        else {
            alert("Ivalied");
        }

    }


    return (
        <div className="addtournament">
            <h1>Add Tournament</h1>

            <lable>
            Level:
            <select name="level" value={schedule.level} onChange={handlechange}>
                <option></option>
                <option value="district">District</option>
                <option value="state">State</option>
            </select>
            </lable>
            <br />

            <lable>
            Tournament:
            <select name="tournament" value={schedule.tournament} onChange={handlechange}>
                <option></option>
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="ches">Ches</option>
            </select>
            </lable>
            <br />
            <label>
            Gender: 
                <ul>
                    <input type="radio" value="male" name="gender" onChange={handlechange}/>Male 
                    <br></br>
                    <input type="radio" value="female" name="gender" onChange={handlechange}/> Female
                </ul>    
               
            </label>
            <br />

            <input type="date" name="date" value={schedule.date} onChange={handlechange} placeholder="Date" />
            <br /><br />
            <input type="text" name="venue" value={schedule.venue} onChange={handlechange} placeholder="Venue" />
            <br /><br />
            <Button type="submit" variant="primary" onClick={addtournament}>Add</Button> <p></p>
            <Button type="submit" variant="primary" onClick={()=>history.push("/manager")}>Back</Button>
        </div>
    )
}

export default AddTournament;