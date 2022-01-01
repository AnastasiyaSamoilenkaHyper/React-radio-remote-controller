import Picture from "./Picture";
import React, { useState, useEffect } from "react";

export default function Page() {
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

  return (
    <div className="App">
      <Picture channel={channels[0]} />
    </div>
  );
}

// export default Page;
