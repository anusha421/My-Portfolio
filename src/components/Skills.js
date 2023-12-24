import React from "react";
import { skills } from "../data";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div id="skills">
      <h1 className="mt-20 mb-14 text-4xl text-center text-white">Skills</h1>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, i) => (
          <SkillCard key={i} name={skill.name} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
}
