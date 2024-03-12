import "./App.css";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
// import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar title="Text Uttils" about="About Us" />
      <FormText heading="Enter the text here" />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
