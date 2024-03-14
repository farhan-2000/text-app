import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import FormText from "./components/FormText";
import Alert from "./components/Alert";
// import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Uttils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Uttils - Light Mode";
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
      <Alert alert={alert} />
      <FormText showAlert={showAlert} heading="Enter the text here" />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
