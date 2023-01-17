import React, { Component } from 'react';
import {Link, Outlet} from 'react-router-dom';
import './Side.css';

export default class Tabs extends Component {
  render() {
    return (
      
      <nav>
        <div className='linksList'>
           <Link to='/Events'>Events</Link>
            <Link to='/AddEvents'>Add event</Link>
        </div>
      </nav>
     
    )
  }
}
