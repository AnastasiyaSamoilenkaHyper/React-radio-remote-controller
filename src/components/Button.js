import microphone from "./assets/microphone-solid.svg";
import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

let speachToggle = false;

function Button() {
  

  function speachRecognitionToggle() {
    if (!speachToggle) {
      console.log("hii")
      speachToggle = true;
      SpeechRecognition.startListening({ continuous: true, language: "en-Us" });
    } else {
      
      SpeechRecognition.stopListening();
      console.log("Speach");
      speachToggle = false;
      // SpeechRecognition.startListening({ continuous: false, language: "en-Us" });
    }
  }

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  const commands = [
    {
      command: "Hello",
      callback: () => alert("You just said hi!!"),
      matchInterim: true,
    },
    {
      command: "stop",
      callback: () => alert("You just said stop!!"),
      matchInterim: true,
    },
  ];

  useEffect(() => {
    console.log("Useeefect");
  }, []);

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className="Button">
      <button onClick={speachRecognitionToggle}>
        {" "}
        Speak
        <img src={microphone} className="microphoneOn" />
      </button>

      <form
        action="https://www.google.com/search"
        method="get"
        target="_blank"
        className="search-form"
      >
        {/* <input className="searchInput" name="q" type="text" placeholder="Speak please..." autoComplete="off" autoFocus={true}  /> */}
        <p>{transcript ? transcript : "Start listening for transcript"}</p>
      </form>
    </div>
  );
}

export default Button;
