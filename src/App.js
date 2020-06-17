import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
const App=(props)=>{
  window.navigator.geolocation.getCurrentPosition( 
    position =>console.log(position), err=>console.log(err)
     );
   return (
     
     <div className="ui container comments">
       <div   className="comments">
         <a href="/" className="avatar">
            <img alt="avatar" src={props.src}/>
          </a> 
          <div className="metadata">
   <span className="date">{props.date}</span>
            </div>
           <div className="text" >
          {props.text}
           </div>
      </div>
       </div>
   );
}

export default App;
