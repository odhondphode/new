import React from 'react';
import "./App.css";
import Menu from "./menuApi.js";
import logo from "../../assests/magi.jpg";
const Resturant = () => {
  return (
   <>
   <div className ="card-container">
   <div className="card">
   <div className="card-body">
   <span className="card-number card-circle subtle">1</span>
   <span className="card-anthor subtle">Breakfast</span>
   <h2 className="card-title">maggi</h2>
   <span className="card-description subtle">

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
    Perspiciatis harum suscipit ab nemo possimus quis corrupti assumenda?<br/>
    Accusamus, earum aperiam. Illum ullam ratione qui cum debitis minus repellendus aspernatur fugit!
    </span>
  <div className="card-read">Read</div>
   </div> 

  
   <img src={logo}  alt="images" className="card-media"/>
   <span className="card-tag subtle" >Order Now</span>
   </div>
  </div>
   </>
  );
};


export default Resturant;
