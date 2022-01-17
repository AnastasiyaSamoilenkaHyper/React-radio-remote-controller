import React from "react";

function Audio({ channel, className }) {
  return (
    <div className="audio">
      <audio controls={true} className={className}  allow="autoplay">
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
