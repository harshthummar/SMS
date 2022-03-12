import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./AddWinner.css"


function AddWinner() {
    const history = useHistory();

    const [winner, setWinner] = useState({
        level: "",
        tournament: "",
        category: "",
        date: "",
        venue: "",
        goldmedal: "",
        silvermedal: "",
        bronzemedal: ""
    })
    const [l, setL] = useState([])
    const [t, setT] = useState([])
    const [c, setC] = useState([])
    const [d, setD] = useState([])
    const [v, setV] = useState([])
    function handlechange(e) {
        const { name, value } = e.target;
        setWinner(
            {
                ...winner,
                [name]: value
            }
        )
    }

    function addwinner() {
        const { level,tournament,category,date,venue,goldmedal,silvermedal,bronzemedal } = winner;
        if (level && tournament && category && date && venue && goldmedal && silvermedal && bronzemedal) {
            
            axios.post("http://localhost:5555/addwinner", winner).then(res => {
                alert(res.data.message)
                history.push("/manager");
               });
        }
        else {
            alert("Ivalied");
        }

    }

    useEffect(() => {
        axios.get("http://localhost:5555/getschedule").then(res => {
               setL([...new Set(res.data.schedule.map((item)=>item.Level))]);
               setT([...new Set(res.data.schedule.map((item)=>item.Tournament))]);
               setC([...new Set(res.data.schedule.map((item)=>item.Gender))]);
               setD([...new Set(res.data.schedule.map((item)=>item.Date))]);
               setV([...new Set(res.data.schedule.map((item)=>item.Venue))]);
            
        });

    }, [winner])


    function cancle() {
        setWinner([]);
    }

    
    return (
        <div className="addwinner"> 
            <div>
                <h1>Winner Detail</h1>
                <lable>
                    Level:
                    <select name="level" value={winner.level} onChange={handlechange}>
                        <option></option>
                        {
                            
                            l.map((item) => {
                                    return (
                                             <option>{item}</option>
                                           )
                                   })
                       }
                    </select>
                </lable>
                <br />

                <lable>
                    Tournament:
                    <select name="tournament" value={winner.tournament} onChange={handlechange}>
                        <option></option>
                        {
                            
                            t.map((item) => {
                                    return (
                                             <option>{item}</option>
                                           )
                                   })
                       }
                    </select>
                </lable>
                <br />
                <label>
                    Category:
                    <select name="category" value={winner.category} onChange={handlechange}>
                        <option></option>
                        {
                            
                            c.map((item) => {
                                    return (
                                             <option>{item}</option>
                                           )
                                   })
                       }
                    </select>
                </label>
                <br />
                <label>
                    Date:
                    <select name="date" value={winner.date} onChange={handlechange}>
                        <option></option>
                        {
                            
                            d.map((item) => {
                                    return (
                                             <option>{item}</option>
                                           )
                                   })
                       }
                    </select>
                </label>
                <br />

                <label>
                    venue:
                   
                    <select name="venue" value={winner.venue} onChange={handlechange}>
                        <option></option>
                        {
                            
                            v.map((item) => {
                                    return (
                                             <option>{item}</option>
                                           )
                                   })
                       }
                    </select>
                </label>
                <br />

            </div>
            
            
            <div>
                <h1>Awards</h1>
                <label>
                    <input type="text" name="goldmedal" value={winner.goldmedal} onChange={handlechange} placeholder="Winner of GoldMedal" />
                </label>
                <p/>

                <label>
                    <input type="text" name="silvermedal" value={winner.silvermedal} onChange={handlechange} placeholder="Winner of SilverMedal" />
                </label>
                <p/>

                <label>
                    <input type="text" name="bronzemedal" value={winner.bronzemedal} onChange={handlechange} placeholder="Winner of BronzeMedal" />
                </label>
                <p/>
            </div>
            <p/>
            <Button type="submit" variant="primary" onClick={addwinner}>Add</Button><p />
            <Button type="submit" variant="primary" onClick={()=>history.push("/manager")}>Back</Button>
        </div>
    )
}

export default AddWinner;