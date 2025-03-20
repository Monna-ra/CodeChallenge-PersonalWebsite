import React from "react";
import AlertIcon from "./alert";

export default function Contact () {
   return(
    <div className="bg-(#191312) container items-center mx-auto w-90 h-20 py-100 " id="findme">
        <div className="mx auto"> <img src="findme.png" alt="" /></div>
        <div className="text-amber-700 items-center text-center font-serif">
            <p>
                Find me more on these Platforms!
            </p>
        </div>
        <br />
        <div className="mx-26 container items-center space-x-3 flex">

        <AlertIcon
            imageSrc="phone.png"
            message="You can't know that yet! 🌹🤭"
        />
        <AlertIcon
            imageSrc="email.png"
            message="Still can't know that yet! 🌹🤭"
        />
        <a href="https://github.com/Monna-ra" target="_blank" className="transform transition-transform duration-300 hover:scale-110">
        <img src="github.png" alt="github" className="w-10 h-10" />
        </a>
</div>
<br />
<div className="mx-16 container items-center space-x-3">
    <a href="/">
        <button className="bg-amber-900 font-serif font-light text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full">
            Take me back Home!
        </button>
    </a>
</div>
</div>
    
   )
}