import axios from "axios";
const BASE_URL = "http://localhost:3001/api/hotels";

export const getStaysCountByType = async () => {
  const response = await fetch(
    "http://localhost:3001/api/hotel-types/get-hotel-types"
  );
  const data = await response.json();
  let temp = data.map((stayType) => {
    return {
      image: stayType.image,
      count: stayType.count,
      type: stayType.type,
    };
  });
  return temp;
};
