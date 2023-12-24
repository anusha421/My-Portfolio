import React from "react";
import Navbar from "./Navbar";
import About from "./About";

export default function Landing() {
    return (
        <div id="home" className="h-screen">
            <Navbar />
            <About />
        </div>
    )
}