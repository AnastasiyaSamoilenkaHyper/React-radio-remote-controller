import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechRecognitionApp({ micIconSrc }) {

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

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
  
  const { transcript } = useSpeechRecognition({ commands });

  return (
    <>
      {" "}
      <p style={{ backgroundColor: "white", maxWidth: "100px" }}>
        {transcript ? transcript : "Start listening for transcript"}
      </p>
    </>
  );
}

export default SpeechRecognitionApp;
