import React, { Component } from 'react'
import Tabs from './Tabs.js'
import './Side.css';

export default class Side extends Component {
  constructor(props){
    super(props);
  }
    render() {
    return (
      <div className='panel'>
        <div >
          <h2 className='SideHeader'>Navigation</h2>
        </div>
        {<Tabs/>}
      </div>
    )
  }
}
