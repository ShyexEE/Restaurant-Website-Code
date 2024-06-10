import React from "react";
import { useState } from "react";
import {Twirl as Hamburger} from 'hamburger-react'


function Header(){
    const [under, setUnder] = useState(false)


    function handleClick(){
        if(under===true){
            setUnder(false)
        }else{
            setUnder(true)
        }
    }
/**HeaderOn HeaderOff =  under header animated bar   header-off header-on= header animation */
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('Header').classList.add("header-displayOff")
    document.getElementById('underHeader').classList.add("header-hide")
})
/**<a className="btn" href="/">Contact</a> headGap*/
window.addEventListener('scroll', () => {
    const topBar = document.getElementById('Header');
    const triggerDiv = document.getElementById('triggerDiv');
    const topBarBottom = topBar.getBoundingClientRect().bottom;
    const triggerDivTop = triggerDiv.getBoundingClientRect().top;
    console.log(document.getElementsByClassName)
    if (topBarBottom >= triggerDivTop) {
        topBar.classList.remove('header-displayOff');  
        topBar.classList.add("header-on")
        topBar.classList.remove('header-off');    
        document.getElementById('logo').style.visibility= "hidden"
    } else {  
        topBar.classList.add("header-off");    // Add new class// Remove old class
        topBar.classList.remove('header-on'); 
        document.getElementById('logo').style.visibility= "visible"
        document.getElementById('underHeader').classList.add("header-hide")
        setUnder(false)
    }
  });
  
    return(<div >
     <div id="Header" className="center-center">
         <img className="headerImg pad-left-header-1" alt="" src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"/>
         <div style={{overflow: "hidden"}} className="pad-right-header-1">
            <Hamburger color="black" size={28} direction="left"  toggled={under} toggle={handleClick} />
         </div>
     </div>
     <div id="underHeader" className={under? "HeaderOn center-center" : "HeaderOff center-center" }>
        <div className="underHeaderDiv center-center">
            <a className="btn" href="/">Menu</a>
            <a className="btn" href="/">Contact</a>
            <a className="btn" href="/">About us</a>
        </div>
     </div>
    </div>
    )
}

export default Header






