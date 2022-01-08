import Picture from "./Picture";
import Audio from "./Audio";
import Button from "./Button";

import React, { useState, useEffect } from "react";

function Page() {
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
      // console.log(channels);
    }

    init();
  }, []);

  let randomNumber = doRandomNumber(channels.length);
  function doRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  if (channels[0]) {
  console.log(channels[0].liveaudio.url);
    
  }
  // let song = channels[0].image;
  // console.log(song)

  return (
    <div className="App">
      <h1> You have to click somewhere on the screen</h1>
      <Picture channel={channels[randomNumber]} />
      <Audio channel={channels[randomNumber]} />
      <Button channel={channels[randomNumber]}/>
    </div>
  );
}

export default Page;
