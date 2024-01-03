import { useState, useEffect } from "react";
import { StaysTypesContext } from "./contexts";
import { getStaysCountByType } from "../APIs/Database/database_service";

const StaysTypesProvider = ({ children }) => {
  const [staysTypes, setStaysTypes] = useState([
    {
      key: "64c3449e9fa76210a787f980",
      name: "Krishna Tara comforts",
      type: "hotel",
      image:
        "https://content3.jdmagicbox.com/comp/visakhapatnam/d5/0891px891.x891.120928150246.c8d5/catalogue/krishna-tara-comforts-araku-railway-station-visakhapatnam-hotels-3ix4rt1.jpg",
      count: 1,
    },
    {
      key: "64c3449e9fa76210a787f981",
      name: "Rajdhani grand",
      type: "hotel",
      image:
        "https://files.yappe.in/place/full/hotel-rajadhani-grand-6578823.webp",
      count: 1,
    },
    {
      key: "64c514bd16002dba9f5d6755",
      name: "Sri Sowgandhi Residency",
      type: "hotel",
      image:
        "https://files.yappe.in/place/full/sri-sowgandhi-residency-8645172.webp",
      count: 0,
    },
    {
      key: "64c5156016002dba9f5d675b",
      type: "resort",
      name: "Kollaput Resorts",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOo4CI7b-Ne7s2sJgJ9zV6-Lw0MXEQjcawew5xb=s1360-w1360-h1020",
      count: 0,
    },
    {
      key: "64c5159716002dba9f5d675e",
      type: "experience",
      name: "Giri grama Dharshini",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOtjqQ_EbXeH4M8Ha0WiAgz02HzT1Raj_T29dMK=s1360-w1360-h1020",
      count: 0,
    },
    {
      key: "64c515ef16002dba9f5d6760",
      type: "resort",
      name: "Araku Haritha Valley Resort",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNCgsAFakVQ_F-q0_SKsvdZ8gyhLXGEOBUl-u4N=w408-h306-k-no",
      count: 0,
    },
    {
      key: "64c5163e16002dba9f5d6762",
      type: "resort",
      name: "Mayuri resorts araku",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/04/c5/13/5d/mayuri-araku.jpg",
      count: 0,
    },
    {
      key: "64c5167a16002dba9f5d6764",
      type: "resort",
      name: "Desia Social Resorts",
      image:
        "https://r1imghtlak.mmtcdn.com/71d62cdc-85d8-497a-9c37-380cd9fa80ab.jpeg?output-quality=75&downsize=*:612&crop=910:612;157,0&output-format=jpg",
    },
  ]);
  const [hasData, setHasData] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getStaysCountByType();
  //     setStaysTypes(data);
  //     setHasData(true);
  //   };
  //   fetchData();
  // }, []);

  return (
    <StaysTypesContext.Provider value={[staysTypes, hasData]}>
      {children}
    </StaysTypesContext.Provider>
  );
};

export default StaysTypesProvider;
