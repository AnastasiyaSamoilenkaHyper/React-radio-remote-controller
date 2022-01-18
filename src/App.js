import "./App.css";
import Radio from "./components/Radio";
import Dogs from "./components/Dogs";
import Transcript from "./Transcript";



import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Link, Navigate, Routes, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App({ refProp }) {
  SpeechRecognition.startListening({ continuous: true, language: "en-Us" });

  // let redirect = "";
  const pages = ["radio", "dogs"];
  const urls = {
    radio: "/radio",
    dogs: "/dogs",
  };
  // const [redirectUrl, setRedirectUrl] = useState("");
  // let redirectUrl = useRef();
  let redirect = ""

  // if (redirectUrl) {
  //   if (pages.includes(redirectUrl)) {
  //     redirect = <Navigate to={urls[redirectUrl]} />
  //   } else {
  //     redirect = <p>Could not find page: {redirectUrl}</p>
  //   }
  // }

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
    // {
    //   command: ["Open *"],
    //   callback: redirectPage => setRedirectUrl(redirectPage),
    // },
  ];

  useEffect(() => {
  const { transcript } = useSpeechRecognition({ commands });
    
  }, []);

  function nextPage() {
    window.location.reload(true);
  }


  return (
    <div className="App">
      {/* <Transcript transcriptProp={transcript}/> */}
      <BrowserRouter >
        <div id="links" style={{ backgroundColor: "pink", padding: "10px"}}>
          <Link to="/radio">Radio</Link>
          <Link to="/dogs">Dogs</Link>
        </div>

        <Routes>
          <Route path="/radio" exact element={<Radio />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>

        {redirect}
      </BrowserRouter>
    </div>
  );
}

export default App;
