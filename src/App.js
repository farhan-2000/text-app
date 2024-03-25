import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import FormText from "./components/FormText";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    }, 3000);
  };
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
  };

  const toogleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    showAlert(cls + " mode has been enabled", cls);
    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "black";
    //   document.body.style.color = "white";
    //   showAlert("Dark mode has been enabled", "success");
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   document.body.style.color = "black";
    //   showAlert("Light mode has been enabled", "success");
    // }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Uttils"
          about="About"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <FormText
              showAlert={showAlert}
              heading="Try TextUtils - word counter, copy text, character counter, remove extra spaces"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
