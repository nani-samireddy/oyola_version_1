import "./App.css";
import Homepage from "./pages/homepage/home_page";
import StaysTypesProvider from "./contexts/stays_types_context";
import ExperiencesTypesProvider from "./contexts/experiences_types_context";
import { CarsTypesContext } from "./contexts/contexts";
import CarsTypesProvider from "./contexts/cars_types_context";

function App() {
  return (
    <>
      <StaysTypesProvider>
        <ExperiencesTypesProvider>
          <CarsTypesProvider>
          <Homepage />
          </CarsTypesProvider>
        </ExperiencesTypesProvider>
      </StaysTypesProvider>
    </>
  );
}

export default App;
