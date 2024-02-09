import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case succes", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const [text, setText] = useState("");

  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter text here.................."
          onChange={handleOnChange}
          // value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "#C0C0C0" : "white",
            color: props.mode === "dark" ? "white" : "grey",
          }}
          id="myBox"
          rows="10"
        ></textarea>
        <br />
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        {/* diff buttons */}
        <button
          className="btn btn-primary mx-1 my-1"
          type="submit"
          onClick={handleLpClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          type="submit"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        // style={{ color: props.mode === "dark" ? "white" : "grey" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
