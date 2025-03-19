"use client"
import React from "react";

export default function button (){
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
        >
            <img
                src="homebutton.png"
                alt=""
                className="w-12 h-12"
            />
        </button>
    );
};

