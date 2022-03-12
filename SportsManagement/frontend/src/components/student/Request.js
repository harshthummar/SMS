import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./Request.css"
function Request() {
    const history = useHistory();

    const [request, setRequest] = useState({
        level: "",
        tournament: "",
        category: "",
        date: "",
        venue: "",
        teamname: "",
        player1: null,
        player2: null,
        player3: null,
        player4: null,
        player5: null,
        player6: null,
        player7: null,
        player8: null,
        player9: null,
        player10: null,
        player11: null
    })
    const [r, setR] = useState([])
    const [t, setT] = useState([])
    const [l, setL] = useState([])
    const [c, setC] = useState([])
    const [d, setD] = useState([])
    const [v, setV] = useState([])

    function handlechange(e) {

        const { name, value } = e.target;
        setRequest(
            {
                ...request,
                [name]: value
            }
        )
    }

    function req() {
        const { level, tournament, category, date, venue, teamname, player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11 } = request;
        if ((level && tournament && category && date && venue && teamname) && ((player1) || (player1 && player2 && player3 && player4 && player5 && player6 && player7 && player8 && player9 && player10 && player11))) {

            axios.post("http://localhost:5555/request", request).then(res => {
                alert(res.data.message)
                history.push("/student");
            });
        }
        else {
            alert("Ivalied");
        }
    }

    useEffect(() => {
        axios.get("http://localhost:5555/getschedule").then(res => {
            setR(res.data.schedule)
            setL([...new Set(res.data.schedule.map((item) => item.Level))]);
            setT([...new Set(res.data.schedule.map((item) => item.Level === request.level ? item.Tournament : null))])
            setC([...new Set(res.data.schedule.map((item) => item.Level === request.level && item.Tournament === request.tournament ? item.Gender : null))])
            setD([...new Set(res.data.schedule.map((item) => item.Level === request.level && item.Tournament === request.tournament && item.Gender === request.category ? item.Date : null))])
            setV([...new Set(res.data.schedule.map((item) => item.Level === request.level && item.Tournament === request.tournament && item.Gender === request.category && item.Date === request.date ? item.Venue : null))])


        });

    }, [request])



    return (

        <div className="request">
            <h1>Registration</h1>
            <lable>
                Level:
                <select name="level" value={request.level} onChange={handlechange}>
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

                <select name="tournament" value={request.tournament} onChange={handlechange}>
                    <option></option>

                    {
                       


                        t.map((item) => {
                            return (
                                <option>{item}</option>
                            )
                        }
                        )


                    }
                </select>

            </lable>
            <p></p>

            {
                request.tournament === "cricket" || request.tournament === "football" ?
                    <>
                        <label>Player Name</label>
                        <input type="text" name="player1" value={request.player1} onChange={handlechange} placeholder="Player1" /> <input type="text" name="player2" value={request.player2} onChange={handlechange} placeholder="Player2" />
                        <input type="text" name="player3" value={request.player3} onChange={handlechange} placeholder="Player3" /> <input type="text" name="player4" value={request.player4} onChange={handlechange} placeholder="Player4" />
                        <input type="text" name="player5" value={request.player5} onChange={handlechange} placeholder="Player5" /> <input type="text" name="player6" value={request.player6} onChange={handlechange} placeholder="Player6" />
                        <input type="text" name="player7" value={request.player7} onChange={handlechange} placeholder="Player7" /> <input type="text" name="player8" value={request.player8} onChange={handlechange} placeholder="Player8" />
                        <input type="text" name="player9" value={request.player9} onChange={handlechange} placeholder="Player9" /> <input type="text" name="player10" value={request.player10} onChange={handlechange} placeholder="Player10" />
                        <input type="text" name="player11" value={request.player11} onChange={handlechange} placeholder="Player11" />
                    </>
                    : request.tournament === "ches" ?
                        <>
                            <label>Player Name</label>
                            <input type="text" name="player1" value={request.player1} onChange={handlechange} placeholder="Player1" />
                        </>
                        : ""

            }
            <br />

            <label>
                Category:
                <select name="category" value={request.category} onChange={handlechange}>
                    <option></option>
                    {

                        c.map((item) => {
                            return (<option>{item}</option>)
                        })
                       
                    }
                </select>
            </label>
            <br />
            <label>
                Date:
                
                <select name="date" value={request.data} onChange={handlechange}>
                    <option></option>
                    {

                        d.map((item) => {
                            return (<option>{item}</option>)

                        })
                       
                    }
                </select>
            </label>
            <br />

            <label>
                venue:
               
                <select name="venue" value={request.venue} onChange={handlechange}>
                    <option></option>
                    {

                        v.map((item) => {
                            return (<option>{item}</option>)
                        })
                       
                    }
                </select>
            </label>
            <br />

            <label>
                Team Name:
                <input type="text" name="teamname" value={request.teamname} onChange={handlechange} placeholder="Team Name" />
            </label>
            <p />
            <Button type="submit" variant="primary" onClick={req}>Request</Button><p></p>
            <Button type="submit" variant="primary" onClick={() => history.push("/student")}>Back</Button>
        </div>


    )
}
export default Request;