
import React, { useState, useEffect, useRef, forwardRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";


const SpeechRecognitionApp = React.forwardRef(({ audioRef }, ref) => {
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  // let audio = document.querySelector(".main-audio");
  const audio =  audioRef
  
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
});

// function SpeechRecognitionApp({ audioRef}) {

//   useEffect(() => {
//     if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//       alert("Ups, your browser is not supported!");
//     }
//   }, []);

//   // let audio = document.querySelector(".main-audio");
//   const audio =  audioRef.current.getInstance();
  
//   const commands = [
//     {
//       command: "play",
//       callback: () => audio.play(),
//       matchInterim: true,
//     },
//     {
//       command: "stop",
//       callback: () => audio.pause(),
//       matchInterim: true,
//     },
//     {
//       command: "next",
//       callback: () => nextPage(),
//       matchInterim: true,
//     },
//   ];

//   function nextPage() {
//     window.location.reload(true);
//   }
  
//   const { transcript } = useSpeechRecognition({ commands });

  

//   return (
//     <>
//       {" "}
//       <p style={{ backgroundColor: "white", maxWidth: "100px" }}>
//         {transcript ? transcript : "Start listening for transcript"}
//       </p>
//     </>
//   );
// }

export default SpeechRecognitionApp;
