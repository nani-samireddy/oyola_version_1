import React from "react";
import TypeCard from "../type-card/type_card";

export default function SectionComponent({ title, data, CardIcon }) {
  return (
    <div className=" flex flex-col items-center justify-center my-32">
      <h2 className="text-5xl font-bold font-dm_sans text-gray-700 my-10">
        {title}
      </h2>
      <div className="flex flex-wrap justify-evenly gap-6 my-10">
        {data.map((item, index) => {
          return <TypeCard key={index} data={item} CardIcon={CardIcon} />;
        })}
      </div>
    </div>
  );
}
