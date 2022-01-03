import microphone from './assets/microphone-solid.svg'
import React, { useState, useEffect } from "react";


function Button() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition; 
    const recognition = new SpeechRecognition();
  
  if (SpeechRecognition) {
    console.log("Your Browser supports speech Recognition");
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.start();
  }

  const [microphoneActivator, setmicrophoneActivator] = useState(true);
  
  function micBtnClick() {
    console.log("micBtn clicked");
    if (microphoneActivator) {
      setmicrophoneActivator(false);
      recognition.start(); 
    } else {
      recognition.stop();
    }
  }

 
  return (
    <div className="Button">
      <button onClick={micBtnClick}>Speak
        <img src={microphone} className="microphoneOn" /></button>
      <input  className="searchInput"/>
    </div>
  )
}



export default Button

