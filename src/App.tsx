import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Landing } from "./views";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
