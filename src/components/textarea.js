import React, { useState } from "react";
import copy from "copy-to-clipboard";
export default function TextArea(props) {
  const [text, setText] = useState("");
  const countWord = (text) => {
    // console.log("Word is counting");
    if (text.length === 0) return 0;
    if (text[text.length - 1] === " ") return text.split(" ").length - 1;
    return text.split(" ").length;
  };
  const onUpClickHandler = () => {
    // console.log(text);
    props.showAlert("Text converted to uppercase");
    setText(text.toUpperCase());
  };
  const onLoClickHandler = () => {
    // console.log(text);
    props.showAlert("Text converted to lowercase");
    setText(text.toLowerCase());
  };
  const onClickCopy = () => {
    // console.log(text);
    props.showAlert("Text copied to clipboard");
    copy(text);
  };
  const onChangeHandler = (event) => {
    // console.log(text);
    setText(event.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          value={text}
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={onChangeHandler}
          style={{
            backgroundColor: props.mode === "dark" ? "#20263c" : "white",
            color: props.mode === "dark" ? "white" : "black",
            fontSize: "22px",
          }}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={onUpClickHandler}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={onLoClickHandler}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={onClickCopy}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          Words:{countWord(text)} and Characters: {text.length}
        </p>
      </div>
    </>
  );
}
