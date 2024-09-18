import { useState } from "react";
import React from "react";

function TextForm(props) {
  const handleUpclick = () => {
    const newText = text.toUpperCase();
    props.showAlert("Converted to Upper Case","success")

    setText(newText);
  };

  const handleLoclick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")
  };

  const handleEvent = (event) => {
    setText(event.target.value);
  };

  const extractEmails = () => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const extractedEmails = text.match(emailRegex) || [];
    setEmails(extractedEmails);    
    props.showAlert("Email Extracted","success")

  };

  const clear = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")

  };

  const copyText=()=>{
    const selectText=document.getElementById("mydoc")
    selectText.select()
    navigator.clipboard.writeText(selectText.value)
    props.showAlert("Text Selected","success")

  }

  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);
  return (
    <>
      <div className="container " style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3 ">
          
          <textarea
            className="form-control"
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
            value={text}
            id="mydoc"
            rows="8"
            onChange={handleEvent}
          ></textarea>
        </div>
      </div>

      <div>

      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={handleUpclick}
        
      >
        Change To UpperCase
      </button>

      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={handleLoclick}
      >
        Change To LowerCase
      </button>

      <button
        type="button"
        className="btn btn-primary mx-1"
        onClick={extractEmails}

      >
        Extract Emails
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={clear}>
        Clear
      </button>

      <button type="button" className="btn btn-primary mx-1" onClick={copyText}>
        Copy Text
      </button>

      <div style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="my-4">The Summary of above txt is:</h2>
        <p>
          The above text has {text==="" ?text.split(" ").length-1:text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>It will take approx {0.08 * text.split(" ").length}second to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Please enter your Text in the Above Text Box"}</p>

        {emails.length > 0 && (
          <div>
            <h3>Extracted Emails:</h3>
            <ul>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        )}

        {emails.length === 0 && text && <p></p>}
      </div>
      </div>
    </>
  );
}

export default TextForm;
