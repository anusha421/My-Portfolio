import React from "react";
import profileimg from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      className="md:h-[88%] p-5 flex flex-col md:flex-row sm:p-4 justify-center items-center"
      id="#about"
    >
      <div className="md:w-1/2 flex justify-end">
        <img
          className="h-72 md:h-96 object-contain rounded-lg outline"
          src={profileimg}
          alt="profile"
        />
      </div>
      <div className="md:w-1/2 md:text-left text-center">
        <h1 className="text-3xl sm:m-5 py-2">
          Hi, I'm <br /><span className="text-stone-200">Anusha Sharma</span>
        </h1>
        <p className="sm:m-5 sm:mr-10 lg:w-1/2 italic">
          Fueled by a curiosity for emerging technologies, I'm dedicated to
          mastering the intricacies of front-end and back-end development.
        </p>
      </div>
    </section>
  );
}
