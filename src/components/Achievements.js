import React from "react";
import { achievements } from "../data";
import AchieveCard from "./AchieveCard";

export default function Achievements() {
  return (
    <div id="achievements" className="p-5 flex flex-col justify-center items-center ">
      <h1 className="mb-14 text-4xl text-center text-white">Achievements</h1>
      {achievements.map((achievement, i) =>  <AchieveCard key={i} title={achievement.title} desc={achievement.description} link={achievement.certificate}/>)}
    </div>
  );
}
