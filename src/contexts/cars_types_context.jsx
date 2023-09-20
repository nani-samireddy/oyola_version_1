import { useState, useEffect } from "react";
import { CarsTypesContext } from "./contexts";

const CarsTypesProvider = ({ children }) => {
  const [carsTypes, setCarsTypes] = useState(
    [
    {
        key: "64c3449e9fa76210a787f980",
        type: "Hatchbacks",
        image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
        count: 10,
        
    },
    {
        key: "64c514bd16002dba9f5d6755",
        type: "Sedans",
        image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
        count: 10,
        
    },
    {
        key: "64c5156016002dba9f5d675b",
        type: "SUVs",
        image: "https://images.unsplash.com/photo-1532382129185-7d04c00155ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80",
        count: 22,
        
    },
    {
        key: "64c5159716002dba9f5d675e",
        type: "XUVs",
        image: "https://5.imimg.com/data5/RY/CR/GLADMIN-60132572/mahindra-xuv500.png",
        count: 20,
        
    },
    {
        key: "64c515ef16002dba9f5d6760",
        type: "Mini-Bus",
        image: "https://plus.unsplash.com/premium_photo-1676122796020-19c6df3a78b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        count: 10,
        
    },
    {
        key: "64c5163e16002dba9f5d6762",
        type: "BUS",
        image: "https://images.unsplash.com/photo-1572675339312-3e8b094a544d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        count: 10,
        
    }

  ]);
  const [hasData, setHasData] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getStaysCountByType();
  //     setcarsTypes(data);
  //     setHasData(true);
  //   };
  //   fetchData();
  // }, []);

  return (
    <CarsTypesContext.Provider value={[carsTypes, hasData]}>
      {children}
    </CarsTypesContext.Provider>
  );
};

export default CarsTypesProvider;
