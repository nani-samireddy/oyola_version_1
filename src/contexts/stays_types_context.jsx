import { useState, useEffect } from "react";
import { StaysTypesContext } from "./contexts";
import { getStaysCountByType } from "../APIs/Database/database_service";

const StaysTypesProvider = ({ children }) => {
  const [staysTypes, setStaysTypes] = useState(
    [
    {
        key: "64c3449e9fa76210a787f980",
        type: "hotel",
        image: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        count: 2,
        
    },
    {
        key: "64c514bd16002dba9f5d6755",
        type: "resort",
        image: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        count: 0,
        
    },
    {
        key: "64c5156016002dba9f5d675b",
        type: "cottage",
        image: "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1762&q=80",
        count: 0,
        
    },
    {
        key: "64c5159716002dba9f5d675e",
        type: "campsite",
        image: "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
        count: 0,
        
    },
    {
        key: "64c515ef16002dba9f5d6760",
        type: "homestay",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        count: 0,
        
    },
    {
        key: "64c5163e16002dba9f5d6762",
        type: "other",
        image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2167&q=80",
        count: 0,
        
    }

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
