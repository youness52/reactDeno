import React, { Component } from "react";





 
export default class Navbar extends Component{

 

  render() {
   
    return ( 
     
        <header>
          
          <nav className="">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Service</a>
              </li>
          
            </ul>
            
          </nav>
         
        </header>
     );
}

}