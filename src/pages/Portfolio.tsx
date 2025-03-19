import React from "react";

const showcase = [
    {
        id: 1,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
        id: 5,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
        id: 6,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
]

export default function Portfolio ()  {
    return (
       <div className=" text-white py-20" id="portfolio">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="items-center mx-auto mb-20 w-100 h-30">
            <img src="portfolio.png" alt=""/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showcase.map((showcase) => (
                    <div key={showcase.id}
                    className="bg-amber-700 px-6 pb-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105">
                        <div className="font-serif text-right text-2x1 font-bold text-transparent bg-clip-text bg-amber-600">
                            {showcase.id}
                        </div>
                        <h3 className="font-serif mt-2 text-2x1 font-bold text-transparent bg-clip-text 
                        bg-amber-950">
                            {showcase.title}
                        </h3>
                        <p className="mt-2 text-gray-300">
                            {showcase.description}
                        </p>
                        <a href="#" className="mt-4 inline-block text-amber-950 hover:text-amber-200">Read More</a>
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
};
