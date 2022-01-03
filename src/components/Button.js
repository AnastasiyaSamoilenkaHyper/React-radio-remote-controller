import microphone from "./assets/microphone-solid.svg";

function Button() {
  return (
    <div className="Button">
      <button>
        Speak
        <img src={microphone} className="microphoneOn" />
      </button>
      <input className="searchInput" />
    </div>
  );
}

export default Button;
