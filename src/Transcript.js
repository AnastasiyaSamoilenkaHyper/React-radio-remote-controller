import React from "react";

function Transcript({transcriptProp}) {
  return (

    
    <>
      {" "}
      <p style={{ backgroundColor: "white", maxWidth: "100px" }}>
        {transcriptProp ? transcriptProp : "Start speaking for transcript"}
      </p>
    </>
  );
}

export default Transcript;
