import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

export default function PreviewCard({ data }) {
  const totalPrice = (data.guests.adults + data.guests.children) * data.price;
  console.log(totalPrice);
  return (
    <div className="preview-card ">
      <div className="overflow-hidden rounded-t-3xl h-64">
        <img
          className="h-full w-full object-cover rounded-t-3xl"
          src={data.image}
        />
      </div>
      <div className="p-4">
        <div className=" font-poppins z-10 hover:text-blue-500 flex items-start justify-between ">
          <h1 className=" text-base font-medium">{data.title}</h1>
          <h1 className="font-bold text-green-500">₹{data.price}/night</h1>
        </div>
        <p className="text-xs text-gray-400">{data.line2}</p>
        {data.addOns && (
          <div className="flex items-center gap-2 mt-3">
            {data.addOns.map((addOn) => (
              <div className="bg-gray-100 rounded-lg p-1">
                <p className="text-xs text-gray-400">{addOn}</p>
              </div>
            ))}
          </div>
        )}
        <hr className="my-3" />
        <div className="flex items-center  justify-between">
          <div>
            <span>
              ₹{totalPrice + " "}
              total
            </span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="h-5 text-yellow-500" />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
