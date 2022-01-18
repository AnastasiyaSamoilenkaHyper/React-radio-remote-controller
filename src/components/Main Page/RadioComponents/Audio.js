import React from "react";

const Audio = React.forwardRef((props, ref) => {
  return (
    <div className="audio">
      <audio
        ref={ref}
        controls={true}
        className={props.className}
        allow="autoplay"
      >
        {props.channel && (
          <source
            src={props.channel.liveaudio.url.toString()}
            type="audio/mpeg"
          ></source>
        )}
      </audio>
    </div>
  );
});

export default Audio;