import React, { useState } from "react";
import PropTypes from "prop-types";
import CryptoJS from "crypto-js";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isEnc, setIsEnc] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };
  const handleClearText = () => {
    setIsEnc(false);
    setText("");
  };
  const handleOnChange = (event) => {
    if (isEnc) {
      setText(text);
    } else {
      setText(event.target.value);
    }
  };
  const handleEncrypt = () => {
    let encrypted = CryptoJS.AES.encrypt(text, "Secret Passphrase").toString();
    setIsEnc(true);
    setText(encrypted);
  };
  const handleDecrypt = () => {
    setIsEnc(false);
    let decryptedCode = CryptoJS.AES.decrypt(text, "Secret Passphrase");
    let decrypted = decryptedCode.toString(CryptoJS.enc.Utf8);
    setText(decrypted);
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}></textarea>
        </div>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleUpClick}
          disabled={isEnc}>
          Convert To UpperCase
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleLowerClick}
          disabled={isEnc}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleClearText}>
          Clear Text
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleEncrypt}
          disabled={isEnc}>
          Encrypt Text
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleDecrypt}
          disabled={!isEnc}>
          Decrypt Text
        </button>
        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleCopyText}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>You text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propType = { heading: PropTypes.string };
