import microphone from "./assets/microphone-solid.svg";
import React, { useState, useEffect } from "react";

function Button() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  let recordingTrue = false;

  if (SpeechRecognition) {
    console.log("Your Browser supports speech Recognition");
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.start();
    recordingTrue = true;
  }

  function micBtnClick() {
    console.log("micBtn clicked");

    if (!recordingTrue) {
      setmicrophoneActivator(false);
      recognition.start();
      recordingTrue = true;
    } else {
      recognition.stop();
      recordingTrue = false;
    }
  }

  return (
    <div className="Button">
      <button onClick={micBtnClick}>
        Speak
        <img src={microphone} className="microphoneOn" />
      </button>
      <input className="searchInput" />
    </div>
  );
}

export default Button;
