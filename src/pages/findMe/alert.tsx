"use client"; 

import React, { useState } from "react";

interface AlertIconProps {
    imageSrc: string; 
    message: string; 
}

const AlertIcon: React.FC<AlertIconProps> = ({ imageSrc, message }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                className="transform transition-transform duration-300 hover:scale-110"
                onClick={handleClick}
            >
                <img src={imageSrc} alt="Icon" className="w-10 h-10" />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg font-semibold mb-4">{message}</p>
                        <button
                            onClick={closeModal}
                            className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AlertIcon;