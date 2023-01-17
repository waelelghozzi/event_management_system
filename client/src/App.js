
import './App.css';
import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Side from './components/Side/Side.js';
import Events from './components/Events/Events.js';
import AddEvents from './components/AddEvents/AddEvent.js';
export default class App extends React.Component {
  constructor(props){
    super(props);

    }

render(){
   return (
    <BrowserRouter>
    <div className="App">
    <Side/>

    <div className='main_app'>
<Routes>
  <Route path='/'/>
    <Route path='Events' element={<Events/>}/>
    <Route path='AddEvents' element={<AddEvents/>}/>
</Routes>
    </div></div> 
    </BrowserRouter>
  );
}
 
}



