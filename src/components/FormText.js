import React, { useState } from "react";

export default function FormText(props) {
  const convertToUpText = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowText = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnGoing = (event) => {
    console.log("handleOnGoing");
    setText(event.target.value);
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
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
            cols="150"
            rows="8"
            value={text}
            onChange={handleOnGoing}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={convertToUpText}
        >
          Upper Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={convertToLowText}
        >
          Lowwer Case
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
