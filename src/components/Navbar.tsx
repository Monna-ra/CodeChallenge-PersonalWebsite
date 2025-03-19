import React from "react";

export default function Navbar () {
    return (
        <nav className="bg-black text-white px-8 md:px-16 lg:px-26">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold font-serif hidden md:inline">R.A</div>
                <div className="space-x-6">
                    <a href="#home" className="hover:text-orange-400 font-serif">Home</a>
                    <a href="#about" className="hover:text-orange-400 font-serif">About Me</a>
                    <a href="#skill" className="hover:text-orange-400 font-serif">Skill</a>
                    <a href="#portfolio" className="hover:text-orange-400 font-serif">Portfolio</a>
                    <a href="#testimony" className="hover:text-orange-400 font-serif">Testimony</a>
                </div>
                <a href="#findme">
                <button className="bg-amber-900 font-serif text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full">
                    Find Me!
                </button>
            </a>
            </div>
        </nav>
    )
};
