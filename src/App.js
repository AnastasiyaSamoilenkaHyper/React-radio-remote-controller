import "./App.css";
import Radio from "./components/Radio";
import Dogs from "./components/Dogs";
import React, { useState } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [redirectUrl, setRedirectUrl] = useState("")
  return (
    <div className="App">
      <BrowserRouter>
        <div id="links">
          <Link to="/">Radio</Link>
          <Link to="/dogs">Dogs</Link>
        </div>
        <Route path="/" exact component={Radio} />
        <Route path="/dogs" component={Dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
