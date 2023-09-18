import React from "react";

export default function TypeCard({ data, CardIcon }) {
  return (
    <div className=" card flex flex-col items-start gap-1 ">
      <div className=" overflow-hidden h-60 w-60 rounded-3xl ">
        <img
          className="h-full w-full object-cover overflow-hidden rounded-3xl"
          src={data.image}
          alt=""
        />
      </div>
      <h1 className="font-poppins text-xl mt-2">{data.type}</h1>
      <div className="text-gray-400 text-sm flex items-center gap-2">
        <CardIcon  className="h-4"/>
        <span>{data.count + "+ " + data.type}s</span>
      </div>
    </div>
  );
}
