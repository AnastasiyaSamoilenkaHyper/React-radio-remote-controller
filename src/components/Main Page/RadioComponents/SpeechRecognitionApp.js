import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

function SpeechRecognitionApp({ refProp }) {
  

  // let audio = document.querySelector(".main-audio");
  // const audio = refProp;

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
    // {
    //   command: ["Open *"],
    //   callback: redirectPage => setRedirectUrl(redirectPage),
    // },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  // const [redirectUrl, setRedirectUrl] = useState("");

  // const pages = ["radio", "dogs"];
  // const urls = {
  //   radio: "/",
  //   dogs: "/dogs",
  // };

  // let redirect = ""



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
