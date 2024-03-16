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
      <Router>
        <Navbar
          title="Text Uttils"
          about="About"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <FormText
              showAlert={showAlert}
              heading="Try TextUtils - word counter, character counter, remove extra spaces"
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
