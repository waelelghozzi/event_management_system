import React, { Component } from 'react'
import SimpleEvent from './SimpleEvent.js'
import './Events.css'
import { useState,useEffect } from "react";
const API_BASE="http://localhost:3001";



export default function Events(props) {
  
const[updatePopupActive, setUpdatePopupActive]=useState(false);
const [newTitle, setNewTitle] = useState("");
const [newDescription,setNewDescription] = useState("");
const [newDate, setNewDate] = useState("");
const [newAdress, setNewAdress] = useState("");
const [newImage, setNewImage] = useState("");
const [updatedId, setupdatedId] = useState("");




const updateHandler = id=>{
  console.log(id)
  setupdatedId(id)
  setUpdatePopupActive(true)
 
}



const updateEvent=async(i)=> {
  
  console.log(updatedId)
  const data = await fetch(API_BASE+"/event/update/"+updatedId,{
    method:"PATCH",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({ 
      title:newTitle,
      description:newDescription,
      date:newDate,
      address:newAdress,
      image:newImage
    })
  }).then(res=> res.json());
  
   setUpdatePopupActive(false);
   setNewTitle("");
   setNewDescription("");
   setNewDate("");
   setNewAdress("");
   GetEvents();
}





    const GetEvents =()=>{
      fetch(API_BASE+"/events").then(res=>res.json())
                               .then(data=>setEvents(data))
                               .catch(err=> console.error("Error",err));}
    
                               const[events, setEvents]=useState([]);


    useEffect(()=>{
      GetEvents();
    },[])
   
    const deleteEvent = async id =>{
        const data = await fetch(API_BASE+"/event/delete/"+id ,{method:"DELETE"})
        .then(res=>res.json());
        setEvents(events=>events.filter(event => event._id == data._id))
        GetEvents();}

    let refs=[]
    const change=(index)=>{

           if (refs.indexOf(index)>=0){
               refs.pop(index);
           }else{
             refs.push(index);
           }}
    return (
      
      <div className='EventsContainer'> 
      {console.log(events)}
        <h2 className='EventsHeader'>Events :</h2>
        <div className='content'>

  {events.map((e)=>(
  <SimpleEvent title={e.title}
   description={e.description} date={e.date}
  address={e.address} image={e.image} id={e._id} call={updateHandler} oneDel={deleteEvent}/>
))}
      </div>



{updatePopupActive ? ( 
  <div className="popup">
  
  <div className="closePopup" onClick={()=>setUpdatePopupActive(false)}>x</div>
  <h2 className='EventsHeader'>Update your event :</h2>
    <div className="content">
    <form className='form2'>
    <label for="myFile" className='add-event-image-label'>Add an image for your event !</label>
          <input type="file" id="myFile" name="filename" className='hidden' onChange={(e)=> setNewImage(e.target.files[0].name)}/>  
          <input type="text" className="add-event-input" onChange={e=> setNewTitle(e.target.value)} value={newTitle} placeholder="Title" required />
          <input type="text" className="add-event-input" onChange={e=> setNewDescription(e.target.value)} value={newDescription} placeholder="Description" required/>
          <input type="text" className="add-event-input" onChange={e=> setNewAdress(e.target.value)} value={newAdress} placeholder="Event adress" required/>
          <input type="date" className="add-event-input" onChange={e=> setNewDate(e.target.value)} value={newDate} placeholder="Event date" required/>
          <button type="button" onClick={updateEvent} className="add-event-button">Add Event</button>
    </form>
    </div>

  </div>
) : ''}  



      </div>)}

