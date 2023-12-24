import React from "react"

export default function SkillCard({ name, logo }) {
    return (
        <div className="flex flex-col justify-center m-2 lg:m-14 p-5 h-36 w-36 md:h-auto md:w-auto border border-black hover:bg-cyan-950 hover:scale-125">
            <img className="h-12 md:h-28 object-contain" src={logo} alt={name} />
            <p className="skills text-xl text-center">{name}</p>
        </div>
    );
}