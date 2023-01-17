import React, { Component } from 'react'
import './Events.css'
const API_BASE="http://localhost:3001";

export default class SimpleEvent extends Component {
    constructor(props){
        super(props);
        this.state={
             id:this.props.id,
             title:this.props.title,
             description:this.props.description,
             date:this.props.date,
             address:this.props.address,
             image:this.props.image
        }   

  }
 
   

  render() {
       return (

        <div className='EventContainer' >

           <img src={this.state.image} className='EventImage'/>
          <div className='EventInfoContainer'>
                <h3>Title :{this.state.title}</h3>
                <div>Description :{this.state.description}</div>
                <div>Adress :{this.state.address}</div> 
                <div>Date :{this.state.date.substring(0,10)}</div>
          </div>

          <div className="button-container">
          
          <div className="delete-event" onClick={() => this.props.oneDel(this.state.id)}><div className='label'>Delete</div></div>
          <div className="update-event" onClick={() => this.props.call(this.state.id)}><div className='label'>Update</div></div>
          
          </div>
        

        </div>
    )
  }
}
