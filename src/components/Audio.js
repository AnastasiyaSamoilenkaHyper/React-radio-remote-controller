import React from "react";

function Audio({ channel }) {
  return (
    <div className="audio">
      <audio controls={true} className="main-audio">
        {channel && (
          <source
            src={channel.liveaudio.url.toString()}
            type="audio/mpeg"
          ></source>
        )}
      </audio>
    </div>
  );
}

export default Audio;
