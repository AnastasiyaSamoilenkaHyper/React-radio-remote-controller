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
      console.log(channels);
    }

    init();
  }, []);

  let randomNumber = doRandomNumber(channels.length);
  function doRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  // console.log(randomNumber);

  return (
    <div className="App">
      <Picture channel={channels[randomNumber]} />
      <Audio channel={channels[randomNumber]} />
    </div>
  );
}

export default Page;
