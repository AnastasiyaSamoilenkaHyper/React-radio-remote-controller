import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechRecognitionApp({ refProp }) {
  
  const commands = [
    {
      command: "play",
      callback: () => refProp.play(),
      matchInterim: true,
    },
    {
      command: "stop",
      callback: () => refProp.pause(),
      matchInterim: true,
    },
    {
      command: "next",
      callback: () => nextPage(),
      matchInterim: true,
    },
   
  ];

  const { transcript } = useSpeechRecognition({ commands });

  function nextPage() {
    window.location.reload(true);
  }

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
