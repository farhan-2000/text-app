import "./App.css";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
import { useState } from "react";
// import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        title="Text Uttils"
        about="About Us"
        mode={mode}
        toogleMode={toogleMode}
      />
      <FormText heading="Enter the text here" />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
