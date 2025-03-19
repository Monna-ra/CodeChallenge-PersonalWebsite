import React from "react";

export default function Hero() {
    return (
        <div className="lg:mx-15 container flex flex-col md:flex-row py-8 md:py-16 relative">
            <div className="absolute inset-0 z-0">
                <img
                    src="profile.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="px-4 md:px-8 lg:px-16 py-8 md:py-16 relative z-10 text-center md:text-left">

                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
                    Hello!
                </h1>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4">
                    <img
                        src="name.png"
                        alt="Your Name"
                        className="mx-auto md:mx-0"
                    />
                </h1>
                <p className="font-sans text-xs md:text-sm lg:text-base text-orange-900 mt-4 max-w-2xl mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-8 space-x-4">
                    <a href="#findme">
                        <button className="bg-amber-900 font-serif text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full text-sm md:text-base">
                            Find Me!
                        </button>
                    </a>
                    <a href="#portfolio">
                        <button className="bg-amber-900 font-serif text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full text-sm md:text-base">
                            Portfolio
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}