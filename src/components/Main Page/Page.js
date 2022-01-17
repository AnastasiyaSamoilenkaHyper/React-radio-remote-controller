import Picture from "./Picture";
import Audio from "./Audio";
import Button from "./Button";
import SpeechRecognitionApp from "./SpeechRecognitionApp";

import React, { useState, useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Page() {
  SpeechRecognition.startListening({ continuous: true, language: "en-Us" });
  const [channels, setChannels] = useState([]);

  async function fetchChannels() {
    return fetch(
      "https://api.sr.se/api/v2/channels?pagination=false&format=json"
    )
      .then((res) => res.json())
      .then((data) => data.channels)
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    async function init() {
      const channels = await fetchChannels();
      setChannels(channels);
    }

    init();
  }, []);

  let randomNumber = doRandomNumber(channels.length);
  function doRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  //SPEECH RECOGNITION
  let speechToggle = useRef(false);
  const speechRecognitionToggle = () => {
    if (speechToggle) {
      SpeechRecognition.stopListening();
      console.log("Speech recognition stopped");
      speechToggle = false;
    } else {
      speechToggle = true;
      SpeechRecognition.startListening({ continuous: true, language: "en-Us" });
      console.log("speech recognition ON");
    }
  };

  const audioRef = useRef();

  return (
    <div className="Page">
      <h1> You have to click somewhere on the screen</h1>
      <Picture channel={channels[randomNumber]} />
      <Audio
        channel={channels[randomNumber]}
        className={"main-audio"}
      />
      
      <div className="BtnSpeech">
        <Button
          btnClass={"speak-button"}
          imgClass={"microphoneOn"}
          micIconSrc={"/assets/microphone-solid.svg"}
          channel={channels[randomNumber]}
          onclick={() => speechRecognitionToggle()}
        />
        <SpeechRecognitionApp />
      </div>
    </div>
  );
}

export default Page;
