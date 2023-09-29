import { useState, useEffect } from "react";
import { ExperiencesTypesContext } from "./contexts";

const ExperiencesTypesProvider = ({ children }) => {
  const [experiencesTypes, setExperiencesTypes] = useState([
    {
      key: "64c3449e9fa76210a787f980",
      type: "Tribal village visit",
      image:
        "https://i.pinimg.com/564x/d0/7c/ed/d07ced782039749b69775894d1bca572.jpg",
      count: 10,
    },
    {
      key: "64c514bd16002dba9f5d6755",
      type: "Tribal cuisine",
      image:
        "https://i.pinimg.com/564x/3e/bf/31/3ebf3189a4375567a53dc8c054ee389a.jpg",
      count: 20,
    },
    {
      key: "64c5156016002dba9f5d675b",
      type: "Trekking",
      image:
        "https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      count: 20,
    },
    {
      key: "64c5159716002dba9f5d675e",
      type: "Waterfalls",
      image:
        "https://images.unsplash.com/photo-1638476659064-c3bbdadb75ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80",
      count: 20,
    },
    {
      key: "64c515ef16002dba9f5d6760",
      type: "Dhimsa Dance",
      image: "https://live.staticflickr.com/3933/15424654966_07b2987f94_k.jpg",
      count: 1,
    },
  ]);
  const [hasData, setHasData] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getStaysCountByType();
  //     setExperiencesTypes(data);
  //     setHasData(true);
  //   };
  //   fetchData();
  // }, []);

  return (
    <ExperiencesTypesContext.Provider value={[experiencesTypes, hasData]}>
      {children}
    </ExperiencesTypesContext.Provider>
  );
};

export default ExperiencesTypesProvider;
