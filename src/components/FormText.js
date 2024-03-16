import React, { useState } from "react";

export default function FormText(props) {
  const convertToUpText = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "primary");
  };

  const convertToLowText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "primary");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All Text Cleared", "danger");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("All Text Copied", "primary");
  };

  const handleOnGoing = (event) => {
    console.log("handleOnGoing");
    setText(event.target.value);
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All Extra Spaces Removed", "primary");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            name=""
            id="myBox"
            // className={`bg-${props.mode === "light" ? "dark" : "light"}
            // text-${props.mode === "dark" ? "light" : "dark"}`}
            cols="150"
            rows="8"
            value={text}
            onChange={handleOnGoing}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={convertToUpText}
        >
          Upper Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={convertToLowText}
        >
          Lowwer Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
