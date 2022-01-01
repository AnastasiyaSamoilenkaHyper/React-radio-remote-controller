import React from "react";

function Picture({ channel }) {
  return (
    <div className="image">
      {channel && <img src={channel.image} alt="image" />}
    </div>
  );
}

export default Picture;
