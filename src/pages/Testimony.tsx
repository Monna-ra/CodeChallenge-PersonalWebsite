import React from "react";

export default function Testimony() {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 text-center" id="testimony">
            <div className="mitems-center mx-auto mb-20 w-90 h-20">
                <img src="testimony.png" alt="" />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">

                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img
                        src="client.png"
                        alt="Client"
                        className="w-full h-auto rounded-lg" 
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 text-left">
                    <p className="font-sans text-amber-700 text-lg md:text-xl">John Doe</p>
                    <h1 className="font-serif text-amber-600 text-4xl md:text-5xl mt-4">
                        "Yeah."
                    </h1>
                    <p className="font-serif font-extralight text-orange-500 text-lg md:text-xl mt-4">
                        Client expresses confusion.
                    </p>
                    <p className="font-sans text-amber-800 text-sm md:text-base mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-3 text-amber-800 hover:text-amber-400">
                            <img src="phone.png" alt="Phone" className="w-6 h-6" />
                            <p>+62123456789</p>
                        </div>
                        <div className="flex items-center space-x-3 text-amber-800 hover:text-amber-400">
                            <img src="email.png" alt="Email" className="w-6 h-6" />
                            <p>email.gmail@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}