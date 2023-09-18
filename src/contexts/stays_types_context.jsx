import { useState, useEffect } from "react";
import { StaysTypesContext } from "./contexts";
import { getStaysCountByType } from "../APIs/Database/database_service";

const StaysTypesProvider = ({ children }) => {
  const [staysTypes, setStaysTypes] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStaysCountByType();
      setStaysTypes(data);
      setHasData(true);
    };
    fetchData();
  }, []);

  return (
    <StaysTypesContext.Provider value={[staysTypes, hasData]}>
      {children}
    </StaysTypesContext.Provider>
  );
};

export default StaysTypesProvider;
