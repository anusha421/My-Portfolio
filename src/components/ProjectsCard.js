import React from "react";

export default function ProjectsCard({ title, subtitle, desc, image, link }) {
  return (
    <div className="m-auto my-10 w-[80%] border border-black">
      <h3 className="p-5 lg:pt-10 text-3xl italic text-center text-slate-300">{title}</h3>
      <div className="pl-4 pb-4 max-sm:pr-4 lg:pb-10 lg:pl-10 flex flex-col lg:flex-row justify-center items-center">
        <img
          className="h-56 md:h-64 object-contain"
          src={image}
          alt={title}
        />
        <div className="p-6">
          <p className="pb-2">
            <span className="underline text-xl font-semibold">Technologies Used</span>:{" "}
            {subtitle}
          </p>
          <p className="pb-2">{desc}</p>
          <a href={link} className="text-2xl text-slate-300" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
