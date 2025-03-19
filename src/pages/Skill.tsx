import React from "react";

const Skill = () => {
    return (
        <div className=" text-white" id="skill">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className="items-center mx-auto mb-20 w-90 h-20">
            <img src="skill.png" alt=""/>
            </div>
            <div className="container mx-auto flex items-center justify-center space-x-8 pb-20">
                <div className="transform transition-transform duration-300 hover:scale-110"><img src="html.png" alt="HTML" /></div>
                <div className="transform transition-transform duration-300 hover:scale-110"><img src="css.png" alt="" /></div>
                <div className="transform transition-transform duration-300 hover:scale-110"><img src="js.png" alt="" /></div>
                <div className="transform transition-transform duration-300 hover:scale-110"><img src="react.png" alt="" /></div>
        </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-amber-600 h-2.5 rounded-full w-7/12">
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="javascript" className="w-2/12">Javascript</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-amber-600 h-2.5 rounded-full w-5/12">
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="ReactJS" className="w-2/12">React JS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-amber-600 h-2.5 rounded-full w-6/12">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Skill;