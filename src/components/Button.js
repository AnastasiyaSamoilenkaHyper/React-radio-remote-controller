import microphone from "./assets/microphone-solid.svg";
import React, { useState, useEffect } from "react";

function Button() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  let recordingTrue = false;

  if (SpeechRecognition) {
    console.log("Your Browser supports speech Recognition");
    recognition.continuous = true;
    recognition.lang = "en-US";
    recognition.start();
    recordingTrue = true;
  }

  function micBtnClick() {
    console.log("micBtn clicked");

    if (!recordingTrue) {
      recognition.start();
      recordingTrue = true;
    } else {
      recognition.stop();
      recordingTrue = false;
    }
  }

  let searchFormInput = document.querySelector(".searchInput");
  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    searchFormInput.focus();
  console.log("hi",searchFormInput);

    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === "play") {
      document.querySelector("audio").play();
    }
    if (transcript.toLowerCase().trim() === "stop") {
      document.querySelector("audio").pause();
    }
    if (transcript.toLowerCase().trim() === "next") {
      // createNewPage(fetchedData);
    }
  }

  return (
    <div className="Button">
      <button onClick={micBtnClick}> Speak
        <img src={microphone} className="microphoneOn" />
      </button>
      <form action = "https://www.google.com/search" method = "get" target = "_blank" className="search-form">
        <input className="searchInput" name="q" type="text" placeholder="Speak please..." autoComplete="off" autoFocus={true} />

      </form>
    </div>
  );
}

export default Button;
