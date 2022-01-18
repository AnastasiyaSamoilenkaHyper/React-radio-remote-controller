import React, { useState, useEffect } from "react";


function Button({micIconSrc, onclick, btnClass, imgClass}) {
  
  

  return (
    <div className="Button">
      <button onClick={onclick} className={btnClass}>
      <img src={micIconSrc} className={imgClass} />
      </button>
    </div>
  );
}

export default Button;
