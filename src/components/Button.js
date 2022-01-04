import microphone from "./assets/microphone-solid.svg";
import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Button() {
  const { transcript } = useSpeechRecognition();

  let speachToggle = false;
  function speachRecognitionToggle() {
    if (!speachToggle) {
      speachToggle = true;
      SpeechRecognition.startListening();
    } else {
      speachToggle = false;
      SpeechRecognition.stopListening();
    }
  }

  return (
    <div className="Button">
      <button onClick={speachRecognitionToggle}> Speak
        <img src={microphone} className="microphoneOn" />
      </button>
      <form action = "https://www.google.com/search" method = "get" target = "_blank" className="search-form">
        <input className="searchInput" name="q" type="text" placeholder="Speak please..." autoComplete="off" autoFocus={true} />

      </form>
    </div>
  );
}

export default Button;
