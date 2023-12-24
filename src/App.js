import React from "react";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="h-min-screen bg-gradient-to-r from-[#23859e] to-gray-400">
      <Landing />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
