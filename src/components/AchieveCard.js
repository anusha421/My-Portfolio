import React from "react";

export default function AchieveCard({ title, desc, link }) {
  return (
    <div className="border border-black m-4 p-6 md:p-7 rounded-xl w-[75%] md:w-[60%]">
      <h2 className="italic text-xl py-2 text-slate-300">{title}</h2>
      <p className="pb-2">{desc}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="text-blue-950 font-bold border border-blue-700 p-2 hover:bg-blue-500">See Credential</button>
      </a>
    </div>
  );
}
