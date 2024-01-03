import React from "react";

export default function Contact() {
  return (
    <footer className="h-[20%] w-auto bg-slate-800 text-center text-gray-300 p-2 mt-10">
      <div>
        <h3>Copyright &#169; Anusha Sharma 2024</h3>

        <a
          href="https://github.com/anusha421"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anusha-sharma-44a511222/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCI9kkZgqNe_V2ntLBPSTI0Q"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}
