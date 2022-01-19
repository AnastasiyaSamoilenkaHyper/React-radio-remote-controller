import "./App.css";
import Radio from "./components/Radio";
import Dogs from "./components/Dogs";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Link, Navigate, Routes, HashRouter } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  SpeechRecognition.startListening({ continuous: true, language: "en-Us" });

  let redirect = "";
  const pages = ["radio", "dogs"];
  const urls = {
    radio: "/radio",
    dogs: "/dogs",
  };
  // const [redirectUrl, setRedirectUrl] = useState("");
  let redirectUrl = useRef();
  if (redirectUrl.current) {
    
    if (pages.includes(redirectUrl.current)) {
      redirect = <Navigate to={urls[redirectUrl.current]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl.current}</p>;
    }
    // setRedirectUrl("")
  }

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Ups, your browser is not supported!");
    }
  }, []);

  // const commands = [
  //   {
  //     command: ["Open *"],
  //     callback: redirectPage => redirectUrl.current = redirectPage.current,
  //   },
  // ];
  // console.log("!!!!!!!!!!!!!!",redirectUrl.current);

  // const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className="App">
      <HashRouter>
        <div id="links">
          <Link to="/radio">Radio</Link>
          <Link to="/dogs">Dogs</Link>
        </div>

        <Routes>
          <Route path="/radio" exact element={<Radio />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>

        {redirect}
      </HashRouter>
    </div>
  );
}

export default App;
