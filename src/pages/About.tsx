import React from "react";

export default function About(){
    return (
        <div className="items-center mx-auto" id="about">
            <div className="items-center mx-auto mb-20 w-90 h-20">
            <img src="about.png" alt=""
                    className=""/>
            </div>
            <div className="font-serif text-center mx-auto text-white px-35 pb-20">
            <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
        </div>
     
    )
}

