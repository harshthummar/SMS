import React, { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./EditTournament.css";
import axios from "axios";

function EditTournament()
{
    const history = useHistory();

    const [data,setData]=useState([])
    const [l,setL]=useState("")
    const [t,setT]=useState("")
    const [c,setC]=useState("")
    const [d,setD]=useState("")
    const [v,setV]=useState("")
    const [id,setId]=useState("")
    // function handlechange(e) {
        
    //     setS(
    //         {
    //             ...s,
    //             [name]: value
    //         }

    // }

    useEffect(()=>
    {
        axios.get("http://localhost:5555/getschedule").then(res => {

            setData(res.data.schedule);
            //setS(res.data.schedule)
            //console.log(s)

        });
    },[])

    function deleteT(id)
    {
        const value={id:id};
        axios.post("http://localhost:5555/deletetournament",value).then(res => {

            alert(res.data.message);
            setData(res.data.schedule);
            
        });
    }

    function selectT(id)
    {
        //const value={id:id};
        data.map((item)=>
        {
           if(item._id===id)
           {
               setL(item.Level)
               setT(item.Tournament)
               setC(item.Gender)
               setD(item.Date)
               setV(item.Venue)
               setId(item._id)
           } 
        })
        
    }

    function updateT()
    {
          const value={l,t,c,d,v,id}  
        axios.post("http://localhost:5555/updatetournament",value).then(res => {

            alert(res.data.message);
            setData(res.data.schedule);
            
        });
    }

    return(
        <div>
             <table border="1">
                 <tr>
                     <th>Level</th>
                     <th>Tournament</th>
                     <th>Category</th>
                     <th>Date</th>
                     <th>Venue</th>
                 </tr>
                 {
                     data.map((item)=>{
                      return(   
                    <tr>
                        <td>{item.Level}</td>
                        <td>{item.Tournament}</td>
                        <td>{item.Gender}</td>
                        <td>{item.Date}</td>
                        <td>{item.Venue}</td>
                        <td><Button type="submit" variant="primary" onClick={()=>deleteT(item._id)}>Delete</Button></td>
                        <td><Button type="submit" variant="primary" onClick={()=>selectT(item._id)}>Update</Button></td>
                    </tr>
                      )
                     })
                 }
             </table>
             <br></br>
             <div>
             <input type="text"  name="level" value={l} onChange={(e)=>setL(e.target.value)} placeholder="Level" />
             <br /><br />
             <input type="text"  name="tournament" value={t} onChange={(e)=>setT(e.target.value)} placeholder="Tournament" />
             <br /><br />
             <input type="text" name="category" value={c}  onChange={(e)=>setC(e.target.value)} placeholder="Category" />
             <br /><br />
             <input type="date" name="date" value={d} onChange={(e)=>setD(e.target.value)} placeholder="Date" />
             <br /><br />
             <input type="text" name="venue" value={v} onChange={(e)=>setV(e.target.value)} placeholder="Venue" />
             <br /><br />
             <Button type="submit" variant="primary" onClick={updateT}>Update Tournament</Button><p></p>
             <Button type="submit" variant="primary" onClick={()=>history.push("/manager")}>Back</Button>
             </div>
        </div>
    )
}
export default EditTournament;