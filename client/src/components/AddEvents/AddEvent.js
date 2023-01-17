import React, { Component } from 'react'
import { useState,useEffect } from "react";
import './AddEvents.css'
const API_BASE="http://localhost:3001";



export default function AddEvent (props) {

  const [newTitle, setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newAdress, setNewAdress] = useState("");
  const [newImage, setNewImage] = useState("");
  
  
  
  const[events, setEvents]=useState([]);
  const GetEvents =()=>{
    fetch(API_BASE+"/events").then(res=>res.json())
                             .then(data=>setEvents(data))
                             .catch(err=> console.error("Error",err));}
  



  const addEventN= async() => {
    
    GetEvents()
    
  const data = await fetch(API_BASE+ "/event/new",{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title:newTitle,
        description:newDescription,
        date:newDate,
        address:newAdress,
        image:newImage
      })
    }).then(res=> res.json());
     setEvents([...events,data]);
     setNewTitle("");
     setNewDescription("");
     setNewAdress("")
     setNewDate("");
     setNewImage("")
    console.log(newImage)
  }

    return (
      <div className='EventsContainer'> 
      <h2 className='EventsHeader'>Add events :</h2>
        <div className="contentadd">

        <form>
          <label for="myFile" className='add-event-image-label'>Add an image for your event !</label>
          <input type="file" id="myFile" name="filename" className='hidden' onChange={(e)=> setNewImage(e.target.files[0].name)}/>  
          <input type="text" className="add-event-input" onChange={e=> setNewTitle(e.target.value)} value={newTitle} placeholder="Title" required />
          <input type="text" className="add-event-input" onChange={e=> setNewDescription(e.target.value)} value={newDescription} placeholder="Description" required/>
          <input type="text" className="add-event-input" onChange={e=> setNewAdress(e.target.value)} value={newAdress} placeholder="Event adress" required/>
          <input type="date" className="add-event-input" onChange={e=> setNewDate(e.target.value)} value={newDate} placeholder="Event date" required/>
          <button type="button" onClick={addEventN} className="add-event-button">Add Event</button>
        </form>
        </div>

      </div>
    )
  
}
