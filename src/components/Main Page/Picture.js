import React from "react";

function Picture({ channel }) {
  return (
    <div className="main-image">
      {channel && <img src={channel.image} alt="image" />}
    </div>
  );
}

export default Picture;
