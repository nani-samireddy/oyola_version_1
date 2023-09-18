import "./App.css";
import Homepage from "./pages/homepage/home_page";
import StaysTypesProvider from "./contexts/stays_types_context";

function App() {
  return (
    <>
      <StaysTypesProvider>
        <Homepage />
      </StaysTypesProvider>
    </>
  );
}

export default App;
