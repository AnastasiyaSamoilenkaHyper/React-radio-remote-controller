import microphone from "./assets/microphone-solid.svg";
import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

let speechToggle = true;

function Button({ channel }) {
  SpeechRecognition.startListening({ continuous: true, language: "en-Us" });
  console.log("speech recognition ON");

  function speechRecognitionToggle() {
    if (speechToggle) {
      SpeechRecognition.stopListening();
      console.log("Speech recognition stopped");
      speechToggle = false;
    } else {
      speechToggle = true;
      SpeechRecognition.startListening({ continuous: true, language: "en-Us" });

    }
  }

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);
  let songUrl;
  if (channel) {
    // console.log("Speech recognition on")
    songUrl = channel.liveaudio.url;
  }
  let audio = document.querySelector(".main-audio");
  const commands = [
    {
      command: "play",
      callback: () => audio.play(),
      matchInterim: true,
    },
    {
      command: "stop",
      callback: () => audio.pause(),
      matchInterim: true,
    },
    {
      command: "next",
      callback: () => nextPage(),
      matchInterim: true,
    },
  ];

  function nextPage() {
    window.location.reload(true);
  }

  useEffect(() => {
    console.log("Useeefect");
  }, []);

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className="Button">
      <button onClick={speechRecognitionToggle}>
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
